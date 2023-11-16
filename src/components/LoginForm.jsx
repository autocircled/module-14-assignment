import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { MdAlternateEmail, MdOutlinePassword } from "react-icons/md";
import { Link } from 'react-router-dom';


const LoginForm = () => {

    const [validated, setValidated] = useState(false);
    const [data, setData] = useState({
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
        console.log(event.tar);
        const form = event.currentTarget;
        if (form.checkValidity() === false) {

            event.stopPropagation();
        }

        setValidated(true);
        alert(JSON.stringify(data, null, 4))
    };

    return (
        <section className='login-form py-5'>
            <h2 className='text-center mb-5'>Login</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Container>
                    <Row className="mb-3 justify-content-center">
                        <Form.Group as={Col} md="4" controlId="email">
                            <InputGroup hasValidation>
                                <InputGroup.Text><MdAlternateEmail /></InputGroup.Text>
                                <Form.Control
                                    type="email"
                                    placeholder="Email address"
                                    aria-describedby="email"
                                    onChange={(event) => handleChange(event, 'email')}
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
                                <InputGroup.Text><MdOutlinePassword /></InputGroup.Text>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    aria-describedby="password"
                                    onChange={(event) => handleChange(event, 'password')}
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
                            <Button type="submit">Login</Button>
                        </Form.Group>
                        <Form.Text className='text-center mt-3'>
                            Are you new here? <Link to="/register">Register</Link>
                        </Form.Text>
                    </Row>
                </Container>
            </Form>
        </section>
    );
}

export default LoginForm
