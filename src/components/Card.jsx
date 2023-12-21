import React from 'react'


const Card = ({course}) => {
  return (
    <div className='z-10 bg-white drop-shadow-md overflow-hidden rounded-2xl mr-2  my-4'>
        <div className='flex items-center justify-center'>
        <img src={course.linkImg} 
                className="h-80 w-full object-cover"
        
        />
        </div>
    </div>
  )
}

export default Card