import React from 'react';
import './App.css';

import Earth from './Components/Earth';
import Mars from './Components/Mars';
import Mercury from './Components/Mercury';
import Jupiter from './Components/Jupiter';
import Saturn from './Components/Saturn';
import Uranus from './Components/Uranus';
import Neptune from './Components/Neptune';
import Venus from './Components/Venus';

const Planet = (props) => {
  let size;
  let space;
  props.size ? size = props.size : size = "100%";
  props.space ? space = props.space : space = "10px"; 
  return (
    <div style={{marginBottom:"none",marginTop:space,width: size, height: size, marginLeft: "auto", marginRight: "auto", paddingLeft:"auto",paddingRight:"auto"}}>{props.children}</div>
  )};
const App = () => {
return(
  <div style={{backgroundColor:"#000100",backgroundImage: "src/Components/00 - stars.svg",height:"100%", width:"100%"}}>
    <div style={{height:"40px;"}}>SPACE</div>
    <Planet size="40px" space="40px"><Mercury /></Planet>
    <Planet size="90px" space="70px"><Venus /></Planet>
    <Planet size="100px" space="100px"><Earth /></Planet>
    <Planet size="50px" space="150px"><Mars /></Planet>
    <Planet size="1120px" space="520px"><Jupiter /></Planet>
    <Planet size="940px" space="960px"><Saturn /></Planet>
    <Planet size="400px" space="1920px"><Uranus /></Planet>
    <Planet size="390px" space="3000px"><Neptune /></Planet>
  </div>
    )
  };

export default App;
