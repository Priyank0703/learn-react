import Video from './components/Video.js'
import "./App.css"
import videoDB from './data/data'
import PlayButton from './components/playbutton'
import Counter from './components/counter.js'
import { useState } from 'react'


function App() {

  console.log('render App')

const [videos,setVideos] = useState(videoDB)


  return (
    <div className='App' onClick={() => console.log("App")}><div>
      <button onClick = {()=>{
      
        setVideos(  [...videos,{ id:videos.length+1,
          title: 'Demo JS tutorial',
          views: '360M',
          time: '10 month ago',
          channel: 'Coder Dost',
          verified: true}])
      }}>Add Videos</button>
    </div>
      {
        videos.map(video => <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id} >


          <PlayButton
            onPlay={() => console.log('playing..', video.title)}
            onPause={() => console.log('paused..', video.title)}>{video.title}
          </PlayButton>


        </Video>)
      }

      <div style={{ clear: 'both' }}>
        {/* <PlayButton message='play-msg' onPlay = {()=>console.log('play')}  onPause = {()=>console.log('pause')}>play</PlayButton> */}


        {/* <PlayButton message='pause-msg' onClick= {()=>alert('pause')}>pause</PlayButton> */}

      </div>

<Counter></Counter>

    </div>

  )

}

export default App;