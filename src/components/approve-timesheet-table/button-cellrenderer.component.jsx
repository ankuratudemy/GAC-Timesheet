
import React from 'react'
import {ApproveTimesheetButton} from './button.styles'
import {makePostCall} from '../../firebase/user.utils'

class BtnCellRenderer extends React.Component {
    constructor(props) {
      super(props);
      this.btnClickedHandler = this.btnClickedHandler.bind(this);
       this.state ={
         data: props.data
       }
    }
    btnClickedHandler() {
     //this.props.clicked(this.props.data);
     try {
      let dataToSubmit =  {
                  "SvsId": this.props.data.SvsId,
                  "WeekNumber": this.props.data.WeekNumber,
                  "Status": "approved",
                  "ProjectName": this.props.data.ProjectName

                }
      
              

              const onSuccess = (data) => {

                console.log(data)
                if(data === "TimeSheet Approved"){
                  console.log("Changing status")
                  let newData = this.state.data
                  newData.Status = "Approved"
                  this.setState({
                    data: newData
                  })
                  console.log("Statu chnaged to",this.state.data.Status)

                  }
                }
               
             
          
              const onFailure = error => {
                console.log(error);
               
              };
              
                  makePostCall('/gac/approveTimeSheet', dataToSubmit)
                  .then(onSuccess)
                  .catch(onFailure);
                } catch (error) {
                  console.log(error);
                }   

    }
    render() {
      console.log(this.state.data)
      return (
        <ApproveTimesheetButton disabled={this.state.data.Status === "Approved" } type='submit' onClick={this.btnClickedHandler}> {this.state.data.Status === "submit" ? 'Approve': 'Approved'} </ApproveTimesheetButton>

        
      )
    }
  }

  export default BtnCellRenderer;