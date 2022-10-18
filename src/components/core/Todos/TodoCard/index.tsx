import { TodoCardContainer } from "./styles";
import { PriorityEnum, StatusEnum, Todo, TodoInput } from "../../../../models";
import { AiFillStar } from 'react-icons/ai'
import { BsThreeDotsVertical } from 'react-icons/bs'
import StatusBadge from "../../../shared/StatusBadge";
import { useMutation } from '@apollo/client'
import { FAVORITE_TODO, UPDATE_TODO } from '../../../../api/Todo'
import { GET_LIST_BY_ID } from '../../../../api/List'
import { UserContext } from "../../../../pages/Todos";
import { useContext, useState } from "react";
import Backdrop from "../../../shared/Backdrop";
import Modal from "../../../shared/Modal";
import FormGroup from "../../../shared/FormGroup";

interface TodoCardProps {
    todo: Todo
}

export default function TodoCard(props: TodoCardProps) {
    const {userId, listId} = useContext(UserContext);
    const [editing, setEditing] = useState(false)
    const [todoToEdit, setTodoToEdit] = useState<TodoInput>({
        title: props.todo.title,
        favorite: props.todo.favorite,
        priority: props.todo.priority,
        deadline: props.todo.deadline,
        status: props.todo.status
    })

    let boxShadowColor
    if (props.todo.status == StatusEnum.Todo) {
        boxShadowColor = "#B509FF"
    }
    else if (props.todo.status == StatusEnum.Progess) {
        boxShadowColor = "#4973CC"
    }
    else if (props.todo.status == StatusEnum.Review) {
        boxShadowColor = "#FF8100"
    }
    else {
        boxShadowColor = "#40B862"
    }

    const [editTodo, editTodoResult] = useMutation(UPDATE_TODO, {
        refetchQueries: [
            {
                query: GET_LIST_BY_ID,
                variables: {
                    listId,
                    userId
                }
            }
        ]
    })

    const startEditing = () => {
        setEditing(true)
    }

    const cancelEditing = () => {
        setEditing(false)
    }

    const onConfirmEdit = async () => {
        await editTodo(
            {
                variables: {
                    todo: todoToEdit,
                    todoId: props.todo._id,
                    listId,
                    userId
                }
            }
        )
        cancelEditing()
    }
    
    const [favoriteTodo, favoriteTodoResult] = useMutation(FAVORITE_TODO, {
        refetchQueries: [
            {
                query: GET_LIST_BY_ID,
                variables: {
                    listId,
                    userId
                }
            }
        ]
    })

    const onFavoriteItem = async () => {
        await favoriteTodo(
            {
                variables: {
                    todoId: props.todo._id,
                    listId: listId,
                    userId: userId
                }
            }
        )
    }

    return (
        <>
            {
                editing &&
                <Backdrop click={cancelEditing} />
            }
            {
                editing &&
                <Modal title="Edit a to-do" onCancel={cancelEditing} onConfirm={onConfirmEdit} confirmText="Save">
                    <FormGroup>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" placeholder="Study react" value={todoToEdit.title} onChange={(event) => setTodoToEdit({ ...todoToEdit, title: event.target.value })} />
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="priority">Priority</label>
                        <select  value={todoToEdit.priority} onChange={(event) => setTodoToEdit({ ...todoToEdit, priority: event.target.value })}>
                            <option value={PriorityEnum.Low} selected>Low</option>
                            <option value={PriorityEnum.Mid}>Mid</option>
                            <option value={PriorityEnum.High}>High</option>
                        </select>
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="status">Status</label>
                        <select  value={todoToEdit.status} onChange={(event) => setTodoToEdit({ ...todoToEdit, status: event.target.value })}>
                            <option value={StatusEnum.Todo} selected>To-do</option>
                            <option value={StatusEnum.Progess}>In Progress</option>
                            <option value={StatusEnum.Review}>Review</option>
                            <option value={StatusEnum.Done}>Done</option>
                        </select>
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="date">Deadline</label>
                        <input type="Date" id="date" value={todoToEdit.deadline} onChange={(event) => setTodoToEdit({ ...todoToEdit, deadline: event.target.value })} />
                    </FormGroup>
                </Modal>
            }
            <TodoCardContainer bsColor={boxShadowColor}>
                <header>
                    <div className="left">
                        <StatusBadge status={props.todo.status} />
                        <span>
                            {props.todo.priority}
                        </span>
                    </div>
                    <div className="right">
                        <span className="star" onClick={onFavoriteItem} title="favorite">
                            <AiFillStar color={props.todo.favorite ? "#A600ED" : "#989898"} size={20} />
                        </span>
                        <span className="options" onClick={startEditing}>
                            <BsThreeDotsVertical size={20} />
                        </span>
                    </div>
                </header>
                <div className="body">
                    <h3>
                        {props.todo.title}
                    </h3>
                    <span>
                        {
                            props.todo.deadline ?
                                <p>
                                    {props.todo.deadline}
                                </p>
                                :
                                <></>
                        }
                    </span>

                </div>
            </TodoCardContainer>
        </>
    )
}