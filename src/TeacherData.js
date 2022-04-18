import React from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

class TeacherData extends React.Component {
    constructor() {
        super();
        this.state = {
            teacher: []
        };
    }
    async componentDidMount() {
        var response = await axios.get(
            'https://62136ddcf43692c9c604517b.mockapi.io/teacherdata'
        );
        await this.setState({ teacher: response.data });
        console.log(response.data);
    }
    render() {

        return (
            <>
                <h2>Teacher's Details</h2>
                <div className="table">

                    <div>

                        <table border={1}>
                            <thead>
                                <tr>
                                    <td>Id</td>
                                    <td>Name</td>
                                    <td>Class</td>
                                    <td>Subject</td>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.teacher.map((data) => (
                                    <tr key={data.id}>
                                        <td> {data.id} </td>
                                        <td> {data.name} </td>
                                        <td> {data.class} </td>
                                        <td> {data.subject} </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="table1">

                        &nbsp;<br /><Button variant="contained" component={Link} to="/registerteacher">Register Teacher</Button> &nbsp;

                    </div>
                </div>
            </>
        )
    }
}

export default TeacherData;