import React from 'react';
import './App.css';
import Tempholder from "./components/Tempholder/Tempholder.js"

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id:["celcius",
    "fahreinheight"],
      tempInCelcius:0,
      tempInFareinheight:0,
    }
    
  }
  convertTofar(value){
    console.log(value);
    
    this.c = value;
    this.f = 1.8*this.c +32;
    this.setState({tempInCelcius:value,tempInFareinheight:this.f});
    
    // this.setState({});


  }
  convertTocel(value){
    this.setState({tempInFareinheight:value});
    this.f = value;
    this.c = (this.f-32)*0.55;
    this.setState({tempInCelcius:this.c});
      
  }
  convertTemp(e){
    //formula: f=c*1.8 +32
    //c (f- 32)*0.55
    console.log(e.target.value);
    
    
    if(e.target.id === "celcius"){
      this.convertTofar(e.target.value);
    }
    else if(e.target.id === "fahreinheight"){
      this.convertTocel(e.target.value);
    }
    console.log(this.state);
    console.log(e.target.id);
    
    
  }
 
  render(){
    return (
      <div className="App">
        <Tempholder id = {this.state.id[0]} value = {this.state.tempInCelcius} unit = "celcius" change = {(e)=> this.convertTemp(e)}/>
        <Tempholder id = {this.state.id[1]} value = {this.state.tempInFareinheight} unit = "fahrenheit" change = {(e)=> this.convertTemp(e)}/>
      </div>
    );
  }
  
  }

export default App;
