import styled from 'styled-components'

export const LoginLayoutContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    div.first{
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const FakeImage = styled.div`
    position: relative;
    div{
        position: absolute;
        &.light{
            background-color: #B5B3FF;
            border-color: #B5B3FF;
        }
        &.mid{
            background-color: #4F49FC;
            border-color: #4F49FC;
        }
        &.dark{
            background-color: #3733B0;
            border-color: #3733B0;
        }
        &.border{
            background-color: #FFFFFF !important;
        }
        &.first-ball{
            height: 150px;
            width: 150px;
            border-radius: 50%;
            top: 10px;
            left: 40px;
        }
        &.second-ball{
            height: 132px;
            width: 132px;
            border-radius: 50%;
            top: 80px;
            right: 70px;
        }
        &.third-ball{
            height: 200px;
            width: 200px;
            border-width: 70px;
            border-style: solid;
            border-radius: 50%;
            top: 180px;
            left: 180px;
        }
        &.fourth-ball{
            height: 150px;
            width: 150px;
            border-width: 50px;
            border-style: solid;
            border-radius: 50%;
            bottom: 40px;
            left: 40px;
        }
        &.fifth-ball{
            height: 200px;
            width: 200px;
            border-radius: 50%;
            bottom: 60px;
            right: 80px;
        }
    }

`