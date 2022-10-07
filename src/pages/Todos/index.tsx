import { TodosContainer, Header, Content, SideMenu } from "./styles";
import { BsPlusLg } from 'react-icons/bs'
import { useParams } from "react-router-dom";
import { useQuery } from '@apollo/client'
import { GET_LISTS_BY_USER_ID } from '../../api/User'
import { List } from "../../models";
import { useState, useEffect } from "react";
import ListCard from "../../components/core/ListCard";

export default function Todos() {
    const { id } = useParams();
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


    return (

        <TodosContainer>
            <Header>
                <h1>Todo App</h1>
            </Header>
            <Content>
                <SideMenu>
                    <header>
                        <p>My Lists</p>
                        <button className="primary-button">
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

    )
}