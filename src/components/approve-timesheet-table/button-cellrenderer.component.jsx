
import React from 'react'
import {ApproveTimesheetButton} from './button.styles'
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
        <ApproveTimesheetButton type='submit' onClick={this.btnClickedHandler}> Approve </ApproveTimesheetButton>

        
      )
    }
  }

  export default BtnCellRenderer;