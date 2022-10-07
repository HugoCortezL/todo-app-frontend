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
    padding: 5px;
    header{
        padding: 15px 15px 0px 15px;
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
    .lists{
        padding: 0px 10px 15px 15px;
        max-height: 88%;
        width: 100%;
        margin-top: 10px;
        overflow-y: scroll;
        &::-webkit-scrollbar {
            width: 5px;
        }
        
        &::-webkit-scrollbar-track {
            background: transparent;
        }
        
        &::-webkit-scrollbar-thumb {
            background: #3733B0; 
            border-radius: 5px;
        }

        &::-webkit-scrollbar-thumb:hover {
            background: #1c1898; 
        }
    }
`

export const ListItem = styled.div`
    width: 100%;
    padding: 10px;
    font-size: 17px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 0px 4px #C3C3C3;
    background-color: #FFFFFF;
    border-radius: 4px;
    margin-top: 10px;
    cursor: pointer;
    span{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    &.active{
        box-shadow: 0px 0px 4px #3733B0;
        background-color: #4F49FC;
        color: #FFFFFF;
    }
`