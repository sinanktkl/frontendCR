
// import { Container, Navbar, Nav } from 'react-bootstrap'
// import '../App.css'
// function Header() {
//   return (



//     <>

//       {/* Top Navbar: Sign-in, Join-Us, Privacy Policy */}
//       <Navbar className='bg-info sticky-top' variant="dark" expand="lg" style={{ height: '30px' }}>
//         <Container fluid>
//           <Navbar.Brand href="#" className="fw-bolder">
//           </Navbar.Brand>

//           <Navbar.Collapse id="top-navbar">
//             <Nav className="ms-auto" style={{ fontSize: '12px' }}>
//               <Nav.Link href="/register" className="text-light">Sign-in</Nav.Link>
//               <span style={{ marginTop: '8px', color: 'white' }}>|</span>
//               <Nav.Link href="/joinus" className="text-light">Join-Us</Nav.Link>
//               <span style={{ marginTop: '8px', color: 'white' }}>|</span>
//               <Nav.Link href="/privacy" className="text-light">Privacy Policy</Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       {/* Main Navbar */}
//       <Navbar className='sticky-top' bg="info" variant="dark" expand="lg">
//         <Container fluid>
//           {/* Brand */}
//           <Navbar.Brand href="#" className="fw-bolder">
//             <img
//               alt=""
//               src="https://www.shutterstock.com/image-vector/biker-riding-motorcycle-illustration-logo-260nw-2327228019.jpg"
//               width="60"
//               height="40"
//               className="d-inline-block align-top"
//             />{' '}
//             Custom-Rodzz
//           </Navbar.Brand>

//           {/* Toggle for mobile */}
//           <Navbar.Toggle aria-controls="main-navbar" />

//           <Navbar.Collapse id="main-navbar">

//             {/* Center navigation */}
//             <Nav className="mx-auto" style={{ gap: '20px', fontWeight: 'bolder' }}>
//               <Nav.Link href="/" className="text-light">Home</Nav.Link>
//               <Nav.Link href="/products" className="text-light">Products</Nav.Link>
//               <Nav.Link href="/service" className="text-light">Services</Nav.Link>
//               <Nav.Link href="/admin" className="text-light">Admin</Nav.Link>
//               <Nav.Link href="/aboutus" className="text-light">About-Us</Nav.Link>
//             </Nav>

//             {/* Wishlist & Cart aligned to right */}
//             <Nav className="ms-auto" style={{ gap: '15px' }}>
//               <Nav.Link href="/wishlist" className="text-light">
//                 <i className="fa-regular fa-heart"></i>
//               </Nav.Link>
//               <Nav.Link href="/cart" className="text-light">
//                 <i className="fa-solid fa-cart-shopping"></i>
//               </Nav.Link>
//             </Nav>

//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>




//   )
// }

// export default Header




// import React, { useEffect, useState } from 'react'
// import { Container, Navbar, Nav } from 'react-bootstrap'
// import { Link } from 'react-router-dom';

// function Header() {


//   const [userRole, setUserRole] = useState("");

//   useEffect(() => {
//     const userRole = sessionStorage.getItem("userRole");
//     setUserRole(userRole);
//   }, []);


//   return (
//     <>
//       {/* Top Navbar: Sign-in, Join-Us, Privacy Policy */}

//       <header className="topbar">
//       <nav className="topbar-nav">
//         <a href="/register">Sign-in</a>
//         <span>|</span>
//         <a href="/joinus">Join-Us</a>
//         <span>|</span>
//         <a href="/privacy">Privacy Policy</a>
//       </nav>
//     </header>

//       {/* Main Navbar */}
//       <Navbar className='sticky-top' bg="info" variant="dark" expand="lg">
//         <Container fluid>
//           {/* Brand */}
//           <Navbar.Brand  className="fw-bolder" style={{cursor:'pointer'}}>

//             <div>
//                 <p className='header-title '>Custom Rodz</p>
//             </div>
//           </Navbar.Brand>

//           {/* Toggle for mobile */}
//           <Navbar.Toggle aria-controls="main-navbar" />

