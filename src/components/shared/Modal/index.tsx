import { ModalContainer } from "./styles";
import {AiOutlineClose} from 'react-icons/ai'

interface ModalProps {
    title: string
    onCancel: () => void
    onConfirm: () => void
    confirmText: string
    children: any
}

export default function Modal(props:ModalProps) {
    return (
        <ModalContainer>
            <div className="header">
                {props.title}
                <div className="close"  onClick={props.onCancel}>
                    <AiOutlineClose color={"#BC95ED"}/>
                </div>
            </div>
            <div className="content">
                {props.children}
            </div>
            <div className="footer">
                <button className="ternary-btn" onClick={props.onCancel}>
                    Cancel
                </button>
                <button className="primary-btn"  onClick={props.onConfirm}>
                    {props.confirmText}
                </button>
            </div>

        </ModalContainer>
    )
}