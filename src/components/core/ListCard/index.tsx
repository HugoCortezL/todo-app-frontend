import { ListCardContainer, ListCardOptions } from './styles'
import { BsThreeDotsVertical } from 'react-icons/bs'
import {useState} from 'react'

interface ListCardProps {
    children: any,
    className: string,
    onClick: () => void,
    id: string
}

export default function ListCard(props: ListCardProps) {
    const [openOptions, setOpenOptions] = useState(false)

    const handlerOpenOptions = () => {
        setOpenOptions(!openOptions)
    }

    console.log(openOptions)

    return (
        <ListCardContainer className={props.className} key={props.id} onClick={props.onClick} id={props.id} onMouseLeave={() => setOpenOptions(false)}>
            {props.children}
            <span  onClick={handlerOpenOptions}>
                <BsThreeDotsVertical size={20}/>
                <ListCardOptions className={openOptions ? "open" : ""}>
                    <p className='edit'>
                        Edit
                    </p>
                    <p className='delete'>
                        Delete
                    </p>
                </ListCardOptions>
            </span>
        </ListCardContainer>
    )
}