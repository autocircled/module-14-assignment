import { useState } from 'react'

const Services = () => {
    const [data] = useState([
        {
            title: 'Build & Launch without problems',
            desc: 'Increase your team’s productivity and save time with a bot that answers and fields customer inquiries',
            image: '/images/service-1.png'
        },
        {
            title: 'Build & Launch without problems',
            desc: 'Increase your team’s productivity and save time with a bot that answers and fields customer inquiries',
            image: '/images/service-2.png'
        },
        {
            title: 'Build & Launch without problems',
            desc: 'Increase your team’s productivity and save time with a bot that answers and fields customer inquiries',
            image: '/images/service-3.png'
        },
        {
            title: 'Build & Launch without problems',
            desc: 'Increase your team’s productivity and save time with a bot that answers and fields customer inquiries',
            image: '/images/service-4.png'
        },
    ])
    return (
        <section className="services py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="title d-block fw-bold text-uppercase">Our All Services</h2>
                        <h2 className="description">We Provide Best<br />Web Design Services</h2>
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
                                <div className="team-member-picture text-center">
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
