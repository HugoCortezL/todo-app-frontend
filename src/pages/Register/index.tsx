import  LoginLayout  from "../../layouts/LoginLayout";
import FormGroup from "../../components/shared/FormGroup";
import { LoginContainer } from "./styles";

import { Link } from 'react-router-dom'

export default function Login() {
    return(
        <LoginLayout>
            <LoginContainer>
                <h1>Welcome</h1>
                <FormGroup>
                    <label htmlFor="name">Name</label>
                    <input type="name" id="name" placeholder="Brad pitt"/>
                </FormGroup>
                <FormGroup>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="example@email.com"/>
                </FormGroup>
                <FormGroup>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="********"/>
                </FormGroup>
                
                <button className="primary-button">
                    Register
                </button>
                <div className="or">
                    <div className="line"></div>
                    <p>or</p>
                    <div className="line"></div>
                </div>
                <p className="register">
                Already have an account ? <Link to={"/"} className="link">Login</Link> 
                </p>
            </LoginContainer>
        </LoginLayout>
    )
}