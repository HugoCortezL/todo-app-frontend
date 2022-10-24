import { TodosContainer, Header, Content, SideMenu, UserOptions } from "./styles";
import { BsPlusLg } from 'react-icons/bs'
import { AiOutlineMenu } from 'react-icons/ai'
import { useQuery, useMutation } from '@apollo/client'
import { GET_LISTS_BY_USER_ID, AUTH_USER } from '../../api/User'
import { CREATE_LIST } from '../../api/List'
import { List, ListInput } from "../../models";
import { useNavigate } from 'react-router-dom'
import { useState, useEffect, createContext } from "react";
import ListCard from "../../components/core/ListCard";
import Backdrop from "../../components/shared/Backdrop";
import Modal from "../../components/shared/Modal";
import FormGroup from "../../components/shared/FormGroup";
import ListCardLoading from "../../components/core/ListCardLoading";
import TodosContent from "../../components/core/Todos/TodosContent";


export const UserContext = createContext({ userId: "", listId: "" });

export default function Todos() {
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [openUserOptions, setOpenUserOptions] = useState(false)
    const token = localStorage.getItem('token') || "";
    const navigate = useNavigate();

    const AuthUserResult = useQuery(AUTH_USER, {
        variables: { token }
    })
    useEffect(() => {
        if (AuthUserResult.data) {
            if (AuthUserResult.data.getUserByToken.id) {
                setId(AuthUserResult.data.getUserByToken.id)
                const names = AuthUserResult.data.getUserByToken.name.split(" ")
                let resultName = ""
                for (let i = 0; i < 2; i++) {
                    if (names.length > i) {
                        resultName += names[i].charAt(0).toUpperCase()
                    }
                }
                setName(resultName)
            }
            else {
                navigate(`/`)
            }
        }
    }, [AuthUserResult.data])

    const [creating, setCreating] = useState(false)
    const [openMenu, setOpenMenu] = useState(true)
    const [listToCreate, setListToCreate] = useState<ListInput>({
        name: "",
        todos: []
    })

    const [lists, setLists] = useState<List[]>([])
    const [listToShow, setListToShow] = useState("")
    const { error, loading, data } = useQuery(GET_LISTS_BY_USER_ID, {
        variables: { id }
    })

    const [createList, createListResult] = useMutation(CREATE_LIST, {
        refetchQueries: [
            {
                query: GET_LISTS_BY_USER_ID,
                variables: {
                    id: id
                }
            }
        ]
    })

    useEffect(() => {
        if (data) {
            setLists(data.getListsById)
        }
    }, [data])

    const handlerChangeList = (id: string) => {
        setListToShow(id)
        const allItems = document.querySelectorAll('.list-item')


        allItems.forEach(item => {
            item.classList.remove('active')
        })

        const element = document.getElementById(id)
        element?.classList.add('active')
    }

    const startCreating = () => {
        setCreating(true)
        if (window.innerWidth <= 860) {
            setOpenMenu(false)
        }
    }

    const cancelCreating = () => {
        setCreating(false)
        setListToCreate({
            name: "",
            todos: []
        })
        if (window.innerWidth <= 860) {
            setOpenMenu(true)
        }
    }

    const onConfirmCreate = async () => {
        if (validateList()) {
            await createList(
                {
                    variables: {
                        list: listToCreate,
                        userId: id
                    }
                }
            )
            cancelCreating()
            if (window.innerWidth <= 860) {
                setOpenMenu(true)
            }
        }
    }

    const handlerOpenMenu = () => {
        setOpenMenu(!openMenu)
    }

    const validateList = () => {
        const nameEl = document.getElementById("name")
        if (listToCreate.name.trim().length == 0) {
            nameEl?.classList.add("error")
            return false
        }
        else {
            nameEl?.classList.remove("error")
            return true
        }
    }

    const onLogout = () => {
        navigate(`/`)
    }


    return (
        <UserContext.Provider value={{ userId: id ? id : "", listId: listToShow }}>
            {
                creating &&
                <Backdrop click={cancelCreating} />
            }
            {
                creating &&
                <Modal title="Create a list" onCancel={cancelCreating} onConfirm={onConfirmCreate} confirmText="Create">
                    <FormGroup>
                        <label htmlFor="name">Name</label>
                        <input type="name" id="name" placeholder="Work" value={listToCreate.name} onChange={(event) => setListToCreate({ ...listToCreate, name: event.target.value })} />
                        <p>The name must have at least 1 letter</p>
                    </FormGroup>
                </Modal>
            }
            <TodosContainer>
                <Header>
                    <span className="burguer-icon" onClick={handlerOpenMenu}>
                        <AiOutlineMenu size={25} />
                    </span>
                    <h1>Todo App</h1>
                    <span className="user-id" onClick={() => setOpenUserOptions(!openUserOptions)} onMouseLeave={() => setOpenUserOptions(false)}>
                        {name}
                        <UserOptions className={openUserOptions ? "open" : ""}>
                            <p onClick={onLogout}>
                                Logout
                            </p>
                        </UserOptions>
                    </span>
                </Header>
                <Content>
                    <SideMenu className={openMenu ? "open" : ""}>
                        <header>
                            <p>My Lists</p>
                            <button className="primary-button" onClick={startCreating}>
                                Create
                                <span className="icon">
                                    <BsPlusLg size={16} />
                                </span>
                            </button>
                        </header>
                        <div className="lists">
                            {
                                loading &&
                                [0, 1, 2, 3, 4, 5].map(list => {
                                    return (
                                        <ListCardLoading key={list} />
                                    )
                                })
                            }
                            {
                                lists.length > 0 &&
                                lists.map(list => {
                                    return (
                                        <ListCard className="list-item" key={list._id} onClick={() => handlerChangeList(list._id)} id={list._id} name={list.name}>
                                            <p>
                                                {list.name}
                                            </p>
                                        </ListCard>
                                    )
                                })
                            }
                        </div>
                    </SideMenu>
                    <div className="todos">
                        {
                            listToShow &&
                            <TodosContent />
                        }
                    </div>
                </Content>
            </TodosContainer>
        </UserContext.Provider>

    )
}