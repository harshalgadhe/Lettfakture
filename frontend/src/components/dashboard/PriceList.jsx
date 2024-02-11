import React from 'react'
import DashboardNav from './DashboardNav'
import Sidebar from './Sidebar';
import Products from './Products';
import Container from 'react-bootstrap/Container';
import '../../css/dashboard.css';

function PriceList() {
  return (
    <>
        <DashboardNav />
        <Container className="d-flex direction-column p-0 m-0">
            <Container className="col-2 p-0">
                <Sidebar/>
            </Container>
            <Container className="p-0">
                <Products />
            </Container>
        </Container>
    </>
  )
}

export default PriceList