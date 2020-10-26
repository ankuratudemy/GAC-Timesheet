import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Route, withRouter} from 'react-router-dom';
import Dropdown from '../dropdown/dropdown.component';
import {AssignProjectContainer,DropdownBarContainer,CapturedvaluesContainer} from './assign-project.styles'
import {makeNoParamGetCall} from '../../firebase/user.utils'
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
            endDate: null
        };
    }

    componentDidMount() {
        let employeeList = [];
        let projectList =[];
    const getEmployeeData =async ()=>{
        let result = await makeNoParamGetCall('/gac/employeeLists')

                employeeList = result.lstEmployees.map((employee) => {

                return employee.SvsId
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

        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

        console.log(this.state)
    }


    render() {
        return (
           <AssignProjectContainer>
            <DropdownBarContainer>
                    

<Dropdown
    name="employee"
    selectableData={this.state.employeeLists}
    handleInputChange={this.handleInputChange}
/>
<Dropdown
    name="project"
    selectableData={this.state.projectLists}
    handleInputChange={this.handleInputChange}
/>
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
            </AssignProjectContainer> 
        );
    }
}

export default AssignProject;