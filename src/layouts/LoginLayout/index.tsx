import { LoginLayoutContainer, FakeImage } from "./styles";

interface LoginLayoutProps {
    children: any
}

export default function LoginLayout(props: LoginLayoutProps) {
    return(
        <LoginLayoutContainer>
            <div className="first">
                {props.children}
            </div>
            <FakeImage className="first">
                <div className="light first-ball"></div>
                <div className="mid second-ball"></div>
                <div className="dark border third-ball"></div>
                <div className="light border fourth-ball"></div>
                <div className="dark fifth-ball"></div>
            </FakeImage>
        </LoginLayoutContainer>
    )
}