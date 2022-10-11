import styled from "styled-components";

export const TodosContainer = styled.div`
    max-height: calc(100vh - 60px);
    overflow-y: scroll;
    z-index: 900;
    width: 100%;
    padding: 28px 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
`