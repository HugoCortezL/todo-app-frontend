import { useEffect } from "react";
import { Todo } from "../../../../models";
import { LoadingTodosContainer } from "./styles";

export default function LoadingTodos(){
    

    useEffect(() => {
        
    }, [])

    return (
        <LoadingTodosContainer>
            Carregando...
        </LoadingTodosContainer>
    )
}