import axios from 'axios'
import Logo from './images/logo.png'
import Prof from './images/profile.png'
import './App.css'
import {useEffect, useState} from 'react'
import Thumb from './images/thumb.png'

function Header() {
  return (
    <div className="header">
      <div className="menu">
        <h1 style={{margin: '5px',marginBottom: '10px', color: 'white'}}>≡</h1>
        <img height="50px" src={Logo} alt="lgoo" />
      </div>
      <div>
        <input style={{height: '30px',  width: '300px', backgroundColor: '#121212', border: '1px solid #373737', color: '#a9a9a9'}} type="text" placeholder="検索"/>
        <button style={{height: '35px'}}>検索</button>
      </div>
      <div>
        <img height="40px" src={Prof} alt="Profile"/>
      </div>
    </div>
  )
}

// img 320 * 180
// profile pic
// title
// channel
// views 
// time

function Video(){
  const [title, setTitle] = useState('')
  const [thumb, setThumb] = useState('')
  const [length, setLength] = useState('')
  const [time, setTime] = useState('')
  const [prof, setProf] = useState('')
  const [name, setName] = useState('')
  const [views, setViews] = useState('')

  useEffect( () => {
  const element = document.querySelector('#get-request .result');
    axios.get('http://localhost:3001/video')
      .then(res => {
        setTitle(res.data.video_title)
        setThumb(res.data.video_thumb)
        setLength(res.data.video_length)
        setProf(res.data.user_prof)
        setName(res.data.user_name)
        setTime(res.data.video_time)
        setViews(res.data.video_views)

      });

      console.log(thumb)
    }
  ) 
  
  return (
    <div className="info">
      <img src={Thumb} className="thumbnamil"/>

      <div className="disc">
        <img className="prof" src={Prof}/>
        <div>
          <h2 className="videoTitle">{title}</h2>
          <p style={{marginTop: '6px',lineHeight: '1.3rem',lineWeight: 'normal', color: '#a9a9a9', fontFamily: 'Roboto'}}>{name} <br/>
          {views}回 {time}</p>
        </div>
      </div>
    </div>
  )
}

function Videos(){
  return(
    <div className="videolist">
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
    </div>
  )
  
}

function App() {


  return (
    <div className="App">
      <Header />
      <Videos />
    </div>
  );
}

export default App;
