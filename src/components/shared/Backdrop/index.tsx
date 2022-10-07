import { BackdropContainer } from './styles'

interface BackdropProps {
    click: () => void
}

export default function Backdrop(props: BackdropProps) {
    return (
        <BackdropContainer onClick={props.click}>

        </BackdropContainer>
    )
}