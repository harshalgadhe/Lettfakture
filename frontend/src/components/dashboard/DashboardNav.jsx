import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import britishFlag from '/image/GB.png';
import brandImage from '/image/diamond.png';

function DashboardNav() {
  return (
    <div>
      {/* Top bar */}
      <Navbar bg="primary" variant="dark">
        <Container className='w-75 py-2'>
          <Navbar.Brand href="#home" className="d-none d-xl-block">
            <div className='d-flex align-items-center gap-2'>
              <div className='border border-2 p-1 rounded-circle'>
                <img src={brandImage} height="32" alt="brand logo" />
              </div>
              <div>
                <p className='fs-6 m-0'>Harshal Gadhe</p>
                <p className='m-0' style={{fontSize:"14px"}}>Nutan Colony, Aurangabad</p>
              </div>
            </div>
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Navbar.Text className="text-white fw-medium">English</Navbar.Text>
              <Container className="ms-2" style={{ padding: "8px" }}>
                <img src={britishFlag} width="26" height="18" alt="british flag" />
              </Container>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default DashboardNav;