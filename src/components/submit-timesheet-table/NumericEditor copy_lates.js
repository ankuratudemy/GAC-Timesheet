import React, { Component } from 'react';
export default class  extends Component {
    constructor(props) {
        super(props);
    
        this.textInput = React.createRef();
      }

      onChange = (event) => {
       
        if (!inRange(event)) {
            console.log("On Chnage  event#",event.target.value)
            
            event.preventDefault();
            event.stopPropagation();
            //event.nat.stopPropagation();
            return false
  
        }
        
        function inRange(event) {
            //console.log(event)
            let inRan = ((parseInt(event.target.value) <=8) && (parseInt(event.target.value) >=0))
            console.log("InRange# ",inRan)
            return inRan
        }
        function isNumeric(event) {
            let iNum = /\d/.test(event.target.value);
            console.log("isNum#",iNum)
        }


    }

    onKeyPress = (event) => {

        console.log("On Key Press  event#",event.key)
        if (!inRange(event)) {
          //  console.log(event.nativeEvent)
            event.preventDefault();
        }
        
        function inRange(event) {
            //console.log(event)
            return ((parseInt(event.key) <=8) && (parseInt(event.key) >=0))
        }
        function isNumeric(event) {
            return /\d/.test(event.key);
        }


    }

    onKeyUp = (event) => {
       
        if (!inRange(event)) {
            console.log("On Key Up  event#",event.target.value)
            
            event.preventDefault();
            event.stopPropagation();
            //event.nat.stopPropagation();
            return false
  
        }
        
        function inRange(event) {
            //console.log(event)
            let inRan = ((parseInt(event.target.value) <=8) && (parseInt(event.target.value) >=0))
            console.log("InRange# ",inRan)
            return inRan
        }
        function isNumeric(event) {
            let iNum = /\d/.test(event.target.value);
            console.log("isNum#",iNum)
        }


    }

    onKeyDown = (event) => {
        

        if (event.keyCode === 39 || event.keyCode === 37 ){
         

            event.stopPropagation();
        }

        if(event.key === "Enter" || event.key ==="Tab" ){
           //console.log("Props on enter",this.props)
            
        }
        
    }
    getGui() {
        
        return this.textInput;
    }

    afterGuiAttached() {
        if (this.textInput) this.textInput.current.focus();
    };

    getValue() {
        return this.textInput.current.value;
    };



     componentDidMount() {
        
    //     // this.textInput.current.addEventListener('keydown', this.onKeyDown);
         // this.textInput.current.addEventListener('keypress', this.onKeyPress);
         //  this.textInput.current.addEventListener('keyup', this.onKeyUp);
        //    this.textInput.current.addEventListener('keyup', ()=>{
        //       console.log("Onkey up reached")
        //   });
          this.textInput.current.addEventListener('change', this.onChange);
    }

    render() {
        return (
            <input onChange={this.onChange}   ref={this.textInput} defaultValue={this.props.value}/>
        );
    }
}