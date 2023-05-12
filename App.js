import logo from './logo.svg';
import './App.css';
import Projectimage from './images/image 4.png'
import { alignProperty } from '@mui/material/styles/cssUtils';

function App() {

  const imageStyle = {
    width: '40%',
    height: 'auto',
    borderRadius: '10%',
  };

  // const buttonsPart3 = [{
  //   text1: "Lorem Ipsum Description Text",
  //   text2: "Lorem Ipsum Description Text",
  //   text3: "Lorem Ipsum Description Text",
  //   text4: "Lorem Ipsum Description Text",
  // }
  // ]

  return (
    <div className="MainPage">

      <div className="Header">
        <p className= "Name">Dinara Arestoteleva</p>
        <div className = "HeaderItems">
          <p className= "HeaderItemsStyle">About</p>
          <p className= "HeaderItemsStyle">Experience</p>
          <p className= "HeaderItemsStyle">Projects</p>
          <p className= "HeaderItemsStyle">Contacts</p>
        </div>
      </div>


<div className="Part2">
  <h1 className="Part2-h1style"> Hi, I’m Dinara, I build things for the web. </h1>

<p className="Part2-Pstyle">I’m software developer and this is my portfolio.</p>
<button className="Part2Button">
<p className="ButtonTextStyle">Check out my CV</p>
</button>
</div>

<div className='Part3'>
<div className="Part3-text">
<h1 className="Part2-h1style">About me</h1>
<p className="Part2-Pstyle">I’m software developer and this is my portfolio.
I’m software developer and this is my portfolio. I’m software developer and this is my portfolio. I’m software developer and this is my portfolio.</p>

<div className = "Part3-buttons">
  <p>
  <p> - Lorem Ipsum Description Text </p>
  <p> - Lorem Ipsum Description Text </p>
  </p>
  <p>
  <p> - Lorem Ipsum Description Text </p>
  <p> - Lorem Ipsum Description Text </p>
  </p>
</div>

</div>
<img src={Projectimage} alt="Projectimage" style={imageStyle} />
</div>


<div className='Part4'>
<h1 className="Part2-h1style">Experience</h1>

<div className='part4CV'> 
  <p className='year'> 2021-2022 </p>
  <div className='part4Experience'>
  <p className='company'> 2021-2022 </p>
  <p className='country'> 2021-2022 </p>
  <p className='duty'> 2021-2022 </p>
  </div>
  
</div>

</div>
    </div>
  );
}

export default App;



 {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}