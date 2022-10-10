import { TodosContainer, Header, Content, SideMenu } from "./styles";
import { BsPlusLg } from 'react-icons/bs'
import { AiOutlineMenu } from 'react-icons/ai'
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from '@apollo/client'
import { GET_LISTS_BY_USER_ID } from '../../api/User'
import { CREATE_LIST } from '../../api/List'
import { List, ListInput } from "../../models";
import { useState, useEffect } from "react";
import ListCard from "../../components/core/ListCard";
import Backdrop from "../../components/shared/Backdrop";
import Modal from "../../components/shared/Modal";
import FormGroup from "../../components/shared/FormGroup";
import ListCardLoading from "../../components/core/ListCardLoading";

export default function Todos() {
    const { id } = useParams();
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

    const [ createList, createListResult] = useMutation(CREATE_LIST, {
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
    }

    const cancelCreating = () => {
        setCreating(false)
        setListToCreate({
            name: "",
            todos: []
        })
    }

    const onConfirmCreate = async () => {
        await createList(
            {
                variables: {
                    list: listToCreate,
                    userId: id
                }
            }
        )
        cancelCreating()
    }

    const handlerOpenMenu = () => {
        setOpenMenu(!openMenu)
    }



    return (
        <>
            {
                creating &&
                <Backdrop click={cancelCreating} />
            }
            {
                creating &&
                <Modal title="Create a list" onCancel={cancelCreating} onConfirm={onConfirmCreate} confirmText="Create">
                    <FormGroup>
                        <label htmlFor="name">Name</label>
                        <input type="name" id="name" placeholder="Work" onChange={(event) => setListToCreate({...listToCreate, name: event.target.value})}/>
                    </FormGroup>
                </Modal>
            }
            <TodosContainer>
                <Header>
                    <span className="burguer-icon" onClick={handlerOpenMenu}>
                        <AiOutlineMenu/>
                    </span>
                    <h1>Todo App</h1>
                    <span className="user-id">
                        HV
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
                                [0,1,2,3,4,5].map(list => {
                                    return (
                                        <ListCardLoading />
                                    )
                                })
                            }
                            {
                                lists.length > 0 &&
                                    lists.map(list => {
                                        return (
                                            <ListCard className="list-item" key={list._id} onClick={() => handlerChangeList(list._id)} id={list._id} userId={id ? id : ""} name={list.name}>
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

                    </div>
                </Content>
            </TodosContainer>
        </>

    )
}