import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Route, withRouter} from 'react-router-dom';
import Dropdown from '../dropdown/dropdown.component';
import {AssignProjectContainer,DropdownBarContainer,CapturedvaluesContainer,AssignProjectButton} from './assign-project.styles'
import {makeNoParamGetCall} from '../../firebase/user.utils'
import StartDate from '../start-date-picker/start-date-picker.component'
import moment from 'moment'
import Alert from 'react-bootstrap/Alert'
import {makePostCall} from '../../firebase/user.utils'

import WithSpinner from '../with-spinner/with-spinner.component'

const AssignProjectContainerWithSpinner = WithSpinner(AssignProjectContainer);
//const CapturedvaluesContainerWithSpinner = WithSpinner(CapturedvaluesContainer);

class AssignProject extends Component {
    constructor() {
        super();
        this.state = {
            employeeList: [],
            employee: null,
            employeeid: null,
            projectLists: [],
            project: null,
            projectid: null,
            resourceCapacity:[],
            startDate: null,
            endDate: null,
            resourceCapacity: ["25%","50%","75%","100%"],
            capacity: null,
            showError: false,
            errorMessage: '',
            successMessage: '',
            showSuccess: false,
            loading: true,
            submitLoading: false
        };
    }

    componentDidMount() {
       
        let employeeList = [];
        let projectList =[];
        
    const getEmployeeData =async ()=>{
        let result = await makeNoParamGetCall('/gac/employeeLists')

                employeeList = result.lstEmployees.map((employee) => {

                // return employee.SvsId
                return employee
            });

            console.log("EmployeeList",employeeList);
            this.setState({
                employeeLists: employeeList,
          
        });
        
    }

    const getProjectList =async ()=>{
        let result = await makeNoParamGetCall('/gac/projectLists')

                projectList = result.lstGacproject.map((project) => {

                //return project.ProjectName
                return project
            });

            console.log("Project List",projectList);
            this.setState({
                projectLists: projectList,
          
        });
        this.setState({loading: false});
        
    }


    getEmployeeData();
    getProjectList();
    
}

    handleInputChange = (e) => {

        let name,value;
        console.log(e.target.id.split("_")[0])
        if(e.target.id.split("_")[0] === "Resource List" )
        {
            
            //  name = "employee"
            //  value = e.target.innerText
            //  console.log("Employee and value", value + ' ' + name)
            this.setState({
                employee: e.target.innerText,
                employeeid: e.target.getAttribute('data-key')
            })

        }
        if(e.target.id.split("_")[0] === "Project List" )
        {
            console.log("Project Selected",e.target.getAttribute('data-key'))
            //  console.log(e.target.id.split("_"))
            //  name = "employee"
            //  value = e.target.innerText
            //  console.log("Employee and value", value + ' ' + name)
            this.setState({
                project: e.target.innerText,
                projectid: e.target.getAttribute('data-key')
            })

        }
        if(e.target.id.split("_")[0] === "Resource Capacity" )
        {

            this.setState({
                capacity: e.target.innerText
            })

        }
  

        console.log(this.state.project)
    }

    handleStartDatePick = (date) => {

        if(this.state.endDate && date >= this.state.endDate){
            console.log("11")
            this.setState({showError : true, errorMessage: 'End Date cannot be before Start Date !'})
            
        }
        else{
        this.setState({
            startDate: date
        })
    }
    }

