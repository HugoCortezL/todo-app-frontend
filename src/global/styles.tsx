import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
        font-size: 15px;
        font-family: 'Nunito';
        color: #181818;
        -webkit-font-smoothing: antialiased !important;
        -webkit-text-size-adjust: 100% !important;
        overflow-x: hidden;
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    button.primary-button {
        background-color: #3733B0;
        color: #FFFFFF;
        border-radius: 5px;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        font: inherit;
        font-weight: bold;
        cursor: pointer;
        span.icon{
            margin-left: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        &:hover{
            box-shadow: 1px 1px 3px #3733B096;
        }
    }
`