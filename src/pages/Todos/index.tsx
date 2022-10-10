import { TodosContainer, Header, Content, SideMenu } from "./styles";
import { BsPlusLg } from 'react-icons/bs'
import { AiOutlineMenu } from 'react-icons/ai'
import { useParams } from "react-router-dom";
import { useQuery } from '@apollo/client'
import { GET_LISTS_BY_USER_ID } from '../../api/User'
import { List, ListInput } from "../../models";
import { useState, useEffect } from "react";
import ListCard from "../../components/core/ListCard";
import Backdrop from "../../components/shared/Backdrop";
import Modal from "../../components/shared/Modal";
import FormGroup from "../../components/shared/FormGroup";

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

    const onConfirmCreate = () => {
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
                                <div >
                                    Carregando
                                </div>
                            }
                            {
                                lists.length > 0 ?
                                    lists.map(list => {
                                        return (
                                            <ListCard className="list-item" key={list._id} onClick={() => handlerChangeList(list._id)} id={list._id}>
                                                <p>
                                                    {list.name}
                                                </p>
                                            </ListCard>
                                        )
                                    })
                                    :
                                    <p>
                                        You don't have any lists yet
                                    </p>
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