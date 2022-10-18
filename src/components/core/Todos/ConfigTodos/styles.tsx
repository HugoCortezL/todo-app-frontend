import styled from "styled-components";

export const ConfigTodosContainer = styled.div`
    width: 100%;
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
    }
`