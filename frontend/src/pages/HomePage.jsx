import React, { useState } from 'react'
import toast from 'react-hot-toast'
import Navbar from '../components/Navbar'
import RateLimitedUI from '../components/RateLimitedUI';

function Homepage() {
  const [isRateLimited, setIsRateLimited] = useState(false);
  return (
    <div className='min-h-screen'>
        <Navbar />
        {isRateLimited && <RateLimitedUI />}
    </div>
  )
}

export default Homepage