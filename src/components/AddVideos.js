import './AddVideos.css'

import { useState } from 'react'

const initialState = {
    
        time: '10 month ago',
        channel: 'Coder Dost',
        verified: true,
        title : '',
        views : ''
    

    
}

function AddVideo({addVideos}) {
    const [video, setVideo] = useState(initialState)

    function handleSubmit(e) {
        addVideos(video)
        e.preventDefault();
        setVideo(initialState)
        

    }


    function handleChange(e) {
        setVideo({
            ...video,
            [e.target.name]: e.target.value
        })
    }


    return (
        <form>
            <input type="text" name='title' onChange={handleChange} placeholder='title' value = {video.title} />
            <input type="text" name='views' onChange={handleChange} placeholder='views' value = {video.views} />
            <button onClick={handleSubmit}>

          

                Add Video </button>
        </form>

    )

}

export default AddVideo;

