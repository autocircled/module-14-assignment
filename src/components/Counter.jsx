import { FaPeopleGroup } from "react-icons/fa6";
import { SlLike } from "react-icons/sl";
import { CiFaceSmile } from "react-icons/ci";
import { BiSolidObjectsHorizontalCenter } from "react-icons/bi";
import { useState } from "react";
import '../assets/css/counter.css'

const Counter = () => {
    const [data] = useState([
        {
            icon: FaPeopleGroup,
            count: '564651',
            description: 'Followers',

        },
        {
            icon: SlLike,
            count: '6300',
            description: 'Solved Problems',

        },
        {
            icon: CiFaceSmile,
            count: '25000',
            description: 'Happy Customers',

        },
        {
            icon: BiSolidObjectsHorizontalCenter,
            count: '1254',
            description: 'Projects Completed',

        },
    ])
    return (
        <section className="counter bg-white py-5">
            <div className="container">
                <div className="row">
                    {data.map((item, index) => (
                        <div key={index.toString()} className="col-6 col-md-3 d-flex flex-column justify-content-start align-items-center mt-5">
                            <div className="counter-inner rounded w-100">
                                <div className="counter-icon text-center">
                                    <span className='d-inline-block'><item.icon /></span>
                                </div>
                                <div className="counter-body text-center mt-4">
                                    <h3 className="count">{item.count}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>

        </section>
    )
}

export default Counter
