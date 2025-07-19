import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <div style={{display:'flex',gap:'20px', padding:'20px', backgroundColor:'#f0f0f0', justifyContent:"space-between"}}>
          <Link to="/" style={{textDecoration:'none'}}>Home</Link>
          <Link to="services" style={{textDecoration:'none'}}>Services</Link>
          <Link to='about' style={{textDecoration:'none'}}>About Us</Link>
          <Link to='contact' style={{textDecoration:'none'}}>Contact Us</Link>
    </div>
  )
}
