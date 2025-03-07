import PlayButton from "./playbutton";
import Video from "./Video";


function VideoList({ videos }) {
    return (<>
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
  </>  )

}

export default VideoList;
