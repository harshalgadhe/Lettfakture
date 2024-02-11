import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {
  IconFileFilled,
  IconUser,
  IconSettings,
  IconBook,
  IconTag,
  IconFileDescription,
  IconCircleX,
  IconReceiptTax,
  IconClipboardList,
  IconCreditCard,
  IconCloudUpload,
  IconLogout
} from '@tabler/icons-react';

function Sidebar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" className="d-xl-none" onClick={handleShow}>
          Launch
        </Button>
  
        <Offcanvas show={show} onHide={handleClose} responsive="xl">
          <Offcanvas.Header closeButton>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Container className='pt-4 shadow-right h-100vh'>
                <Container className='text-center border-2 border-bottom border-info'>
                  <h5>Menu</h5>
                </Container>
                <Container className="py-4 d-flex flex-column gap-2 ps-4 pe-3">
                  <a>
                    <Navbar.Text className='d-flex gap-3 p-0'>
                      <IconFileFilled />
                      <p>Invoices</p>
                    </Navbar.Text>
                  </a>
                  <a>
                    <Navbar.Text className='d-flex gap-3 p-0'>
                      <IconUser style={{color:"rgb(40, 255, 193)"}}/>
                      <p>Customer</p>
                    </Navbar.Text>
                  </a>
                  <a>
                    <Navbar.Text className='d-flex gap-3 p-0'>
                      <IconSettings style={{color:"rgb(84, 207, 255)"}}/>
                      <p>My Business</p>
                    </Navbar.Text>
                  </a>
                  <a>
                    <Navbar.Text className='d-flex gap-3 p-0'>
                      <IconBook style={{color:"rgb(90, 226, 255)"}}/>
                      <p>Invoice Journal</p>
                    </Navbar.Text>
                  </a>
                  <a>
                    <Navbar.Text className='d-flex gap-3 p-0'>
                      <IconTag style={{color:"rgb(255, 178, 87)"}}/>
                      <p>Price List</p>
                    </Navbar.Text>
                  </a>
                  <a>
                    <Navbar.Text className='d-flex gap-3 p-0'>
                      <IconFileDescription style={{color:"rgb(84, 207, 255)"}}/>
                      <p>Multiple Invoicing</p>
                    </Navbar.Text>
                  </a>
                  <a>
                    <Navbar.Text className='d-flex gap-3 p-0'>
                      <IconCircleX style={{color:"rgb(255, 75, 151)"}}/>
                      <p>Unpaid Invoices</p>
                    </Navbar.Text>
                  </a>
                  <a>
                    <Navbar.Text className='d-flex gap-3 p-0'>
                      <IconReceiptTax style={{color:"rgb(247, 201, 11)"}}/>
                      <p>Offer</p>
                    </Navbar.Text>
                  </a>
                  <a>
                    <Navbar.Text className='d-flex gap-3 p-0'>
                      <IconClipboardList style={{color:"rgb(22, 206, 255)"}}/>
                      <p>Inventory Control</p>
                    </Navbar.Text>
                  </a>
                  <a>
                    <Navbar.Text className='d-flex gap-3 p-0'>
                      <IconCreditCard style={{color:"rgb(27, 154, 255)"}}/>
                      <p>Member Invoicing</p>
                    </Navbar.Text>
                  </a>
                  <a>
                    <Navbar.Text className='d-flex gap-3 p-0'>
                      <IconCloudUpload style={{color:"rgb(130, 177, 255)"}}/>
                      <p>Import / Export</p>
                    </Navbar.Text>
                  </a>
                  <a>
                    <Navbar.Text className='d-flex gap-3 p-0'>
                      <IconLogout style={{color:"rgb(12, 255, 168)"}}/>
                      <p>Logout</p>
                    </Navbar.Text>
                  </a>
                </Container>
            </Container>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
}

export default Sidebar;