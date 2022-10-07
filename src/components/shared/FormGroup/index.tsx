import { FormGroupContainer } from "./styles"


interface FormGroupProps {
    children: any
}
export default function FormGroup(props: FormGroupProps){
    return (
        <FormGroupContainer>
            {props.children}
        </FormGroupContainer>
    )
}