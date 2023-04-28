import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { createVideo } from "../../store/videos";
import { createGenre } from "../../store/videos";
import Dropdown from "./dropdown";
import './newGenre.css'




const NewGenre = () => {
    const history = useHistory()

    const options = [
        {value:'Movie', label:'Movie'},
        {value: 'TV-Show', label: 'TV-Show'}
    ]

    const options2 = [
        {value: 'Action', label:'Action'},
        {value: 'Adventure', label:'Adventure'},
        {value: 'Comedy', label:'Comedy'},
        {value: 'Crime', label:'Crime'},
        {value: 'Mystery', label:'Mystery'},
        {value: 'Horror', label:'Horror'}
    ]
const sessionUser = useSelector(state => state.session.user);

    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [cast, setCast] = useState('')
    const [url, setUrl] = useState('')
    const [preview, setPreview] = useState('')
    const [description, setDescription] = useState('')
    const [genreName, setGenreName] = useState('')
    const [errors, setErrors] = useState({});

    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const err = {}

        

        if (!name.length) err.name = 'Name for your Film is required'
        if (!type.length) err.type = 'Type of film is required'
        if (!cast.length) err.cast = 'Cast is required'
        if (!url.length) err.url = 'Url for your film is required'
        if (!preview.length) err.preview = 'Preview Image required'
        if (!description.length) err.length = 'Description is required'
        if (description.length < 30) err.length = 'Description needs a minimum of 30 characters'
        if (!genreName.length) err.genreName = 'Genre is required'

        const imageRegex = /\.(gif|jpe?g|png|bmp|svg)$/i;
        if (preview.length > 0 && !imageRegex.test(preview)) {
            err.preview = "Image URL must end in .png, .jpg, or .jpeg";
        }

        const video = {
            userId: sessionUser.id,
            name,
            type,
            cast,
            url,
            preview,
            description
        }

        if(!!Object.values(err).length) {
            setErrors(err);
        } else {
            const newVideo = await dispatch(createVideo(video));
                dispatch(createGenre(newVideo.id, genreName));
                history.push(`/video/${newVideo.id}`);
            }
            
        }
    

    return (
        <form onSubmit={handleSubmit} className='createspot'>
            <h1>Create New Film</h1>
            <h2>What is the name of the film?</h2>
            <div>
                <label>
                    Name
                    <input
                        type="text"
                        id="Name of film"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <p className="errors">{errors.name}</p>
            </div>
            <div className="typbox">
                <h3>Is this film a Movie or TV-Show</h3>
                <Dropdown
                    isSearchable
                    isMulti
                    placeHolder="Select..."
                    options={options}
                    onChange={(value) => setType(value.value)}
                />
            </div>
            <p className="errors">{errors.type}</p>
            <div className="castbox">
                 <h4>Who is featured in this film?</h4>
                <input
                    type="text"
                    id="cast"
                    placeholder="Cast"
                    value={cast}
                    onChange={(e) => setCast(e.target.value)}
                />
            </div>
            <p className="errors">{errors.cast}</p>
            <div className="urlbox">
                <h5>Submit your films url</h5>
                <input
                    type="text"
                    id="url"
                    placeholder="URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                /> 
                <p className="errors">{errors.url}</p>
            </div>
            <div className="previewboxes">
                <h6>Liven up your film with a preview photo</h6>
                <p>Submit a link to one photo to publish your film.</p>
                <input
                    type="text"
                    id="prevImage"
                    placeholder="Preview Image URL"
                    value={preview}
                    onChange={(e) => setPreview(e.target.value)}
                />
                <p className="errors">{errors.preview}</p>
            </div >
            <div className="genreboxes">
                <h6>What Genre is your film?</h6>
                <p>Choose from the list below:</p>
                <Dropdown
                    isSearchable
                    placeHolder="Genres..."
                    options={options2}
                    onChange={(value) => setGenreName(value.value)}
                />
                <p className="errors">{errors.genreName}</p>
            </div >
            <div className="descriptionboxes">
                <h6>Describe your film to your viewers!</h6>
                <input
                    type="text"
                    id="description"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <p className="errors">{errors.description}</p>
            </div >
            <div className="thebutt">
                <button
                    type="submit"
                >
                    Create Film
                </button>
            </div>

        </form>
    )


}

export default NewGenre