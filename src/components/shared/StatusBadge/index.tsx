import { StatusBadgeContainer } from "./styles";
import { StatusEnum } from "../../../models";


interface StatusBadgeProps {
    status?: StatusEnum
}

export default function StatusBadge(props: StatusBadgeProps) {
    let background
    if (props.status == StatusEnum.Todo) {
        background = "#B509FF"
    }
    else if (props.status == StatusEnum.Progess) {
        background = "#4973CC"
    }
    else if (props.status == StatusEnum.Review) {
        background = "#FF8100"
    }
    else {
        background = "#40B862"
    }

    return (
        <StatusBadgeContainer background={background}>
            <p>
                {props.status}
            </p>
        </StatusBadgeContainer>
    )
}