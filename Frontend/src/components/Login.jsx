import React from 'react' 
import {Link} from 'react-router-dom'
import { useForm } from "react-hook-form"

const Login = () => {
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data);
  console.log(watch("example"));
  return (
    <div>
    {/* You can open the modal using document.getElementById('ID').showModal() method */}
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    
    <h3 className="font-bold text-lg">Login</h3>
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
        <p>Not registerd? <Link to={"/signup"}  className='text-blue-500 cursor-pointer underline' >SignUp</Link></p>
    </div>
    </form>
  </div>
</dialog>
    
    </div>
  )
}

export default Login