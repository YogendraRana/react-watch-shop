import React, {useState} from 'react'
import {Link} from 'react-router-dom'

//importing css
import './Login.css'

const Login = () => {

	return(	
		<div className="login-wrapper">	
  			<form className="log-in-form">
		    	<div>
		    		<h2>Log In</h2>
		      	</div>

		      	<div>
		        	<input type="email" name="email" placeholder="Email Address" />
		      	</div>

		      	<div>
		        	<input type="password" name="password" placeholder="Password" />
		      	</div>

		      	<div className="remember-me">
		        	<input type="checkbox" />
		        	<span>Remember me?</span>
				</div>	

				<div>
					<button type="button">Log In</button>
				</div>

				<div>
					<Link to="#" className="forgot-password">Forgot Password?</Link>
	            </div>

			    <div className="social-media">	
			    	<p>Login with</p>
			    	<div>
			        	<Link to="#"><i className="fab fa-facebook-f"></i></Link>
			      		<Link to="#"><i className="fab fa-twitter"></i></Link>
			        	<Link to="#"><i className="fab fa-google"></i></Link>
			    	</div>
			    </div>

			    <div className="register-link">
			    	<p>New here? Register and discover great amount of new opportunities!</p>
			   		<Link to="/register">Click here to register.</Link>	    
			   	</div>
			</form>

		    <div className="login-sub-wrapper">
		      	<p>A place for product promotions or advertisement...</p>
		    </div>
		</div>
	)
}

export default Login