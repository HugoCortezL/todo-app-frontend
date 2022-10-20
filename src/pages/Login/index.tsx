import LoginLayout from "../../layouts/LoginLayout";
import FormGroup from "../../components/shared/FormGroup";
import { LoginContainer } from "./styles";
import { Link, useNavigate } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { LOGIN_USER } from '../../api/User'
import { useState, useEffect } from 'react'

export default function Login() {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const [loginUser, _] = useMutation(LOGIN_USER)

    const handlerLogin = async () => {
        const userLogin = await loginUser({
            variables: {
                user: user
            }
        })
        if(userLogin.data.loginUser.id){
            navigate(`/todos/${userLogin.data.loginUser.id}`)
        }
        else{
            const errorEl = document.getElementById("error")
            errorEl?.classList.add("active")
        }
    }
    
    return (
        <LoginLayout>
            <LoginContainer>
                <h1>Welcome Back</h1>
                <FormGroup>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="example@email.com" onChange={(event) => setUser({ ...user, email: event.target.value})}/>
                </FormGroup>
                <FormGroup>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="********" onChange={(event) => setUser({ ...user, password: event.target.value })} />
                </FormGroup>
                <div id="error">
                    <p>
                        Login or password incorrect
                    </p>
                </div>
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
                <button className="primary-button" onClick={handlerLogin}>
                    Login
                </button>
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