//           <Navbar.Collapse id="main-navbar">

//             {/* Center navigation */}
//             <Nav className="mx-auto" style={{ gap: '20px', fontWeight: 'bolder' }}>
//             <Nav.Link as={Link} to="/" className="text-light nav-link active">Home</Nav.Link>
//             <Nav.Link as={Link} to="/products" className="text-light nav-link">Products</Nav.Link>
//             <Nav.Link as={Link} to="/services" className="text-light nav-link">Services</Nav.Link>
//             {userRole === "admin" && (
//              <Nav.Link as={Link} to="/admin" className="text-light nav-link">Admin</Nav.Link>
//              )} 
//              <Nav.Link as={Link} to="/aboutus" className="text-light nav-link">About-Us</Nav.Link>
//             </Nav>


//             {/* Wishlist & Cart aligned to right */}
//             <Nav className="ms-auto" style={{ gap: '15px' }}>
//               <Nav.Link href="/wishlist" className=" wishlist text-light">
//                 <i className="fa-regular fa-heart"></i> 
//               </Nav.Link>
//               <Nav.Link href="/cart" className=" cart text-light">
//                 <i className="fa-solid fa-cart-shopping"></i> 
//               </Nav.Link>
//             </Nav>

//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//   )
// }

// export default Header




import '../componentsStyles/Header.css'
import React, { useEffect, useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

function Header() {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUserRole(decoded.role); // 'admin' or 'user'
      } catch (error) {
        console.error("Invalid token:", error);
      }
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.clear();
    window.location.href = "/";
  };

  return (
    <>
      {/* Top Navbar: Sign-in / Logout */}
      <header className="topbar">
        <nav className="topbar-nav">
          {!userRole ? (
            <>
              <a href="/login">Sign-in</a>
              <span>|</span>
              <a href="/joinus">Join-Us</a>
              <span>|</span>
              <a href="/privacy">Privacy Policy</a>
            </>
          ) : (
            <>
              <span>Welcome, {userRole}</span>
              <span>|</span>
              <a href="/privacy">Privacy Policy</a>
              <span>|</span>
              <button
                onClick={handleLogout}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "white",
                  cursor: "pointer"
                }}
              >
                Sign out
              </button>
            </>
          )}
        </nav>
      </header>

      {/* Main Navbar */}
      <Navbar className="sticky-top" bg="info" variant="dark" expand="lg">
        <Container fluid>
          {/* Brand */}
          <Navbar.Brand className="fw-bolder" style={{ cursor: 'pointer' }}>
            <div>
              <p className="header-title">Custom Rodz</p>
            </div>
          </Navbar.Brand>

          {/* Toggle for mobile */}
          <Navbar.Toggle aria-controls="main-navbar" />

          <Navbar.Collapse id="main-navbar">
            {/* Center navigation */}
            <Nav className="mx-auto" style={{ gap: '20px', fontWeight: 'bolder' }}>
              <Nav.Link as={Link} to="/" className="text-light nav-link active">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/products" className="text-light nav-link">
                Products
              </Nav.Link>
              <Nav.Link as={Link} to="/services" className="text-light nav-link">
                Services
              </Nav.Link>

              {userRole === "admin" && (
                <Nav.Link as={Link} to="/admin" className="text-light nav-link">
                  Admin
                </Nav.Link>
              )}

              

              <Nav.Link as={Link} to="/aboutus" className="text-light nav-link">
                About-Us
              </Nav.Link>
            </Nav>

            {/* Wishlist & Cart aligned to right */}
            <Nav className="ms-auto" style={{ gap: '15px' }}>
              <Nav.Link href="/wishlist" className="wishlist text-light">
                <i className="fa-regular fa-heart"></i>
              </Nav.Link>
              <Nav.Link href="/cart" className="cart text-light">
                <i className="fa-solid fa-cart-shopping"></i>
              </Nav.Link>
              {userRole && (
                <Nav.Link 
                // as={Link} 
                // href="/profile" 
                href="/my-orders" 
                className="profile text-light ">
                 <i className="fa-regular fa-user"></i>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header
