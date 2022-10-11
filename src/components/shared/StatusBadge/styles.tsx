import styled from 'styled-components'

interface StatusBadgeContainerProps {
    background: string
}

export const StatusBadgeContainer = styled.div<StatusBadgeContainerProps>`
    background-color: ${props => props.background};
    font-size: 15px;
    padding: 5px 10px;
    border-radius: 5px;
    color: #FFFFFF;
    font-weight: bold;
    letter-spacing: 0.5px;
`