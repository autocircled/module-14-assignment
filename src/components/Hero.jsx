import { Button } from "react-bootstrap"
import '../assets/css/hero.css'
import Logos from "./Logos"

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-inner">
                <div className="row justify-content-reverse">
                    <div className="col-md-6 d-flex flex-column justify-content-center align-items-start">
                        <h1 className="display-3">Increase Your Customers Loyalty and Satisfaction</h1>
                        <p className="lead">We help businesses like yours earn more customers, standout from competitors,  make more money</p>

                        <Button variant="success" className="mt-2 mt-md-3 py-2 px-3">Get Started</Button>
                    </div>
                    <div className="col-md-6 mt-5 mt-md-0 d-flex flex-column justify-content-center ">
                        <img src="/images/cover-1.png" alt="hero image" className="img-fluid" />
                    </div>
                </div>
            </div>

            <Logos />
        </section >
    )
}

export default Hero
