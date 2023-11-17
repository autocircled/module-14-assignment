import { useEffect, useState } from 'react'
import { getJsonData } from '../apiRequests/apiRequest'

const Services = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const { data } = await getJsonData('services.json')
                setData(data['data']);
            } catch (error) {
                console.log(error);
            }
        })()

    }, [])

    return (
        <section className="services py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="title d-block fw-bold text-uppercase">Our All Services</h2>
                        <p className="description fw-bold">We Provide Best<br />Web Design Services</p>
                    </div>

                </div>
                <div className="row list py-5">
                    {data.map((item, index) => (

                        <div key={index.toString()} className="col-md-6 my-4 service rounded">
                            <div className="inner-wrapper p-5 shadow-sm rounded-5">
                                <div className="team-body mb-4">
                                    <h3 className="name">{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                                <div className="service-picture text-center">
                                    <img className="img-fluid" src={item.image} alt={item.title} />

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Services
