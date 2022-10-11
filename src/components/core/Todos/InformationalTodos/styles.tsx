import styled from "styled-components";

export const InformationalTodosContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 20px;
    .todo-info{
        width: 150px;
        height: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        gap: 20px;
        border-radius: 15px;
        background: linear-gradient(145deg, #e6e6e6, #ffffff);
        box-shadow: 4px 4px 8px #adadad, -4px -4px 8px #ffffff;
        h2{
            &.todo-color{
                color: #ff09a9;
            }
            &.progress-color{
                color: #4973CC;
            }
            &.review-color{
                color: #FF8100;
            }
            &.done-color{
                color: #40B862;
            }
        }
        p{
            font-size: 40px;
            font-weight: 600;
        }
    }
`