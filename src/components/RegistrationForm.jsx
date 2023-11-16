import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
    const [validated, setValidated] = useState(false);
    const [data, setData] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
    })

    const handleChange = (event, name) => {
        const value = event.target.value;
        setData({
            ...data,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {

            event.stopPropagation();
        }

        setValidated(true);
        alert(JSON.stringify(data, null, 4))
    };

    return (
        <section className='registration-form py-5'>
            <h2 className='text-center mb-5'>Register</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Container>
                    <Row className="mb-3 justify-content-center">
                        <Form.Group as={Col} md="4" controlId="fname">

                            <InputGroup hasValidation>
                                <Form.Control
                                    type="text"
                                    placeholder="First name"
                                    aria-describedby="fname"
                                    onChange={e => handleChange(e, 'fname')}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    First name is required
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3 justify-content-center">
                        <Form.Group as={Col} md="4" controlId="lname">
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="text"
                                    placeholder="Last name"
                                    aria-describedby="lname"
                                    onChange={e => handleChange(e, 'lname')}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Last name is required
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3 justify-content-center">
                        <Form.Group as={Col} md="4" controlId="email">
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="email"
                                    placeholder="Email address"
                                    aria-describedby="email"
                                    onChange={e => handleChange(e, 'email')}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Email address is required
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3 justify-content-center">
                        <Form.Group as={Col} md="4" controlId="password">
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    aria-describedby="password"
                                    onChange={e => handleChange(e, 'password')}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Password is required
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3 justify-content-center">
                        <Form.Group as={Col} md="4" className='text-center'>
                            <Button type="submit">Register</Button>
                        </Form.Group>
                        <Form.Text className='text-center mt-3'>
                            Already have an account? <Link to="/login">Login</Link>
                        </Form.Text>
                    </Row>
                </Container>
            </Form>
        </section>
    )
}

export default RegistrationForm