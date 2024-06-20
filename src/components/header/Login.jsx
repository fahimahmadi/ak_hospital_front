import React, { useContext, useState } from 'react'
import { context } from '../../context/ContextProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function Login({classes}) {
    const [fd, setFD] = useState({email:'fahim@gmail.com', password:'fahim123!'});
    const {dispatch} = useContext(context);
    const navigate = useNavigate();

    const changeHandler = (event) => {
        setFD({...fd, [event.target.name]: event.target.value});
    }

    const submitHandler = async(event) => {
        event.preventDefault();
        try {
          if(fd.email && fd.password){
              // alert('in future this will send to backend');
              const {data} = await axios('http://localhost:80/ak_hospital_be/api/user/login',{
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                data: fd
              })

              if(data.user){
                // store in context
                dispatch({type: 'LOGIN_SUCCESS', token: data.token, user: data.user});
                navigate('/admin');
              }
            }

        } catch (error) {
          alert(error.message);
        }
    }
  return (
    <form className={classes} onSubmit={submitHandler}>
      <input
        type="email"
        name="email"
        id="email"
        value={fd.email}
        onChange={changeHandler}
        placeholder="ایمیل"
        className="border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent p-2 w-full lg:w-1/5"
        style={{ minWidth: "220px", maxHeight: "30px" }}
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="پسورد"
        className="border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent p-2 w-full lg:w-1/5"
        style={{ minWidth: "220px", maxHeight: "30px" }}
        value={fd.password}
        onChange={changeHandler}
      />
      <input
        type="submit"
        value="ورود"
        style={{ minWidth: "120px", maxHeight: '30px' }}
        className="w-full md:w-2/12 lg:w-1/12 bg-green-600 hover:bg-green-500 text-white font-bold py-1 px-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      />
    </form>
  );
}

export default Login