import { ModalContainer } from "./styles";
import {AiOutlineClose} from 'react-icons/ai'

interface ModalProps {
    title: string
    onCancel: () => void
    onConfirm: () => void
    confirmText: string
    children: any,
    id?: string
}

export default function Modal(props:ModalProps) {
    return (
        <ModalContainer>
            <div className="header">
                {props.title}
                <div className="close"  onClick={props.onCancel}>
                    <AiOutlineClose color={"#4F49FC"}/>
                </div>
            </div>
            <div className="content">
                {props.children}
            </div>
            <div className="footer">
                <button className="ternary-button" onClick={props.onCancel}>
                    Cancel
                </button>
                <button className="primary-button"  onClick={props.onConfirm}>
                    {props.confirmText}
                </button>
            </div>

        </ModalContainer>
    )
}