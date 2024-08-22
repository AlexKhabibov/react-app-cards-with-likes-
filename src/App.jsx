import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Video from './Video/video'
import { VIDEOS } from './videos'
import './App.css'

function App() {
  return (
    <>
      <div className='video-container'>
        {/* <Video title='Video title' chName='Channel Name' img={reactLogo} /> */}
        {
          VIDEOS.map((video) => (
            <Video
              key={video.id}
              title={video.title}
              chName={video.chName}
              img={video.img} />
          ))}
      </div>
    </>
  )
}

export default App