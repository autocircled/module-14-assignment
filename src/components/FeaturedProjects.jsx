import { useState } from 'react'

const FeaturedProjects = () => {
    const [data] = useState([
        {
            title: 'App Redesign',
            category: 'App Design',
            tag: 'vip',
            time: 'June 20, 2022',
            thumbnail: '/images/project-1.png'
        },
        {
            title: 'Redesign channel website landng page',
            category: 'App Design',
            tag: 'featured',
            time: 'June 20, 2022',
            thumbnail: '/images/project-2.png'
        },
        {
            title: 'Redesign channel website landng page',
            category: 'App Design',
            tag: 'featured',
            time: 'June 20, 2022',
            thumbnail: '/images/project-3.png'
        },
        {
            title: 'Redesign channel website landng page',
            category: 'App Design',
            tag: 'featured',
            time: 'June 20, 2022',
            thumbnail: '/images/project-4.png'
        },
        {
            title: 'Redesign channel website landng page',
            category: 'App Design',
            tag: 'featured',
            time: 'June 20, 2022',
            thumbnail: '/images/project-5.png'
        },
        {
            title: 'Redesign channel website landng page',
            category: 'App Design',
            tag: 'general',
            time: 'June 20, 2022',
            thumbnail: '/images/project-6.png'
        },
        {
            title: 'Redesign channel website landng page',
            category: 'App Design',
            tag: 'general',
            time: 'June 20, 2022',
            thumbnail: '/images/project-7.png'
        },
        {
            title: 'Redesign channel website landng page',
            category: 'App Design',
            tag: 'general',
            time: 'June 20, 2022',
            thumbnail: '/images/project-8.png'
        },
        {
            title: 'Redesign channel website landng page',
            category: 'App Design',
            tag: 'general',
            time: 'June 20, 2022',
            thumbnail: '/images/project-9.png'
        },
        {
            title: 'Redesign channel website landng page',
            category: 'App Design',
            tag: 'general',
            time: 'June 20, 2022',
            thumbnail: '/images/project-10.png'
        },
        {
            title: 'Redesign channel website landng page',
            category: 'App Design',
            tag: 'general',
            time: 'June 20, 2022',
            thumbnail: '/images/project-11.png'
        },
    ])
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
                            <>
                                <div key={index.toString()} className="thumbnail">
                                    <img className='img-fluid' src={item.thumbnail} alt="" />
                                </div>
                                <div className="work-body mt-3">
                                    <span className="d-block time heading">{item.time}</span>
                                    <h5 className="title">{item.title}</h5>
                                </div>
                            </>
                        ))}
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            {data.map((item, index) => (
                                item['tag'] === 'featured' &&
                                <div key={index.toString()} className="col-md-6 mb-4">
                                    <div className="thumbnail">
                                        <img className="img-fluid" src={item.thumbnail} alt="" />
                                    </div>
                                    <div className="work-body mt-3">
                                        <span className="d-block time heading">{item.time + " " + index}</span>
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
