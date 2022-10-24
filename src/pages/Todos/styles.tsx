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
    justify-content: space-between;
    padding: 0px 20px;
    span.burguer-icon{
        *{
            display: none;
            @media (max-width: 860px) {
                display: block;
            }
        }
    }
    h1{
        font-size: 30px;
        font-weight: normal;
    }
    span.user-id{
        position: relative;
        height: 40px;
        width: 40px;
        box-shadow: 0px 0px 10px #1c1898;
        border-radius: 50%;
        background-color: #3733B0;
        color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
`

export const Content = styled.div`
    width: 100%;
    height: calc(100vh - 60px);
    display: flex;
    align-items: center;
    .todos{
        width: 77%;
        height: 100%;
    }
`

export const SideMenu = styled.div`
        width: 0px;
        height: 0px;
        overflow: hidden;
        &.open{
            width: 23%;
            height: 100%;
            box-shadow: 2px 3px 4px #E0E0E0;
            padding: 5px;
            @media (max-width: 860px) {
                position: absolute;
                height: calc(100vh - 60px);
                background-color: #FFFFFF;
                z-index: 1001;
                width: 70vw;
                top: 60px;
                left: 0;
            }
        header{
            padding: 15px 15px 0px 15px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            z-index: 1000;
            p{
                font-size: 25px;
                @media (max-width: 860px) {
                    font-size: 17px;
                }
            }
            button{
                padding: 0 15px;
                @media (max-width: 860px) {
                    padding: 0 10px;
                }
            }
        }
        .lists{
            padding: 0px 10px 15px 15px;
            height: 88%;
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
    }
`

export const UserOptions = styled.div`
    display: none;
    &.open {
        display: block;
        position: absolute;
        top: 30px;
        right: 30px;
        background-color: #FFFFFF;
        border: 1px solid #DADADA;
        box-shadow: 0px 0px 4px #DADADA;
        border-radius: 4px;
        z-index: 1000;
        p{
            padding: 7px 10px;
            padding-right: 50px;
            color: #181818;
            &:first-child{
                padding-top: 10px;
            }
            &:last-child{
                padding-bottom: 10px;
            }
            &:hover{
                background-color: #DADADA;
            }
        }
    }

`