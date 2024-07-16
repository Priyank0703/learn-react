import Video from './components/Video.js'
import "./App.css"
import videos from './data/data'
import PlayButton from './components/playbutton'

function App() {
  let videos = [{
    id: 1,
    title: 'React JS tutorial',
    views: '999k',
    time: '1 year ago',
    channel: 'coding expert',
    verified: false
  },

  {
    id: 2,
    title: 'Node JS tutorial',
    views: '100k',
    time: '6 month ago',
    channel: 'coding expert',
    verified: false
  },


  {
    id: 3,
    title: 'Mongo DB tutorial',
    views: '1M',
    time: '2 month ago',
    channel: 'coding expert',
    verified: true,

  }]
  return (
    <div className='App'><div>Videos</div>
      {
        videos.map(video => <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id} >
        </Video>)
      }

      <div style={{clear:'both'}}>
        <PlayButton></PlayButton>
        <PlayButton></PlayButton>

      </div>

    </div>


  )

}

export default App;