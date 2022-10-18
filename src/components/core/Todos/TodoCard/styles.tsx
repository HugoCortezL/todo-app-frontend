import styled from 'styled-components'

interface TodoCardContainerProps {
    bsColor: string
}

export const TodoCardContainer = styled.div<TodoCardContainerProps>`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    box-shadow: 1px 1px 5px #A8A8A8;
    position: relative;
    &:not(:first-child) {
        margin-top: 15px;
    }
    &:hover{
        box-shadow: 0px 0px 4px 2px ${props => props.bsColor};
    }
    header{
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #F0F0F0;
        border-bottom: 1px solid #D1D1D1;
        border-radius: 15px 15px;
        .left{
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .right{
            display: flex;
            align-items: center;
            gap: 10px;
            span{
                cursor: pointer;
                position: relative;
            }
        }
    }
    .body{
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

export const TodoCardOptions = styled.div`
    display: none;
    &.open {
        display: block;
        position: absolute;
        top: 20px;
        right: 5px;
        background-color: #FFFFFF;
        border: 1px solid #DADADA;
        box-shadow: 0px 0px 4px #DADADA;
        border-radius: 4px;
        z-index: 1000;
        p{
            padding: 7px 10px;
            padding-right: 50px;
            &:first-child{
                padding-top: 10px;
            }
            &:last-child{
                padding-bottom: 10px;
            }
            &:hover{
                background-color: #DADADA;
            }
            &.edit {
                color: #FF7A00;
            }
            &.delete {
                color: #FF0000;
            }
        }
    }

`