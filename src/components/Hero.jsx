import { Button } from "react-bootstrap"
import '../assets/css/hero.css'
import Logos from "./Logos"
import { useEffect, useState } from "react"
import { getJsonData } from "../apiRequests/apiRequest"

const Hero = () => {
    const [data, setData] = useState({
        title: '',
        desc: '',
        button_text: '',
        button_type: '',
        image: ''
    });

    useEffect(() => {
        (async () => {
            try {
                const { data } = await getJsonData('hero.json')
                setData(data);

            } catch (error) {
                console.log(error);
            }
        })()
    }, [])

    return (
        <section className="hero">
            <div className="container hero-inner">
                <div className="row justify-content-reverse">
                    <div className="col-md-6 d-flex flex-column justify-content-center align-items-start">
                        <h1 className="display-3">{data.title}</h1>
                        <p className="lead">{data.desc}</p>

                        <Button variant={data.button_type} className="mt-2 mt-md-3 py-2 px-3">{data.button_text}</Button>
                    </div>
                    <div className="col-md-6 mt-5 mt-md-0 d-flex flex-column justify-content-center ">
                        <img src={data.image} alt="hero image" className="img-fluid" />
                    </div>
                </div>
            </div>

            <Logos />
        </section >
    )
}

export default Hero
