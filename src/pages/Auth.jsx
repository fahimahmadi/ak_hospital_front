import React, { useContext, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { context } from '../context/ContextProvider';
import logo from "../assets/logo.svg";

function Auth() {
  const [fd, setFD] = useState({email: "fahim@gmail.com", password:"fahim123!"});
  const {dispatch} = useContext(context)
  const navigate = useNavigate();
  const errRef = useRef(null);

  const handleChange = (e) => {
    setFD({...fd, [e.target.name]: e.target.value});
  }

  const handle_submit = async(event) => {
    event.preventDefault();
    
    try {
          if(fd.email && fd.password){
              // alert('in future this will send to backend');
              const {data} = await axios('http://localhost:80/ak_hospital_be/api/user/login',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                data: fd
              })

              if(data.user){
                // store in context
                dispatch({type: 'LOGIN_SUCCESS', token: data.token, user: data.user});
                navigate('/admin');
              }else{
                if (error.response.status === 401) {
                  errRef.current.innerText =
                    "آدرس ایمیل یا پسورد وارده شده درست نمیباشد. دوباره تلاش کنید.";
                }
              }
            }

        } catch (error) {
            if(error.response.status === 401){
                errRef.current.innerText =
                  "آدرس ایمیل یا پسورد وارده شده درست نمیباشد. دوباره تلاش کنید.";
            }
        }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white md:bg-gray-100">
      <div className="bg-white p-8 rounded-lg md:shadow-lg max-w-md w-full">
        {/* logo */}
        <div className="text-gray-600 flex flex-row-reverse items-center gap-x-2 mb-16 justify-center">
          <img src={logo} alt="site logo" className="h-10" />
          <div className="flex flex-col ">
            <span className="text-md text-gray-600">
              شفاخانه تخصصی افغان کاوش
            </span>
            <span className="text-md text-gray-400 font-light ">
              Afghan Kawesh Hospital
            </span>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-center">
          ورود به حساب کاربری
        </h2>
        <form onSubmit={handle_submit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              ایمیل
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-indigo-500"
              style={{ direction: "ltr" }}
              value={fd.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              پسورد
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-indigo-500"
              style={{ direction: "ltr" }}
              value={fd.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white 
            py-2 rounded-lg hover:bg-indigo-600 transition-colors duration-300"
          >
            ورود
          </button>
        </form>

        <ul className="mt-10 text-sm">
          <li className="text-red-400 " ref={errRef}></li>
        </ul>
      </div>
    </div>
  );
}

export default Auth