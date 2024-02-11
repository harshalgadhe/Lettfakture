import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='d-flex flex-column'>
        <Link to='/terms'>Terms</Link>
        <Link to='/dashboard/pricelist'>Pricelist</Link>
    </div>
  )
}

export default Home