import React from 'react'
import IgImg1 from '../public/assets/tato-8.jpg';
import IgImg2 from '../public/assets/tato-11.jpg';
import IgImg3 from '../public/assets/tato-12.jpg';
import IgImg4 from '../public/assets/tato-13.jpg';
import IgImg5 from '../public/assets/tato-14.jpg';
import IgImg6 from '../public/assets/tato-15.jpg';
import InstagramImg from './InstagramImg';


const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
        <p className='text-2xl font-bold'>Seguínos en Instagram</p>
        <p className='pb-4'>@simplatocatering</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            <InstagramImg socialImg={IgImg1} />
            <InstagramImg socialImg={IgImg2} />
            <InstagramImg socialImg={IgImg3} />
            <InstagramImg socialImg={IgImg4} />
            <InstagramImg socialImg={IgImg5} />
            <InstagramImg socialImg={IgImg6} />
        </div>
    </div>
  )
}

export default Instagram