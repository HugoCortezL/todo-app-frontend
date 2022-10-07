import LoginLayout from "../../layouts/LoginLayout";
import FormGroup from "../../components/shared/FormGroup";
import { LoginContainer } from "./styles";

import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <LoginLayout>
            <LoginContainer>
                <h1>Welcome Back</h1>
                <FormGroup>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="example@email.com" />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="********" />
                </FormGroup>
                <div className="options">
                    <div className="remember">
                        <input type="checkbox" />
                        <p>
                            Remember-me
                        </p>
                    </div>
                    <p className="link">
                        Forgot Password ?
                    </p>
                </div>
                <Link to={"/todos"} className="login-link">
                    <button className="primary-button">
                        Login
                    </button>
                </Link>
                <div className="or">
                    <div className="line"></div>
                    <p>or</p>
                    <div className="line"></div>
                </div>
                <p className="register">
                    Don't have an account ? <Link to={"/register"} className="link">Register</Link>
                </p>
            </LoginContainer>
        </LoginLayout>
    )
}