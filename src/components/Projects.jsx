import { useState } from 'react'

const Projects = () => {
    const [data] = useState([
        {
            title: 'App Redesign',
            category: 'App Design',
            tag: 'featured',
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
        <section className="projects py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="title d-block fw-bold text-uppercase">All Project</h1>
                        <p className="description fw-bold">Better Agency/SEO Solution<br />At Your Fingertips</p>
                    </div>

                </div>
                <div className="row list py-5">
                    {data.map((item, index) => (
                        (item['tag'] === 'general' &&
                            <div key={index.toString()} className="col-md-6 my-4 project rounded">
                                <div className="inner-wrapper p-5 shadow-sm rounded-5">
                                    <div className="project-picture text-center">
                                        <img className="img-fluid" src={item.thumbnail} alt={item.title} />
                                    </div>
                                    <div className="team-body mt-4">
                                        <h3 className="name">{item.title}</h3>
                                    </div>
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
