import { useEffect, useState } from 'react'
import { getJsonData } from '../apiRequests/apiRequest'

const Projects = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const { data } = await getJsonData('projects.json')
                console.log(data);
                setData(data['data']);
            } catch (error) {
                console.log(error);
            }
        })()

    }, [])
    return (
        <section className="projects py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="title d-block fw-bold text-uppercase">All Project</h2>
                        <p className="description fw-bold">Better Agency/SEO Solution<br />At Your Fingertips</p>
                    </div>

                </div>
                <div className="row list py-5">
                    {data.map((item, index) => (
                        (item['tag'] === 'general' &&
                            <div key={index.toString()} className="col-md-6 my-4 project rounded">
                                <div className="inner-wrapper p-5 shadow-sm rounded-5">
                                    <div className="project-picture text-center">
                                        <img className="img-fluid" src={item.image} alt={item.title} />
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
