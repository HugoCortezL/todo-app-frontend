import styled from "styled-components";

export const ModalContainer = styled.div`
    position: fixed;
    height: 82vh;
    width: 50vw;
    background-color: #FFFFFF;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    z-index: 100;
    top: 9vh;
    left: 25vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 860px) {
        height: 70vh;
        width: 80vw;
        left: 10vw;
    }
    .header{
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 100%;
        height: 50px;
        background-color: #E4ECFF;
        color: #3733B0;
        font-size: 20px;
        .close{
            position: absolute;
            right: 20px;
            top: 15px;
            cursor: pointer;
        }
    }
    .content{
        height: calc(100% - 100px);
        width: 100%;
        overflow-y: scroll;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .footer{
        height: 50px;
        width: 100%;
        background-color: #E4ECFF;
        display: flex;
        align-items: center;
        gap: 15px;
        justify-content: end;
        button {
            padding: 0 20px;
        }
        button:last-child{
            margin-right: 20px; 
        }
    }
`