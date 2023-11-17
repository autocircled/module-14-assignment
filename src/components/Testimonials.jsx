import { useEffect, useState } from 'react'
import '../assets/css/testimonials.css'
import { getJsonData } from '../apiRequests/apiRequest'

const Testimonials = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const { data } = await getJsonData('testimonials.json')
                setData(data['data']);
            } catch (error) {
                console.log(error);
            }
        })()

    }, [])
    return (
        <section className="testimonials py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="title d-block fw-bold text-uppercase">Testimonial List</h2>
                        <p className="description fw-bold">Better Agency/SEO Solution<br />At Your Fingertips</p>
                    </div>

                </div>
                <div className="row list py-5">
                    {data.map((item, index) => (
                        <div key={index.toString()} className="col-md-4 my-4 testimonial rounded">
                            <div className="inner-wrapper p-5 shadow-sm rounded-5">
                                <div className="client-picture text-center">
                                    <img className="img-fluid rounded" src={item.image} alt={item.title} />
                                </div>
                                <div className="quote-body text-center mt-4">
                                    <p className='quote fst-italic'>{item.quote}</p>
                                    <h3 className="name">{item.name}</h3>
                                    <p className="position">{item.position}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
