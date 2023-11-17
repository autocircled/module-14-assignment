import { useEffect, useState } from "react";
import '../assets/css/counter.css'
import { getJsonData } from "../apiRequests/apiRequest";

const Counter = () => {
    const [data, setData] = useState([])


    useEffect(() => {
        (async () => {
            try {
                const { data } = await getJsonData('counter.json');
                console.log(data);
                setData(data['data']);
            } catch (error) {
                console.log(error);
            }
        })()
    }, [])
    return (
        <section className="counter bg-white py-5">
            <div className="container">
                <div className="row">
                    {data.map((item, index) => (
                        <div key={index.toString()} className="col-6 col-md-3 d-flex flex-column justify-content-start align-items-center mt-5">
                            <div className="counter-inner rounded w-100">
                                <div className="counter-icon text-center">
                                    <span className='d-inline-block'><i className={item.icon}></i></span>
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
