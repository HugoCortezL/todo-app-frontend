import styled from 'styled-components'

export const TodosContainer = styled.div`
    width: 100vw;
    height: 100vh;
`

export const Header = styled.div`
    width: 100%;
    height: 60px;
    box-shadow: 0px 1px 4px #E0E0E0;
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
        font-size: 30px;
        font-weight: normal;
    }
`

export const Content = styled.div`
    width: 100%;
    height: calc(100vh - 60px);
    display: flex;
    align-items: center;
`

export const SideMenu = styled.div`
    width: 23%;
    height: 100%;
    box-shadow: 2px 3px 4px #E0E0E0;
    padding: 20px;
    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        p{
            font-size: 25px;
        }
        button{
            padding: 0 15px;
        }
    }
`