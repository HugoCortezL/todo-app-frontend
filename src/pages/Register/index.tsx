import LoginLayout from "../../layouts/LoginLayout";
import FormGroup from "../../components/shared/FormGroup";
import { LoginContainer } from "./styles";
import { Link, useNavigate } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { CREATE_USER } from '../../api/User'
import { useEffect, useState } from 'react'


export default function Login() {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })

    const [createUser, createUserResult] = useMutation(CREATE_USER)

    const onRegister = async () => {
        if (validateUser()) {
            const teste = await createUser({
                variables: {
                    user: user
                }
            })
        }
    }

    useEffect(() => {
        if (createUserResult.data){
            if(createUserResult.data.createUser.id){
                navigate("/")
            }else{
                const errorEl = document.getElementById("error")
                errorEl?.classList.add("active")
            }
        }
    }, [createUserResult.data])

    const validateUser = () => {
        const nameEl = document.getElementById("name")
        const emailEl = document.getElementById("email")
        const passwordEl = document.getElementById("password")
        let resultCheck = true
        if (user.name.trim().length == 0) {
            nameEl?.classList.add("error")
            resultCheck = resultCheck && false
        }
        else{
            nameEl?.classList.remove("error")
        }

        if (user.email.trim().length == 0) {
            emailEl?.classList.add("error")
            resultCheck = resultCheck && false
        }
        else{
            emailEl?.classList.remove("error")
        }

        if (user.password.trim().length < 8) {
            passwordEl?.classList.add("error")
            resultCheck = resultCheck && false
        }
        else{
            passwordEl?.classList.remove("error")
        }
        return resultCheck
    }


    return (
        <LoginLayout>
            <LoginContainer>
                <h1>Welcome</h1>
                <FormGroup>
                    <label htmlFor="name">Name</label>
                    <input type="name" id="name" placeholder="Brad pitt" onChange={(event) => setUser({ ...user, name: event.target.value })} />
                    <p>The name must have at least 1 letter</p>
                </FormGroup>
                <FormGroup>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="example@email.com" onChange={(event) => setUser({ ...user, email: event.target.value })} />
                    <p>Email must be at least 1 letter</p>
                </FormGroup>
                <FormGroup>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="********" onChange={(event) => setUser({ ...user, password: event.target.value })} />
                    <p>Password must be at least 8 letters long</p>
                </FormGroup>
                <p id="error">
                    Email already in use
                </p>
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