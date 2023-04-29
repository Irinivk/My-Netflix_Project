import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { deleteVideo } from "../../store/videos";
import { useModal } from "../../store/context/Modal"


const DeleteUserVideo = ({ vid }) => {
    const { closeModal } = useModal();

    const dispatch = useDispatch();
    const history = useHistory()

    const handleDelete = (e) => {
        e.preventDefault();


        return dispatch(deleteVideo(vid))
            .then(history.push('/browse/user/films'))
            .then(closeModal())

    };

    return (
            <div>
                <h1>Confrm Delete</h1>
                <h2>Are you sure you want to remove this film?</h2>
                <form onSubmit={handleDelete} className='delete-a-video-form'>
                    <button type="submit" onClick={closeModal} className='delete-no'> No(Keep Film)</button>
                    <button type="submit" className="delete-yes">Yes (Delete Film)</button>
                </form>
            </div>
        )
}

export default DeleteUserVideo