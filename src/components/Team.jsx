import { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import "../assets/css/team.css";

export const Team = () => {
    const [data] = useState([
        {
            name: 'Devon Lane',
            position: 'UI/UX Designer',
            image: '/images/team-1.png',
            profile: [
                {
                    icon: FaFacebookF,
                    link: '#'
                },
                {
                    icon: FaTwitter,
                    link: '#'
                },
                {
                    icon: FaInstagram,
                    link: '#'
                },
            ]
        },
        {
            name: 'Danny Bailey',
            position: 'Junior Developer',
            image: '/images/team-2.png',
            profile: [
                {
                    icon: FaFacebookF,
                    link: '#'
                },
                {
                    icon: FaTwitter,
                    link: '#'
                },
                {
                    icon: FaInstagram,
                    link: '#'
                },
            ]
        },
        {
            name: 'Alex Lov',
            position: 'CEO',
            image: '/images/team-3.png',
            profile: [
                {
                    icon: FaFacebookF,
                    link: '#'
                },
                {
                    icon: FaTwitter,
                    link: '#'
                },
                {
                    icon: FaInstagram,
                    link: '#'
                },
            ]
        },
    ])
    return (
        <section className="team py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="title d-block fw-bold text-uppercase">Work List</h1>
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
                                                <Button variant="light" key={index.toString()} href={profile.link}><profile.icon /></Button>
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
