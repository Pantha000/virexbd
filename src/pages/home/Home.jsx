import React from 'react'
import banner from "../../assets/headerbg.png"

const Home = () => {
  return (
    <div className=''>
        <div className='h-screen flex items-center justify-center banner-fixed text-white text-center'>
            {/* <img src={banner} className='fixed'/> */}
            <div className='w-10/12'>
                <h1 className='font-bold text-3xl font-poppins tracking-wide'>Revolutionize Your Business with Virex BD</h1>
                <p className='font-poppins text-semibold mt-6'>"Welcome to Virex BD, where innovation meets excellence in the world of IT. Together, let's embark on a journey of cutting-edge solutions and technological advancements. We are not just a company; we are a community dedicated to shaping the future of IT. Welcome aboard!"</p>
                <button className='mt-10 bg-gray-100 text-black py-2 px-10 rounded-lg font-poppins text-md font-semibold'>Talk to Our Experts</button>
            </div>
        </div>
    </div>
  )
}

export default Home