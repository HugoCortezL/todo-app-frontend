import styled from 'styled-components'

interface TodoCardContainerProps {
    bsColor: string
}

export const TodoCardContainer = styled.div<TodoCardContainerProps>`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 1px 1px 5px #A8A8A8;
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
        .left{
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .right{
            display: flex;
            align-items: center;
            gap: 10px;
        }
    }
    .body{
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`