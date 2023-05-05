import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { createVideo } from "../../store/videos";
// import { createGenre } from "../../store/videos";
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
        {value: 'Horror', label:'Horror'},
        { value: 'Drama', label: 'Drama' }
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


    useEffect(() => {
const errors = {}

        

        if (!name.length) errors.name = 'Name for your Film is required'
        if (!type.length) errors.type = 'Type of film is required'
        if (!cast.length) errors.cast = 'Cast is required'
        if (!url.length) errors.url = 'Url for your film is required'
        if (!preview.length) errors.preview = 'Preview Image required'
        if (!description.length) errors.length = 'Description is required'
        if (description.length < 30) errors.length = 'Description needs a minimum of 30 characters'
        if (!genreName.length) errors.genreName = 'Genre is required'

        const imageRegex = /\.(gif|jpe?g|png|bmp|svg)$/i;
        if (preview.length > 0 && !imageRegex.test(preview)) {
            errors.preview = "Image URL must end in .png, .jpg, or .jpeg";
        }

        setErrors(errors);
    }, [name, type, cast, url, preview, description, genreName])

    const handleSubmit = async (e) => {
        e.preventDefault();

        
        const video = {
            userId: sessionUser.id,
            name,
            type,
            cast,
            url,
            preview,
            description,
            genre: genreName
        }

              let newVideo = await dispatch(createVideo(video))

              history.push(`/video/${newVideo.id}`)
        }
    

    return (
        <form onSubmit={handleSubmit} className='AccForm'>
            <h1>Create New Film</h1>
            <h2>What is the name of the film?</h2>
            <div className="name1">
                <label>
                    Name
                    <input
                        type="text"
                        id="NameAcc"
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
                    id="castbox"
                    placeholder="Cast"
                    value={cast}
                    onChange={(e) =>
                        // console.log(e)
                        setCast(e.target.value)
                    }
                />
            </div>
            <p className="errors">{errors.cast}</p>
            <div className="urlbox">
                <h5>Submit your films url</h5>
                <input
                    type="text"
                    id="urlboxmbdaw"
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
                    id="previewboxkajnd"
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
                    onChange={(value) => {
                        setGenreName(value.value)
                     }
                        
                    }
                />
                {/* <input
                    type="text"
                    id="prevImage"
                    placeholder="genre"
                    value={genreName}
                    onChange={(e) => setGenreName(e.target.value)}
                /> */}
                <p className="errors">{errors.genreName}</p>
            </div >
            <div className="descriptionboxes">
                <h6>Describe your film to your viewers!</h6>
                <input
                    type="text"
                    id="descriptionadad"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <p className="errors">{errors.length}</p>
            </div >
            <div className="thebutt">
                
                <button
                    type="submit"
                    disabled={Boolean(Object.values(errors).length)}
                >
                    Create Film
                </button>
            </div>

        </form>
    )


}

export default NewGenre