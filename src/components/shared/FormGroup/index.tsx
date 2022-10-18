import { ReactNode } from "react"
import { FormGroupContainer } from "./styles"


interface FormGroupProps {
    children: ReactNode
}
export default function FormGroup(props: FormGroupProps) {
    return (
        <FormGroupContainer>
            {props.children}
        </FormGroupContainer>
    )
}