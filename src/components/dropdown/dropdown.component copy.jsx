import React, { Component } from 'react';

class SelectOption extends Component {
    render() {
        return (
            <option  value={this.props.dataItem.key}>{this.props.dataItem}</option>
        )
    }
}

class Dropdown extends Component {

    render() {

        let options = [];
       
        console.log(this.props.selectableData)
        if (this.props.selectableData) {
            const selectableData = this.props.selectableData;
            
            console.log("Selectable data",selectableData)

            options = selectableData.map((dataItem) =>
                <SelectOption key={'option_' + dataItem} dataItem={dataItem} />
            );
            console.log(options)
        }

        return (
            <div style={{margin: "auto"}}>
                <select style={{margin: "10px", backgroundColor: '#006089', color: 'white', fontSize: "20px", fontFamily: 'Open Sans Condensed', borderWidth: '0px'}} onChange={this.props.handleInputChange} name={this.props.name} >
                   
                    {options}

                </select>
            </div>
        )
    }
}

export default Dropdown;