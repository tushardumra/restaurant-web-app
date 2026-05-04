import React from 'react'

const FoodCard = ({ imageSrc, title, description, price }) => {
  return (
    <div className='relative rounded-lg hover:scale-95 transition-all ease-in-out hover:-translate-y-2 shadow-xl/20'>
      <img src={imageSrc} alt={title} className='rounded-lg'/>
      <div className='absolute top-64 left-5 text-white text-2xl'>
        <h2 className='font-semibold'>{title}</h2>
        <p className='text-base'>{description}</p>
        <span>{price}</span>
      </div>
    </div>
  )
}

export default FoodCard
