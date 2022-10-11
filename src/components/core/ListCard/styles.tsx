import styled from "styled-components"

export const ListCardContainer = styled.div`
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
    position: relative;
    &:hover{
        background-color: #e5e4ff;
    }
    span{
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    &.active{
        box-shadow: 0px 0px 4px #3733B0;
        background-color: #4F49FC;
        color: #FFFFFF;
    }
    `

export const ListCardOptions = styled.div`
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
        z-index: 100;
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