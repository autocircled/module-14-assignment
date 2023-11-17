import { useEffect, useState } from 'react'
import { getJsonData } from '../apiRequests/apiRequest'

const FeaturedProjects = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const { data } = await getJsonData('projects.json');
                setData(data['data']);
            } catch (error) {
                console.log(error);
            }
        })()
    }, [])

    return (
        <section className="featured-projects py-5" style={{ backgroundColor: '#F0FDF4' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="title d-block fw-bold text-uppercase">Featured Project</h3>
                        <p className="description fw-bold">We provide the Perfect Solution to your business growth</p>
                    </div>
                </div>
                <div className="row list py-5">
                    <div className="col-md-6">
                        {data.map((item, index) => (
                            item['tag'] === 'vip' &&
                            <div key={index.toString()} className='inner-wrrapper'>
                                <div className="thumbnail">
                                    <img className='img-fluid' src={item.image} alt="" />
                                </div>
                                <div className="work-body mt-3">
                                    <span className="d-block time heading">{item.time}</span>
                                    <h5 className="title">{item.title}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            {data.map((item, index) => (
                                item['tag'] === 'featured' &&
                                <div key={index.toString()} className="col-md-6 mb-4">
                                    <div className="thumbnail">
                                        <img className="img-fluid" src={item.image} alt="" />
                                    </div>
                                    <div className="work-body mt-3">
                                        <span className="d-block time heading">{item.time}</span>
                                        <h5 className="title">{item.title}</h5>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default FeaturedProjects
