import { useState } from 'react';
import './Video.css'

function Video(props) {
    const { title, chName, img } = props;
    const [likesCount, setLikesCount] = useState(0);
    console.log(title);

    const increaseLikesbyOne = () => {
        setLikesCount(likesCount + 1);
    };

    return (
        <div className='video'>
            <img className='video-img' src={img} alt="vide image" />
            <p>{title}</p>
            <p>{chName}</p>
            <div className='video-footer'>
                <p>Likes: {likesCount}</p>
                <button onClick={increaseLikesbyOne}>Like</button>
            </div>
        </div>
    );
}

export default Video;