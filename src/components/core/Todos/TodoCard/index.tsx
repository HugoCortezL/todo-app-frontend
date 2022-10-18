import { TodoCardContainer } from "./styles";
import { StatusEnum, Todo } from "../../../../models";
import { AiFillStar } from 'react-icons/ai'
import { BsThreeDotsVertical } from 'react-icons/bs'
import StatusBadge from "../../../shared/StatusBadge";
import { useMutation } from '@apollo/client'
import { FAVORITE_TODO } from '../../../../api/Todo'
//import { GET_LIST_BY_ID } from '../../../../api/List'

interface TodoCardProps {
    todo: Todo
}

export default function TodoCard(props: TodoCardProps) {
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

    const [favoriteTodo, favoriteTodoResult] = useMutation(FAVORITE_TODO/*, {
        refetchQueries: [
            {
                query: GET_LIST_BY_ID,
                variables: {
                    id: props.userId
                }
            }
        ]
    }*/)

    const onFavoriteItem = async () => {
        await favoriteTodo(
            {
                variables: {

                }
            }
        )
    }

    return (
        <TodoCardContainer bsColor={boxShadowColor}>
            <header>
                <div className="left">
                    <StatusBadge status={props.todo.status} />
                    <span>
                        {props.todo.priority}
                    </span>
                </div>
                <div className="right">
                    <span className="star">
                        <AiFillStar color={props.todo.favorite ? "#A600ED" : "#989898"} size={20} />
                    </span>
                    <span className="options">
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
    )
}