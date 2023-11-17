import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import "../assets/css/team.css";
import { getJsonData } from "../apiRequests/apiRequest";

export const Team = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const { data } = await getJsonData('team.json')
                setData(data['data']);
            } catch (error) {
                console.log(error);
            }
        })()

    }, [])
    return (
        <section className="team py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="title d-block fw-bold text-uppercase">Work List</h2>
                        <p className="description fw-bold">We provide the Perfect Solution<br />to your business growth</p>
                    </div>

                </div>
                <div className="row list py-5">
                    {data.map((item, index) => (

                        <div key={index.toString()} className="col-md-4 member">
                            <div className="inner-wrapper shadow-sm">
                                <div className="team-member-picture text-center">
                                    <img className="img-fluid" src={item.image} alt={item.name} />
                                    <div className="social-profile-links">
                                        <ButtonGroup size="sm">
                                            {item.profile.map((profile, index) => (
                                                <Button variant="light" key={index.toString()} href={profile.link}><i className={profile.icon}></i></Button>
                                            ))}
                                        </ButtonGroup>
                                    </div>
                                </div>
                                <div className="team-body text-center py-4">
                                    <h3 className="name">{item.name}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
