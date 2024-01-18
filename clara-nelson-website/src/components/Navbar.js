import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div className="navbar bg-body-secondary">
      <Link to="/">Home</Link>
      <Link to="/aboutme">About Me</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/education">Experience</Link>
    </div>
  )
}
export default Navbar;