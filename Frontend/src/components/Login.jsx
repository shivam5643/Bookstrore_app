import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import { toast } from 'react-hot-toast'

function Login () {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const userInfo = {
      email: data.email,
      password: data.password
    }
    await axios.post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        if (res.data) {
         toast.success('Loggedin successfully!');
         document.getElementById("my_modal_3").close();
         setTimeout(() => {
          window.location.reload();
          localStorage.setItem("Users", JSON.stringify(res.data.user));

         }, 1000);
         
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
          setTimeout(() => {}, 3000);
        }
      })
  }
  console.log(watch("example"));

  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <div className="modal-header">
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3" onClick={() => document.getElementById("my_modal_3").close()}>✕</Link>
            <h3 className="font-bold text-lg">Login</h3>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <div className='mt-4 space-y-2'>
              <span>Email</span>
              <br />
              <input {...register("email", { required: true })} type="email" placeholder='Enter Your Email' className='w-full md:w-80 px-3 py-1 border rounded-md  outline-none' />
              <br />
              {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            <div className='mt-4 space-y-2'>
              <span>Password</span>
              <br />
              <input {...register("password", { required: true })} type="password" placeholder='Enter Your Password' className='w-full md:w-80 px-3 py-1 border rounded-md  outline-none' />
              <br />
              {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            <div className='flex justify-around mt-4'>
              <button className='bg-pink-500 hover:bg-pink-700 rounded-md text-white px-2 py-1 '>Login</button>
              <p>Not registered? <Link to={"/signup"} className='text-blue-500 cursor-pointer underline' >SignUp</Link></p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  )
}

export default Login
