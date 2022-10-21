import { TodosContainer } from "./styles";
import { useQuery } from '@apollo/client'
import { GET_LIST_BY_ID } from '../../../../api/List'
import { useState, useEffect, useContext } from "react";
import { List } from "../../../../models";
import InformationalTodos from "../InformationalTodos";
import ConfigTodos from "../ConfigTodos";
import LoadingTodos from "../LoadingTodos";
import { UserContext } from "../../../../pages/Todos";

export default function TodosContent() {
    const { userId, listId } = useContext(UserContext);

    const [list, setList] = useState<List>({
        _id: "",
        name: "",
        todos: []
    })

    const { error, loading, data } = useQuery(GET_LIST_BY_ID, {
        variables: { listId: listId, userId: userId }
    })

    useEffect(() => {
        if (data) {
            setList(data.getListById)
        }
    }, [data, listId])

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
                        <ConfigTodos todos={list.todos} />
                    </>
            }
        </TodosContainer>
    )
}