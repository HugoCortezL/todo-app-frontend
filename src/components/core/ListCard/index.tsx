import { ListCardContainer, ListCardOptions } from './styles'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { DELETE_LIST, EDIT_LIST } from '../../../api/List'
import { GET_LISTS_BY_USER_ID } from '../../../api/User'
import { ListInput, Todo } from '../../../models'
import Backdrop from '../../shared/Backdrop'
import Modal from '../../shared/Modal'
import FormGroup from '../../shared/FormGroup'

interface ListCardProps {
    children: any,
    className: string,
    onClick: () => void,
    id: string,
    userId: string,
    name: string
}

export default function ListCard(props: ListCardProps) {
    const [openOptions, setOpenOptions] = useState(false)
    const [editing, setEditing] = useState(false)
    const [listToEdit, setListToEdit] = useState<ListInput>({
        name: props.name,
        todos: []
    })
    const [listToEditId, setListToEditId] = useState("")


    const handlerOpenOptions = () => {
        setOpenOptions(!openOptions)
    }

    const [editList, editListResult] = useMutation(EDIT_LIST, {
        refetchQueries: [
            {
                query: GET_LISTS_BY_USER_ID,
                variables: {
                    id: props.userId
                }
            }
        ]
    })

    const [deleteList, deleteListResult] = useMutation(DELETE_LIST, {
        refetchQueries: [
            {
                query: GET_LISTS_BY_USER_ID,
                variables: {
                    id: props.userId
                }
            }
        ]
    })

    const onDeleteList = async () => {
        await deleteList(
            {
                variables: {
                    listId: props.id,
                    userId: props.userId
                }
            }
        )
    }

    const onEditList = (listId: string) => {
        setEditing(true)
        setListToEditId(listId)
    }

    const cancelEditing = () => {
        setEditing(false)
        setListToEditId("")
    }

    const onConfirmEdit = async () => {
        await editList(
            {
                variables: {
                    list: listToEdit,
                    listId: listToEditId,
                    userId: props.userId
                }
            }
        )
        cancelEditing()
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