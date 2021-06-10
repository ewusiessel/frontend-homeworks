import {Component} from 'react'
import {Form} from "react-bootstrap";

class Home extends Component {

    state = {}


    render() {

        return (
            <div>
                <Form className="mb-5">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className="ml-auto">Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name"/>
                        <Form.Label className="ml-auto">Surname</Form.Label>
                        <Form.Control type="text" placeholder="Enter Surname"/>
                        <Form.Label className="ml-auto">Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"/>
                        <Form.Text className="text-muted" style={{fontSize:"1rem"}}>
                            We'll never share your email with anyone else.
                        </Form.Text>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"/>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" />
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default Home
