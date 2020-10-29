
import React from 'react'
import {SubmitTimesheetButton} from './button.styles'
class BtnCellRenderer extends React.Component {
    constructor(props) {
      super(props);
      this.btnClickedHandler = this.btnClickedHandler.bind(this);
      
    }
    btnClickedHandler() {
     this.props.clicked(this.props.data);
    }
    render() {
      return (
        <SubmitTimesheetButton type='submit' onClick={this.btnClickedHandler}> Approve </SubmitTimesheetButton>

        
      )
    }
  }

  export default BtnCellRenderer;