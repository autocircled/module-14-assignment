import { useState } from 'react'
import '../assets/css/testimonials.css'

const Testimonials = () => {
    const [data] = useState([

        {
            name: 'Alice Bradley',
            position: 'UI/UX Designer',
            quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.',
            image: '/images/client-1.png',
        },
        {
            name: 'Alice Bradley',
            position: 'UI/UX Designer',
            quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.',
            image: '/images/client-2.png',
        },
        {
            name: 'Alice Bradley',
            position: 'UI/UX Designer',
            quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.',
            image: '/images/client-3.png',
        },
        {
            name: 'Alice Bradley',
            position: 'UI/UX Designer',
            quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.',
            image: '/images/client-4.png',
        },
        {
            name: 'Alice Bradley',
            position: 'UI/UX Designer',
            quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.',
            image: '/images/client-5.png',
        },
        {
            name: 'Alice Bradley',
            position: 'UI/UX Designer',
            quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.',
            image: '/images/client-6.png',
        },

    ])
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
