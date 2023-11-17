import '../assets/css/work-list.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getJsonData } from '../apiRequests/apiRequest';

const WorkList = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const { data } = await getJsonData('work-list.json');
                setData(data['list']);
            } catch (error) {
                console.log(error);
            }
        })()
    }, [])

    return (
        <section className="work-list py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="title d-block fw-bold text-uppercase">Work List</h3>
                        <p className="description fw-bold">We provide the Perfect Solution to your business growth</p>
                    </div>
                </div>
                <div className="row list py-5">
                    {data.map((item, index) => (

                        <div key={index.toString()} className="col-md-4">
                            <div className="work-icon">
                                <span className='d-inline-block'><i className={item.icon}></i></span>
                            </div>
                            <div className="work-body my-5">
                                <h5 className="title">{item.title}</h5>
                                <p className="description">{item.description}</p>

                            </div>
                            <Link to={item.link}>Learn More <i className="fas fa-arrow-right"></i></Link>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default WorkList
