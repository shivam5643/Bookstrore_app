import React, { useEffect, useState }  from 'react'
// import list from '../../public/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';
import axios from 'axios';

const FreeBook = () => {
  const [book,setBook]=useState([]);

  useEffect(()=>{
    const getBook=async ()=>{
      try {
        const res= await axios.get('http://localhost:4001/book');
       const data=res.data.filter((data)=>data.category==="Free")
        console.log(data);
        setBook(data);
      } catch (error) {
         console.log("Error: ",error);
      }
    }
    getBook();
  },[])
  // const filterData=list.filter((data)=>data.category==="Free");
  
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  
  return (
  
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
       <div>
       <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis laborum reprehenderit dolores omnis id quas earum corporis? Ut consequatur eaque ab quisquam ea iure assumenda sit sint architecto labore. Deleniti.</p>
        
       </div>
    
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <Slider {...settings} >
        {
          book.map((item)=>(
            <Card item={item} key={item.id}/>
          ))
        }
      </Slider>
    </div>
    </div>
    </>
  )
}

export default FreeBook