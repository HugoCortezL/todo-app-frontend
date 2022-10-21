import { ListCardContainer, ListCardOptions } from './styles'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { ReactNode, useContext, useState } from 'react'
import { useMutation } from '@apollo/client'
import { DELETE_LIST, EDIT_LIST } from '../../../api/List'
import { GET_LISTS_BY_USER_ID } from '../../../api/User'
import { ListInput } from '../../../models'
import Backdrop from '../../shared/Backdrop'
import Modal from '../../shared/Modal'
import FormGroup from '../../shared/FormGroup'
import { UserContext } from "../../../pages/Todos";

interface ListCardProps {
    children: ReactNode,
    className: string,
    onClick: () => void,
    id: string,
    name: string
}

export default function ListCard(props: ListCardProps) {
    const { userId, listId } = useContext(UserContext);
    const [openOptions, setOpenOptions] = useState(false)
    const [editing, setEditing] = useState(false)
    const [listToEdit, setListToEdit] = useState<ListInput>({
        name: props.name,
        todos: []
    })

    const handlerOpenOptions = () => {
        setOpenOptions(!openOptions)
    }

    const [editList, editListResult] = useMutation(EDIT_LIST, {
        refetchQueries: [
            {
                query: GET_LISTS_BY_USER_ID,
                variables: {
                    id: userId
                }
            }
        ]
    })

    const [deleteList, deleteListResult] = useMutation(DELETE_LIST, {
        refetchQueries: [
            {
                query: GET_LISTS_BY_USER_ID,
                variables: {
                    id: userId
                }
            }
        ]
    })

    const onDeleteList = async () => {
        await deleteList(
            {
                variables: {
                    listId: props.id,
                    userId: userId
                }
            }
        )
    }

    const onEditList = (listId: string) => {
        setEditing(true)
    }

    const cancelEditing = () => {
        setEditing(false)
    }

    const onConfirmEdit = async () => {
        if (validateList()) {
            await editList(
                {
                    variables: {
                        list: listToEdit,
                        listId: props.id,
                        userId: userId
                    }
                }
            )
            cancelEditing()
        }
    }

    const validateList = () => {
        const nameEl = document.getElementById("name")
        if (listToEdit.name.trim().length == 0) {
            nameEl?.classList.add("error")
            return false
        }
        else {
            nameEl?.classList.remove("error")
            return true
        }
    }

    return (
        <>
            {
                editing &&
                <Backdrop click={cancelEditing} />
            }
            {
                editing &&
                <Modal title="Edit a list" onCancel={cancelEditing} onConfirm={onConfirmEdit} confirmText="Save">
                    <FormGroup>
                        <label htmlFor="name">Name</label>
                        <input type="name" id="name" placeholder="Work" value={listToEdit.name} onChange={(event) => setListToEdit({ ...listToEdit, name: event.target.value })} />
                        <p>The name must have at least 1 letter</p>
                    </FormGroup>
                </Modal>
            }
            <ListCardContainer className={props.className} key={props.id} onClick={props.onClick} id={props.id} onMouseLeave={() => setOpenOptions(false)}>
                {props.children}
                <span onClick={handlerOpenOptions}>
                    <BsThreeDotsVertical size={20} />
                    <ListCardOptions className={openOptions ? "open" : ""}>
                        <p className='edit' onClick={() => onEditList(props.id)}>
                            Edit
                        </p>
                        <p className='delete' onClick={onDeleteList}>
                            Delete
                        </p>
                    </ListCardOptions>
                </span>
            </ListCardContainer>
        </>
    )
}