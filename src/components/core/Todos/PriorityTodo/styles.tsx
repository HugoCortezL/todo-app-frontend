import styled from "styled-components";

export const PriorityLowTodoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const PriorityMidTodoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    span.second{
        margin-top: -17px;
    }
`

export const PriorityHighTodoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    span.second{
        margin: -17px 0;
    }
`