import './App.css';
import Video from './components/Video';  
import videos from './data/data';

function App(){
  return (
    <div className="App">
      {/* <div>Videos</div> */}
      {
        videos.map(video=><Video
        key={video.id}
        title={video.title}
        time={video.time}
        views={video.views}
        channel={video.channel}
        verified={video.verified}
        id={video.id}       
        >
        </Video>)
      }
    </div>
  )
}

export default App;

