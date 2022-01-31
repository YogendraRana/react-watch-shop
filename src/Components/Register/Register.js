import React, {useState} from 'react'
import {Link} from 'react-router-dom'

//importing css
import './Register.css'

const Register = () => {
	return(	
		<div className="register-wrapper">
			<form className="register-form">
	      		<div>
	        		<h2>Register</h2>
	        	</div>

	        	<div>
	          		<input type="text" placeholder="Name" />
	        	</div>

	        	<div>
	          		<input type="email" placeholder="Email" />
	        	</div>

	        	<div>
	          		<input type="password" placeholder="Password" />
	        	</div>

	        	<div>
		          	<input type="password" placeholder="Confirm Password" />
	        	</div>

	        	<div>
	        		<button type="button">Register</button>
	        	</div>

	        	 <div className="social-media">	
			    	<p>Sign Up with</p>
			    	<div>
			        	<Link to="#"><i className="fab fa-facebook-f"></i></Link>
			      		<Link to="#"><i className="fab fa-twitter"></i></Link>
			        	<Link to="#"><i className="fab fa-google"></i></Link>
			    	</div>
			    </div>

	        	<div className="log-in-link">
			    	<p>Already have an account? If yes, just log in. We've missed you!</p>
			   		<Link to="/login">Click here to log in.</Link>	    
			   	</div>
      		</form> 

		    <div className="register-sub-wrapper">
		      	<p>A place for product promotions or advertisement...</p>
		    </div>
		</div>
	)
}

export default Register