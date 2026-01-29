import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Register = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');


    const navigate = useNavigate();
    const isLoggedIn = () => localStorage.getItem('user') !== null;

    const register = async () => {
        const response = await axios({
            method: 'post',
            url: 'https://6953a084a319a928023c1129.mockapi.io/users',
            data: {
              
                email: email,
                password: password,
               
            }
        });
        console.log(response.data);
        if (response.status == 201) {
            alert('User registered successfully');
            navigate('/login')
           
        } else {
            alert('User not registered');
        }
    } 
      useEffect(() => {
            if (isLoggedIn()) {
                navigate('/profile')
            
            }
        }, [isLoggedIn]);

    return (
        <div className="register">
            <h1 className="text-center pt-3 text-light">Авторизация</h1>
            <p className="text-center text-light pb-3">Войти в свой аккаунт</p>
       
            <input type="email" placeholder="Email" className="form-control" onChange={(e)=>setEmail(e.target.value)} /> <br />
            <input type="password" placeholder="Password" className="form-control" onChange={(e)=>setPassword(e.target.value)} /> <br />
          <div className="text-center mt-3">
          <button onClick={register} className="btn btn-success col-5 ">Register</button>
          </div>
           
        </div>
    )
}
export default Register;