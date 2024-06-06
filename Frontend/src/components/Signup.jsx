import React from 'react';
import {Link} from 'react-router-dom'
import Login from './Login';
import { useForm } from "react-hook-form"


const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data);
  // console.log(watch("example"));

  return (
    <>
     <div className='flex h-screen items-center justify-center  '>
        
    {/* You can open the modal using document.getElementById('ID').showModal() method */}
     <div className="w-[600px]">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    
    <h3 className="font-bold text-lg">Signup</h3>
    <div className='mt-4 space-y-2'>
     <span>Name</span>
     <br />
     <input {...register("name", { required: true })} type="text" placeholder='Enter Your Name' className='w-full md:w-80 px-3 py-1 border rounded-md  outline-none' />
     <br />
     {<errors className="name"></errors> && <span className='text-sm text-red-500'>This field is required</span>}
   
    </div>
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
        <p className='text-xl'>Have Account?
     <button onClick={()=>document.getElementById("my_modal_3").showModal()}  className='text-blue-500 cursor-pointer underline' >  Login</button>
    
     </p>
     <Login/>
    </div>
    </form>
  </div>
</div>
    
    </div>  
       
    </>
  )
}

export default Signup