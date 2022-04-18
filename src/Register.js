// import React, { useState} from 'react';
// import CrudData from './Cruddata';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';



// export default function Register() {
//     const navigate = useNavigate();
//     const [data, setData] = useState({
//         student: [],
//         name: '',
//         class: ''
//     });
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         console.log(data);
//         var response = await axios.post(
//             'https://62136ddcf43692c9c604517b.mockapi.io/studentteacherdata',{
//                 name: data.name,
//                 class: data.class               
//             });
//             var user = [...data.student];
//         user.push(response.data);
//         setData({ user });
//         console.log(user);
//             console.log(data.student.name);
            
//     }
//     return (
//         <div >
//              <br />&nbsp;<button onClick={() => navigate(-1)}> Back</button>&nbsp;
//             <div className="table">
//                 <CrudData />&nbsp;
//             </div>

//                 <p>Register student</p>

//                 <form onSubmit={handleSubmit}>
//                     <div>
//                         <label>Name : </label>
//                         <input 
//                         type="text" 
//                         name="name" 
//                         value={data.name} 
//                         onChange={e => setData({ ...data, name: e.target.value})} /><br /><br />
//                         <label>Class : </label>
//                         <input type="text" name="class" value={data.class} 
//                         onChange={e => setData({...data, class : e.target.value})}/><br /><br />
                        
//                         <button type="submit" >Update</button><br /><br />
//                     </div>
//                 </form>

//         </div>
//     )
// }


import React, { useState } from 'react';
import CrudData from './Cruddata';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



export default function Register() {
    const navigate = useNavigate();

    const [name, setName] = useState('')
    // const [student, setStudent] = useState([]);
    const [studentClass, setStudentClass] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        var response = await axios.post(
            'https://62136ddcf43692c9c604517b.mockapi.io/studentteacherdata', {
            name: name,
            class: studentClass
        });
        console.log(response.data)


    }

    return (
        <div >
            <br />&nbsp;<button onClick={() => navigate(-1)}> Back</button>&nbsp;
            <div className="table">
            <div>
                    <CrudData />&nbsp;
                </div>

                <form onSubmit={handleSubmit}>
                    <div>
                              <p>Register student</p>
                        <label>Name : </label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={e => setName(e.target.value)} /><br /><br />

                        <label>Class : </label>
                        <input
                            type="text"
                            name="class"
                            value={studentClass}
                            onChange={e => setStudentClass(e.target.value)} /><br /><br />

                        <button type="submit" >Update</button><br /><br />

                    </div>
                </form>

                
            </div>
        </div>
    )
}

