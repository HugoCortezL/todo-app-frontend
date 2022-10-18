import LoginLayout from "../../layouts/LoginLayout";
import FormGroup from "../../components/shared/FormGroup";
import { LoginContainer } from "./styles";
import { Link, useNavigate } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { CREATE_USER } from '../../api/User'
import { useState } from 'react'


export default function Login() {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })

    const [createUser, _] = useMutation(CREATE_USER)

    const onRegister = async () => {
        if (validateUser()) {
            await createUser({
                variables: {
                    user: user
                }
            })
            navigate("/")
        } else {
            console.log("Usuario não criado")
        }
    }

    const validateUser = () => {
        if (user.name.trim().length == 0) {
            return false
        }
        if (user.email.trim().length == 0) {
            return false
        }
        if (user.password.trim().length == 0) {
            return false
        }
        return true
    }


    return (
        <LoginLayout>
            <LoginContainer>
                <h1>Welcome</h1>
                <FormGroup>
                    <label htmlFor="name">Name</label>
                    <input type="name" id="name" placeholder="Brad pitt" onChange={(event) => setUser({ ...user, name: event.target.value })} />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="example@email.com" onChange={(event) => setUser({ ...user, email: event.target.value })} />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="********" onChange={(event) => setUser({ ...user, password: event.target.value })} />
                </FormGroup>
                <button className="primary-button" onClick={onRegister}>
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