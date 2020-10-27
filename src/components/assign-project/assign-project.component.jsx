import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Route, withRouter} from 'react-router-dom';
import Dropdown from '../dropdown/dropdown.component';
import {AssignProjectContainer,DropdownBarContainer,CapturedvaluesContainer} from './assign-project.styles'
import {makeNoParamGetCall} from '../../firebase/user.utils'
import StartDate from '../start-date-picker/start-date-picker.component'
import moment from 'moment'
class AssignProject extends Component {
    constructor() {
        super();
        this.state = {
            employeeList: [],
            employee: null,
            projectLists: [],
            project: null,
            resourceCapacity:[],
            startDate: null,
            endDate: null,
            resourceCapacity: ["25%","50%","75%","100%"],
            capacity: null
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

                return project.ProjectName
            });

            console.log("Project List",projectList);
            this.setState({
                projectLists: projectList,
          
        });
        
    }


    getEmployeeData();
    getProjectList();
}

    handleInputChange = (e) => {

        let name,value;
        console.log(e.target.id.split("_")[0])
        if(e.target.id.split("_")[0] === "Resource List" )
        {
            //  console.log(e.target.id.split("_"))
            //  name = "employee"
            //  value = e.target.innerText
            //  console.log("Employee and value", value + ' ' + name)
            this.setState({
                employee: e.target.innerText
            })

        }
        if(e.target.id.split("_")[0] === "Project List" )
        {
            //  console.log(e.target.id.split("_"))
            //  name = "employee"
            //  value = e.target.innerText
            //  console.log("Employee and value", value + ' ' + name)
            this.setState({
                project: e.target.innerText
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
        
        this.setState({
            startDate: date
        })
    }

    handleEndDatePick = (date) => {
        
        this.setState({
            endDate: date
        })
    }


    render() {
        return (
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




{/* <Dropdown
    name="SecondDropdown"
    selectableData={ajaxResultSecond}
    handleInputChange={this.handleInputChange}
/>
<Dropdown
    name="ThirdDropdown"
    selectableData={ajaxResultThird}
    handleInputChange={this.handleInputChange}
/>
<Dropdown
    name="FourthDropdown"
    selectableData={ajaxResultFourth}
    handleInputChange={this.handleInputChange}
/> */}


            </DropdownBarContainer> 
            <CapturedvaluesContainer>
            <span style={{marginRight: '20px', fontSize: '15px', fontWeight: 'bold',borderRight: 'solid', paddingRight: '5px'}}>{this.state.project ? 'Project: '+ this.state.project : null}</span>
            <span style={{marginRight: '2px', fontSize: '15px', fontWeight: 'bold',borderRight: 'solid', paddingRight: '5px'}}>{this.state.employee ? 'Employee: '+ this.state.employee : null} </span>
            <span style={{marginRight: '2px', fontSize: '15px', fontWeight: 'bold',borderRight: 'solid', paddingRight: '5px'}}>{this.state.capacity ? 'Capacity: '+ this.state.capacity : null} </span>
            <span style={{marginRight: '2px', fontSize: '15px', fontWeight: 'bold',borderRight: 'solid', paddingRight: '5px'}}>{this.state.startDate ? 'Start Date: '+ moment(this.state.startDate).format('MMM DD YYYY') : null} </span>
            <span style={{marginRight: '2px', fontSize: '15px', fontWeight: 'bold',borderRight: 'solid', paddingRight: '5px'}}>{this.state.endDate ? 'End Date: '+ moment(this.state.endDate).format('MMM DD YYYY') : null} </span>


            </CapturedvaluesContainer>
            </AssignProjectContainer> 
        );
    }
}

export default AssignProject;