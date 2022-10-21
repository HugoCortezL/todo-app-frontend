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
    &::-webkit-scrollbar {
        width: 8px;
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
    @media (max-width: 860px) {
        width: 100vw;
    }
`