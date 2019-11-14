import React, { Component } from "react";
import axios from 'axios';

// Display for student data
const Student = props => (
    <div>
        <img className="student-image" src={props.student.image} alt="Student picture" />
        <div className="student-first-name">First Name: {props.student.firstName}</div>
        <div className="student-last-name">Last Name: {props.student.lastName}</div>
        <div className="student-age">Age: {props.student.age}</div>
        <div className="student-schoolGrade">Grade: {props.student.schoolGrade}</div>
        <div className="student-gpa">GPA: {props.student.gpa}</div>
    </div>
)

export default class StudentInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: []
        }
    }
    
    componentDidMount() {
        axios.get('http://localhost:3001/students/')
            .then(response => {
                this.setState({ students: response.data })
                console.log('Hello World!')
            })
            .catch((error) => {
                console.log(error);
            });
    }

    getAllStudents = () => {
        axios.get("/students/")
            .then(response => {
                this.setState({ students: response.data })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    deleteStudent = (id) => {
        axios.delete("/students/delete/"+id)
            .then(response => { console.log(response.data);})
        
        this.setState({
            students: this.state.students.filter(el => el._id !== id)
        });
    }

    listAllStudents = () => {
        return this.state.students.map(currentStudent => {
            return <Student student={currentStudent} deleteStudent={this.deleteStudent} key={currentStudent._id}/>
        });
    }

    render() {
        return (
            <div className="studentInformation">
                <p>Student Information</p>
                { this.listAllStudents() }
            </div>
        )
    }
}