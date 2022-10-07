import { TodosContainer, Header,Content,  SideMenu } from "./styles";
import {BsPlusLg} from 'react-icons/bs'

export default function Todos(){
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
                            <BsPlusLg size={16}/>
                        </span>
                    </button>
                    </header>
                </SideMenu>
                <div className="todos">

                </div>
            </Content>
        </TodosContainer>
    )
}