import { ConfigTodosContainer, Filters } from "./styles";
import { useContext, useEffect, useState } from "react";
import { Todo, TodoInput, PriorityEnum, StatusEnum } from "../../../../models";
import FormGroup from "../../../shared/FormGroup";
import { BiChevronUp, BiChevronDown } from 'react-icons/bi'
import { BsPlusLg } from 'react-icons/bs'
import TodosList from "../TodosList";
import { useMutation } from '@apollo/client'
import { CREATE_TODO } from '../../../../api/Todo'
import { GET_LIST_BY_ID } from "../../../../api/List";
import Backdrop from "../../../shared/Backdrop";
import Modal from "../../../shared/Modal";
import { UserContext } from "../../../../pages/Todos";

interface ConfigTodosProps {
    todos: Todo[]
}

export default function ConfigTodos(props: ConfigTodosProps) {
    const { userId, listId } = useContext(UserContext);
    const [filteredTodos, setFilteredTodos] = useState(props.todos)
    const [creating, setCreating] = useState(false)
    const [openOrder, setOpenOrder] = useState(false)
    const [filters, setFilters] = useState({
        searchText: "",
        onlyFavorites: false,
        orderBy: ["Order by", "", ""]
    })
    const [todoToCreate, setTodoToCreate] = useState<TodoInput>({
        title: "",
        favorite: false,
        priority: PriorityEnum.Low,
        deadline: "",
        status: StatusEnum.Todo
    })

    const [createTodo, _] = useMutation(CREATE_TODO, {
        refetchQueries: [
            {
                query: GET_LIST_BY_ID,
                variables: { listId: listId, userId: userId }
            }
        ]
    })

    const startCreating = () => {
        setCreating(true)
    }

    const cancelCreating = () => {
        setCreating(false)
        setTodoToCreate({
            title: "",
            favorite: false,
            priority: PriorityEnum.Low,
            deadline: Date.now().toString(),
            status: StatusEnum.Todo
        })
    }

    const onConfirmCreate = async () => {
        if (validateTodo()) {
            await createTodo(
                {
                    variables: {
                        todo: todoToCreate,
                        listId: listId,
                        userId: userId
                    }
                }
            )
            cancelCreating()
        }
    }

    useEffect(() => {
        setFilteredTodos(props.todos)
    }, [props.todos])

    const sortFunc = (property: string) => {
        let sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a: any, b: any) {
            switch (property) {
                case "priority":
                    switch (a[property]) {
                        case PriorityEnum.Low:
                            return -1 * sortOrder
                        case PriorityEnum.Mid:
                            if (b[property] == PriorityEnum.Low) {
                                return 1 * sortOrder
                            }
                            if (b[property] == PriorityEnum.High) {
                                return -1 * sortOrder
                            }
                            return 0 * sortOrder
                        case PriorityEnum.High:
                            return 1 * sortOrder
                        default:
                            return 0 * sortOrder

                    }
                case "":
                default:
                    if (a[property] < b[property]) {
                        return -1 * sortOrder
                    }
                    return (a[property] > b[property]) ? (1 * sortOrder) : (0 * sortOrder)
            }

        }
    }

    useEffect(() => {
        let newFilteredTodos = props.todos
        if (filters.onlyFavorites) {
            newFilteredTodos = newFilteredTodos.filter(todo => todo.favorite)
        }
        if (filters.searchText.trim().length > 0) {
            newFilteredTodos = newFilteredTodos.filter(todo => todo.title.toLowerCase().includes(filters.searchText.toLowerCase()))
        }
        if (filters.orderBy[1].length > 0) {
            let field = filters.orderBy[1]
            if (filters.orderBy[2] == "desc") {
                field = "-" + field
            }
            newFilteredTodos = newFilteredTodos.slice().sort(sortFunc(field))
        }

        setFilteredTodos(newFilteredTodos)

    }, [filters])

    const validateTodo = () => {
        const titleEl = document.getElementById("title")
        if (todoToCreate.title.trim().length == 0) {
            titleEl?.classList.add("error")
            return false
        }
        else {
            titleEl?.classList.remove("error")
            return true
        }
    }

    return (
        <>
            {
                creating &&
                <Backdrop click={cancelCreating} />
            }
            {
                creating &&
                <Modal title="Create to-do" onCancel={cancelCreating} onConfirm={onConfirmCreate} confirmText="Create">
                    <FormGroup>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" placeholder="Study react" value={todoToCreate.title} onChange={(event) => setTodoToCreate({ ...todoToCreate, title: event.target.value })} />
                        <p>The title must have at least 1 letter</p>
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="priority">Priority</label>
                        <select value={todoToCreate.priority} onChange={(event) => setTodoToCreate({ ...todoToCreate, priority: event.target.value })}>
                            <option value={PriorityEnum.Low}>Low</option>
                            <option value={PriorityEnum.Mid}>Mid</option>
                            <option value={PriorityEnum.High}>High</option>
                        </select>
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="date">Deadline</label>
                        <input type="Date" id="date" value={todoToCreate.deadline} onChange={(event) => setTodoToCreate({ ...todoToCreate, deadline: event.target.value })} />
                    </FormGroup>
                </Modal>
            }
            <ConfigTodosContainer>
                <Filters>
                    <FormGroup>
                        <input type="search" id="search" placeholder="Search..." value={filters.searchText} onChange={(event) => setFilters({ ...filters, searchText: event.target.value })} />
                    </FormGroup>
                    <div className="other-filters">
                        <div>
                            <input type="checkbox" id="onlyFav" checked={filters.onlyFavorites} onChange={() => setFilters({ ...filters, onlyFavorites: !filters.onlyFavorites })} />
                            <label htmlFor="onlyFav">Show only favorites</label>
                        </div>
                        <div className="order" onMouseLeave={() => setOpenOrder(false)}>
                            <div onClick={() => setOpenOrder(!openOrder)}>
                                <p>
                                    {filters.orderBy[0]}
                                </p>
                                <span className="icon-up-down">
                                    <span className="up">
                                        <BiChevronUp />
                                    </span>
                                    <span className="down">
                                        <BiChevronDown />
                                    </span>
                                </span>
                            </div>
                            <div className={openOrder ? "options open" : "options"}>
                                <p onClick={() => setFilters({ ...filters, orderBy: ["Title [A-Z]", "title", "asc"] })}>
                                    Title [A-Z]
                                </p>
                                <p onClick={() => setFilters({ ...filters, orderBy: ["Title [Z-A]", "title", "desc"] })}>
                                    Title [Z-A]
                                </p>
                                <p onClick={() => setFilters({ ...filters, orderBy: ["Priority [High-Low]", "priority", "desc"] })}>
                                    Priority [High-Low]
                                </p>
                                <p onClick={() => setFilters({ ...filters, orderBy: ["Priority [Low-High]", "priority", "asc"] })}>
                                    Priority [Low-High]
                                </p>
                                <p onClick={() => setFilters({ ...filters, orderBy: ["Deadline [Low-High]", "deadline", "asc"] })}>
                                    Deadline [Low-High]
                                </p>
                                <p onClick={() => setFilters({ ...filters, orderBy: ["Deadline [High-Low]", "deadline", "desc"] })}>
                                    Deadline [High-Low]
                                </p>
                            </div>
                        </div>
                    </div>
                </Filters>
                <button className="primary-button" onClick={startCreating}>
                    Create
                    <span className="icon">
                        <BsPlusLg size={16} />
                    </span>
                </button>
                <TodosList todos={filteredTodos} />
            </ConfigTodosContainer>
        </>
    )
}