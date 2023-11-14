import '../assets/css/work-list.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { MdOutlineShowChart } from "react-icons/md";
import { LuHeartHandshake } from "react-icons/lu";
import { GiSuitcase } from "react-icons/gi";
import { IoMdArrowForward } from "react-icons/io";

const WorkList = () => {
    const [data] = useState([
        {
            title: 'Grow Your Business',
            description: 'We help identify the best ways to improve your business',
            icon: MdOutlineShowChart,
            link: '/grow'
        },
        {
            title: 'Improve brand loyalty',
            description: 'We help identify the best ways to improve your business',
            icon: LuHeartHandshake,
            link: '/improve'
        },
        {
            title: 'Grow Your Business',
            description: 'We help identify the best ways to improve your business',
            icon: GiSuitcase,
            link: '/business'
        },
    ])
    return (
        <section className="work-list py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="title d-block fw-bold text-uppercase">Work List</h3>
                        <h3 className="description">We provide the Perfect Solution to your business growth</h3>
                    </div>
                </div>
                <div className="row list py-5">
                    {data.map((item, index) => (

                        <div key={index.toString()} className="col-md-4">
                            <div className="work-icon">
                                <span className='d-inline-block'><item.icon /></span>
                            </div>
                            <div className="work-body my-5">
                                <h5 className="title">{item.title}</h5>
                                <p className="description">{item.description}</p>

                            </div>
                            <Link to={item.link}>Learn More <IoMdArrowForward /></Link>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default WorkList
