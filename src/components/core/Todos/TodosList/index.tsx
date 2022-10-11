import { TodosListContainer } from "./styles";
import { Todo } from "../../../../models";
import TodoCard from "../TodoCard";

interface TodosListProps {
    todos: Todo[]
}

export default function TodosList(props: TodosListProps) {

    return (
        <TodosListContainer>
            {
                props.todos.map(todo => {
                    return (
                        <TodoCard todo={todo} key={todo._id} />
                    )
                })
            }
        </TodosListContainer>
    )
}