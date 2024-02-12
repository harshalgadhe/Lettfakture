import React from 'react'
import DashboardNav from './DashboardNav'
import Sidebar from './Sidebar';
import Products from './Products';
import '../../css/dashboard.css';

function PriceList() {
  return (
    <div>
      <div className='row fixed-top'>
        <DashboardNav />
      </div>
      <div className="d-flex row py-5 mt-5">
          <div className="col-2 position-fixed pe-0">
              <Sidebar/>
          </div>
          <div className="p-3 col offset-xl-2 offset-lg-0">
              <Products />
          </div>
      </div>
    </div>
  )
}

export default PriceList