    handleEndDatePick = (date) => {

        if(this.state.startDate && date <= this.state.startDate){
            console.log("22")
            this.setState({showError : true, errorMessage: 'End Date cannot be before Start Date !'})
            
        }
        else{
        this.setState({
            endDate: date
        })
    }
    }
    submitAssignProject = (event) => {
        this.setState({submitLoading: true})
        event.preventDefault();
        console.log("Submitted values")

        //gac/assignProjects 

        // {
        //     "SvsId":"testac",
        //     "ProjectId":"465874",
        //     "Domain":"IIB DEVELOPMENT",
        //     "StartDate":"2020-03-05 00:00:00.000",
        //     "EndDate":"2020-11-05 00:00:00.000",
        //     "BandWidth":"50"
        // }
        try {
        let dataToSubmit =  {
                    "SvsId": this.state.employeeid,
                    "ProjectId": this.state.projectid,
                    "Domain": this.state.project.split("(")[0],
                    "StartDate":moment(this.state.startDate).format('YYYY-MM-DD'),
                    "EndDate":moment(this.state.endDate).format('YYYY-MM-DD'),
                    "BandWidth":this.state.capacity.split("%")[0]
                }
        
                
                console.log("Assign project# ",dataToSubmit)
                const onSuccess = (data) => {

                  console.log(data)
                  if(data === "Project Assigned Successfully")
                  this.setState({showSuccess: true, successMessage: "Project Assigned Successfully"})
            
                  if(data.error){
                  this.setState({showError: true})
                  this.setState({errorMessage: "Failed to assign project!"})
                  }
                  
                  this.setState({submitLoading: false,capacity:null,project: null,startDate:null,endDate: null,employee:null})
                };
            
                const onFailure = error => {
                  console.log(error);
                  this.setState({submitLoading: false,capacity:null,project: null,startDate:null,endDate: null,employee:null})
                 
                  //this.setState({errors: error.response.data, isLoading: false});
                };
                
                    makePostCall('/gac/assignProjects', dataToSubmit)
                    .then(onSuccess)
                    .catch(onFailure);
                  } catch (error) {
                    console.log(error);
                  }        
        
        

    }

    render() {
        return (
         this.state.loading || this.state.submitLoading ? (<AssignProjectContainerWithSpinner isLoading= {this.state.loading} />)
                :(
           <AssignProjectContainer>
            <DropdownBarContainer>
                    
<Dropdown
    name="Project List"
    data={this.state.projectLists}
    handleInputChange={this.handleInputChange}
/>
<Dropdown
    name="Resource List"
    data={this.state.employeeLists}
    handleInputChange={this.handleInputChange}
/>
<Dropdown
    name="Resource Capacity"
    data={this.state.resourceCapacity}
    handleInputChange={this.handleInputChange}
/>

<StartDate handleDatePick={this.handleStartDatePick} name="Start Date"/>
<StartDate handleDatePick={this.handleEndDatePick} name="End Date"/>



            </DropdownBarContainer> 
            <div>
            {this.state.showError ? (<Alert variant="danger"  show={this.state.showError} onClose={() =>{this.setState({showError: false, errorMessage:''})}} dismissible>
               <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
               {this.state.errorMessage}
          </p>
             </Alert>):(null)}


             {this.state.showSuccess ? (<Alert variant="success"  show={this.state.showSuccess} onClose={() =>{this.setState({showSuccess: false, successMessage:''})}} dismissible>
               <Alert.Heading>Success!!</Alert.Heading>
          <p>
               {this.state.successMessage}
          </p>
             </Alert>):(null)}

             </div>


            <CapturedvaluesContainer>
            <span style={{marginRight: '2px', marginLeft: '2px', fontSize: '15px', fontWeight: 'bold',borderRight: 'solid', paddingRight: '5px'}}>{this.state.project ? 'Project: '+ this.state.project : null}</span>
            <span style={{marginRight: '2px', marginLeft: '2px', fontSize: '15px', fontWeight: 'bold',borderRight: 'solid', paddingRight: '5px'}}>{this.state.employee ? 'Employee: '+ this.state.employee : null} </span>
            <span style={{marginRight: '2px', marginLeft: '2px', fontSize: '15px', fontWeight: 'bold',borderRight: 'solid', paddingRight: '5px'}}>{this.state.capacity ? 'Capacity: '+ this.state.capacity : null} </span>
            <span style={{marginRight: '2px',  marginLeft: '2px',fontSize: '15px', fontWeight: 'bold',borderRight: 'solid', paddingRight: '5px'}}>{this.state.startDate ? 'Start Date: '+ moment(this.state.startDate).format('MMM DD YYYY') : null} </span>
            <span style={{marginRight: '2px',  marginLeft: '2px',fontSize: '15px', fontWeight: 'bold',borderRight: 'solid', paddingRight: '5px'}}>{this.state.endDate ? 'End Date: '+ moment(this.state.endDate).format('MMM DD YYYY') : null} </span>
            <AssignProjectButton  disabled={!this.state.project || !this.state.startDate || !this.state.employee || !this.state.endDate || !this.state.capacity} type='submit' onClick={(event)=>this.submitAssignProject(event)}> Submit </AssignProjectButton>


            </CapturedvaluesContainer>
            </AssignProjectContainer> 
        )
        )
}
}

export default AssignProject;