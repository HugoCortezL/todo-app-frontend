import styled from "styled-components";

export const ConfigTodosContainer = styled.div`
    width: 100%;
    min-height: 50vh;
    button.primary-button{
        padding: 0 15px;
    }
`

export const Filters = styled.div`
    width: 100%;
    .other-filters{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 5px;
        margin-bottom: 10px;
        div{
            display: flex;
            align-items: center;
            gap: 5px;
        }
        .order{
            cursor: pointer;
            position: relative;
            span.icon-up-down{
                display: flex;
                flex-direction: column;
                span.up{
                    margin-top: 5px;
                }
                span.down{
                    margin-top: -12px;
                }
            }
            .options{
                display: none;
                &.open{
                    display: block;
                    width: 200px;
                    position: absolute;
                    top: 25px;
                    right: 5px;
                    background-color: #FFFFFF;
                    border: 1px solid #DADADA;
                    box-shadow: 0px 0px 4px #DADADA;
                    z-index: 1000;
                    border-radius: 4px;
                    p{
                        padding: 7px 10px;
                        padding-right: 30px;
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
            }
        }
    }
`