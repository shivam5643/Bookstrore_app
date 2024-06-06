import React from 'react';
import list from '../../public/list.json'
import Card from './Card'
import {Link} from 'react-router-dom'

const Course = () => {
  return (
    <>
    <div className='max-w-screen-2xl container  mx-auto md:px-20 px-4 '>
      <div className='flex flex-col items-center justify-center mt-28'>
        <h3 className='md:text-4xl text-2xl '>We're delighted to have you  <span className='text-pink-500'>Here!: )</span>  </h3>
       <p className='mt-12'>
       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
       </p>
       <Link to='/'>
       <button href="/" className='rounded-md text-white hover:bg-pink-700 mt-6 duration-300 border bg-pink-500 px-4 py-2 '>Back</button>

       </Link>
      </div>
      <div className='grid md:grid-cols-4 mt-12 grid-cols-1'>
        {
          list.map((item)=>(
            <Card  key={item.index} item={item} />
          ))
        }
      </div>

    </div>
    </>
  )
}

export default Course