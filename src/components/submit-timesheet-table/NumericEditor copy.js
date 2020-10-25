import { AgInputRange } from 'ag-grid-community';
import React, { Component } from 'react';

export class NumericCellEditor extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        
    }

   onKeyPress = (event) => {
        
        if (!isNumeric(event.nativeEvent)) {
          //  console.log(event.nativeEvent)
            event.preventDefault();
        }
        
        
        function isNumeric(event) {
            return /\d/.test(event.key);
        }


    }

    onKeyDown = (event) => {
        console.log(this.textInput.current)

        if (event.keyCode === 39 || event.keyCode === 37 ){
         

            event.stopPropagation();
        }

        if(event.key === "Enter" || event.key ==="Tab" ){
           console.log(this.textInput)
            
        }
        function inRange(event) {

            return ((parseInt(event.key) <=8) && (parseInt(event.key) >=0))
        }
    }

    afterGuiAttached= () => {
        if (this.textInput) this.textInput.current.focus();
    };

    getValue =()=> {
        
        return this.textInput.current.value;
    };

    componentDidMount() {
        console.log(this)
        this.textInput.current.addEventListener('keydown', this.onKeyDown);
    }

    render() {
        return (
            <input onKeyPress={this.onKeyPress} onKeyDown={this.onKeyDown} ref={this.textInput} defaultValue={this.props.value}/>
        );
    }
}