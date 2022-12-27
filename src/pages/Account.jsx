import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {



  return (
    <>
    <div className='w-full text-white'>
    <img className='w-full h-[400px] object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/5e48e7b6-350d-48d9-96d6-de8ca173c89f/ac0ea14f-42d2-4403-a631-16ccc52d91b1/US-en-20221219-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='/'/>
    <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div> 
    <div className='absolute top-[20%] p-4 md:p-8'>
      <h1 className='text-3xl md:text-5xl font-bold'>My Show's</h1>
      
    </div> 
    </div>
    <SavedShows />
    </>
  )
}

export default Account