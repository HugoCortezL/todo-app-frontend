import styled from 'styled-components'

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 26vw;
    @media (max-width: 860px) {
        width: 80vw;
    }
    h1{
        margin-bottom: 15px;
    }
    p.link, a.link{
        color: #4F49FC;
        text-decoration: underline;
        cursor: pointer;
        font-weight: bold;
    }
    p#error{
        color: red;
        display: none;
        &.active{
            display: block;
        }
    }
    button.primary-button{
        width: 100%;
        margin: 30px 0 20px; 
    }
    .or{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #BBBBBB;
        .line{
            height: 2px;
            width: 45%;
            background-color: #BBBBBB;
        }
    }
    p.register{
        color: #898989;
        margin-top: 20px;
    }
`