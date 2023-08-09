import './TheNunfilm.css'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

function TheNunFilm(props) {
    return (
       <div className="the28283">
            <div className='onevideo298383'>
                <img src='https://wallpaperaccess.com/full/1727297.jpg'  alt='' className="nsbdan383"/>
            </div>
            <div className="infoty9237384">
                <h1>The Nun</h1>
                <h2>When a young nun at a cloistered abbey in Romania takes her own life, a priest with a haunted past and a novitiate on the threshold of her final vows are sent by the Vatican to investigate. Together, they uncover the order's unholy secret.</h2>
            </div>
                <div className="kfjebhf">
                    <NavLink to={`/video/${1}`} >
                        <button>Play</button>
                    </NavLink>
                 </div>    
                
        </div>
    );
}

export default TheNunFilm;  