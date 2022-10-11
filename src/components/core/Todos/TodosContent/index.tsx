import { TodosContainer } from "./styles";
import { useQuery } from '@apollo/client'
import { GET_LIST_BY_ID } from '../../../../api/List'
import { useState, useEffect } from "react";
import { List } from "../../../../models";
import InformationalTodos from "../InformationalTodos";
import ConfigTodos from "../ConfigTodos";
import LoadingTodos from "../LoadingTodos";

interface TodosContentProps {
    userId: string
    listId: string,

}
export default function TodosContent(props: TodosContentProps) {
    const [list, setList] = useState<List>({
        _id: "",
        name: "",
        todos: []
    })

    const { error, loading, data } = useQuery(GET_LIST_BY_ID, {
        variables: { listId: props.listId, userId: props.userId }
    })

    useEffect(() => {
        if (data) {
            setList(data.getListById)
        }
    }, [data, props.listId])

    return (
        <TodosContainer>
            {
                loading ?
                    <LoadingTodos />
                    :
                    <>
                        <h1>
                            {list.name}
                        </h1>
                        <InformationalTodos todos={list.todos} />
                        <ConfigTodos todos={list.todos} listId={props.listId} userId={props.userId}/>
                    </>
            }
        </TodosContainer>
    )
}