import  LoginLayout  from "../../layouts/LoginLayout";
import FormGroup from "../../components/shared/FormGroup";
import { LoginContainer } from "./styles";

export default function Login() {
    return(
        <LoginLayout>
            <LoginContainer>
                <h1>Welcome</h1>
                <FormGroup>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="example@email.com"/>
                </FormGroup>
                <FormGroup>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="********"/>
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
                <button className="primary-button">
                    Login
                </button>
                <div className="or">
                    <div className="line"></div>
                    <p>or</p>
                    <div className="line"></div>
                </div>
                <p className="register">
                    Don't have an account ? <span className="link">Register</span> 
                </p>
            </LoginContainer>
        </LoginLayout>
    )
}