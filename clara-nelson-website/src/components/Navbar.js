import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div className="navbar bg-body-secondary">
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/aboutme">About Me</Link>
      <Link className="nav-link" to="/experience">Experience</Link>
      <Link className="nav-link" to="/education">Experience</Link>
    </div>
  )
}
export default Navbar;


// <nav class ="navbar navbar-expand-lg navbar-light bg-light">
// 	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
// 	<span class="navbar-toggler-icon"></span>
// 	</button>
// 	<div class="collapse navbar-collapse" id="navbarSupportedContent">
// 		<ul class = "navbar-nav mr-auto">
// 			<li class="nav-item">
// 				<a class="nav-link" href="index.html">Home</a>
// 			</li>
// 		  <li class = "nav-item">
// 			<a class = "nav-link" href = "experience.html">Experience</a>
// 		  </li>
// 		  <li class = "nav-item">
// 			<a class = "nav-link" href = "education.html">Education</a>
// 		  </li>
		  
// 		  <li class = "nav-item">
// 			<a class = "nav-link" href = "contactme.html">Contact Me</a>
// 		  </li>
// 		  <li class = "nav-item">
// 		  	<a class = "nav-link" href = "Clara_Nelson_Resume.pdf" target="_blank">Resume</a>
// 		  </li>
// 		  <li class = "nav-item">
// 		  	<a class = "nav-link" href = "https://github.com/claranelson" target="_blank">My Github</a>
// 		  </li>
// <!-- 		  <li class = "nav-item">
// 			<a class = "nav-link" href = "aboutme.html">About Me</a>
// 		  </li> -->
		  
// 		</ul>
// 	</div>
// </nav>