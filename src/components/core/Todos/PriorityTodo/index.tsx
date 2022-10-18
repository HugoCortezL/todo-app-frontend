import { PriorityLowTodoContainer, PriorityMidTodoContainer, PriorityHighTodoContainer } from './styles'
import { FaChevronUp } from 'react-icons/fa'
import { PriorityEnum } from '../../../../models'

interface PriorityTodoProps {
    priority: string
}

export default function PriorityTodo({ priority }: PriorityTodoProps) {
    if (priority === PriorityEnum.Low) {
        return (
            <PriorityLowTodoContainer title="Low">
                <span>
                    <FaChevronUp size={18} color={"#3C78BD"}/>
                </span>
            </PriorityLowTodoContainer>
        )
    }
    else if (priority === PriorityEnum.Mid) {
        return (
            <PriorityMidTodoContainer title="Mid">
                <span>
                    <FaChevronUp size={18} color={"#EC9513"}/>
                </span>
                <span className="second">
                    <FaChevronUp size={18} color={"#EC9513"}/>
                </span>
            </PriorityMidTodoContainer>
        )
    }
    else{
        return (
            <PriorityHighTodoContainer title="High">
                <span>
                    <FaChevronUp size={18} color={"#BD3C3C"}/>
                </span>
                <span className="second">
                    <FaChevronUp size={18} color={"#BD3C3C"}/>
                </span>
                <span>
                    <FaChevronUp size={18} color={"#BD3C3C"}/>
                </span>
            </PriorityHighTodoContainer>
        )
    }
}