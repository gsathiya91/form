import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';



// export default function CrudData() {

//     const [data, setData] = useState({ student: [] });

//     useEffect(() => {

//         const getData = async () => {
//             var response = await axios.get(
//                 'https://62136ddcf43692c9c604517b.mockapi.io/studentteacherdata'
//             );            
//             setData({ student: response.data });
//             // console.log(response.data)
//         };
//         getData();
//     }, []);

class CrudData extends React.Component {
    constructor() {
        super();
        this.state = {
            student : []
        };
    }
    async componentDidMount() {
        var response = await axios.get(
            'https://62136ddcf43692c9c604517b.mockapi.io/studentteacherdata'
        );
        await this.setState({ student: response.data});
        console.log(response.data);
    }
    render() {
    return (
        <>
        <div>
            <h1 className="student">Student's Details</h1>
        </div>
        
        <div className="table">
            <div>
        
           
            <table border={1}>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Class</td>
                        <td>Teacher</td>
                        <td>Actions</td>
                    </tr>
                </thead>

                <tbody>
                    {this.state.student.map((data) => (
                        <tr key={data.id}>
                            <td> {data.id} </td>
                            <td> {data.name} </td>
                            <td> {data.class} </td>
                            <td> {data.teacher} </td>
                        </tr>
                    ))}
                </tbody>
                
            </table>
            </div>
           
        </div>
        </>
    )
}

}

export default CrudData;