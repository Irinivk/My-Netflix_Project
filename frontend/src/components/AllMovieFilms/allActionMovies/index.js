import './action.css'


const AllActionMovies = ({mov}) => {


    // for (let gen in mov) {
    //     console.log(gen)
    // }

    // console.log(mov)

    return (
        <img src={mov.preview} alt="" className='poster' />
    )
}

export default AllActionMovies