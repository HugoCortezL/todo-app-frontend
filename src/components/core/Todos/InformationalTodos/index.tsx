import { useEffect, useState } from "react";
import { Todo, StatusEnum } from "../../../../models";
import Todos from "../../../../pages/Todos";
import { InformationalTodosContainer } from "./styles";

interface InformationalTodosProps {
    todos: Todo[]
}
export default function InformationalTodos(props: InformationalTodosProps) {
    const [group, setGroup] = useState({
        todo: 0,
        progress: 0,
        review: 0,
        done: 0
    })

    useEffect(() => {
        let todoCount = 0
        let progressCount = 0
        let reviewCount = 0
        let doneCount = 0

        props.todos.forEach(todo => {
            if (todo.status == "To-do") {
                todoCount += 1
            }
            else if (todo.status == StatusEnum.Progess) {
                progressCount += 1
            }
            else if (todo.status == StatusEnum.Review) {
                reviewCount += 1
            }
            else {
                doneCount += 1
            }
        })
        setGroup({
            todo: todoCount,
            progress: progressCount,
            review: reviewCount,
            done: doneCount
        })
    }, [props.todos])

    return (
        <InformationalTodosContainer>
            <div className="todo-info">
                <h2 className="todo-color">To-do</h2>
                <p>
                    {group.todo}
                </p>
            </div>
            <div className="todo-info">
                <h2 className="progress-color">In Progress</h2>
                <p>
                    {group.progress}
                </p>
            </div>
            <div className="todo-info">
                <h2 className="review-color">Review</h2>
                <p>
                    {group.review}
                </p>
            </div>
            <div className="todo-info">
                <h2 className="done-color">Done</h2>
                <p>
                    {group.done}
                </p>
            </div>
        </InformationalTodosContainer>
    )
}