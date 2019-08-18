import './login.css'
import React, { Component } from "react";
import { CssBaseline, Typography, Container, Grid, TextField, Button } from '@material-ui/core';
/* We want to import our 'AuthHelperMethods' component in order to send a login request */
import AuthHelperMethods from './components/AuthHelperMethods';





class Login extends Component {

    /* In order to utilize our authentication methods within the AuthService class, we want to instantiate a new object */
    Auth = new AuthHelperMethods();

    state = {
        email: "",
        password: ""
    }

    /* Fired off every time the use enters something into the input fields */
    _handleChange = (e) => {
        this.setState(
            {
                [e.target.email]: e.target.value
            }
        )
    }

    handleFormSubmit = (e) => {

        e.preventDefault();
        /* Here is where all the login logic will go. Upon clicking the login button, we would like to utilize a login method that will send our entered credentials over to the server for verification. Once verified, it should store your token and send you to the protected route. */
        this.Auth.login(this.state.email, this.state.password)
            .then(res => {
                if (res === false) {
                    return alert("Sorry those credentials don't exist!");
                }
                this.props.history.replace('/');
            })
            .catch(err => {
                alert(err);
            })
    }

    componentWillMount() {
        /* Here is a great place to redirect someone who is already logged in to the protected route */
        if (this.Auth.loggedIn())
            this.props.history.replace('/');
    }

    render() {
        // return (
        //     <React.Fragment>
        //         <div className="main-wrapper">
        //             <div className="box">
        //                 <div className="box-header">
        //                     <h1>Login</h1>
        //                 </div>
        //                 <form className="box-form">
        //                     <input
        //                         className="form-item"
        //                         placeholder="Username"
        //                         name="username"
        //                         type="text"
        //                         onChange={this._handleChange}
        //                     />
        //                     <input
        //                         className="form-item"
        //                         placeholder="Password"
        //                         name="password"
        //                         type="password"
        //                         onChange={this._handleChange}
        //                     />
        //                     <button className="form-submit" onClick={this.handleFormSubmit}>Login</button>
        //                 </form>
        //                 <Link className="link" to="/signup">Don't have an account? <span className="link-signup">Signup</span></Link>
        //             </div>
        //             {/* <div className="signiture">
        //                 <h1>Template Built & Designed by Roman Chvalbo</h1>
        //             </div> */}
        //         </div>

        //     </React.Fragment>
        // );

        return (
			<Fragment>
				<CssBaseline />
				<Container maxWidth='md' className='root'>
						<Typography component='div' variant='body2' color='textSecondary' align='center'>
							<article className='br3 ba dark-gray b--black-10 mv4 center shadow-4'>
								<Grid container component='main' className='grid'>			<Grid item md={6} sm={6} className='imageLft'>
										<div justifycontent="flex-start">
												<img src={signIn} alt='TiGrow Icon' className="tigrow-img" /> <br/>
												<p>There are many variations of lorem ipsum available,but the majority have suffered in the form by injected humors,random words which don't look even slightly believable.</p>
										</div>
									</Grid>
									<Grid
										item
										md={6}
										sm={6}
										className='gridItm'
										style={{ borderLeft: '1px solid #d9d9d9' }}
									>

										<Grid container spacing={3}>

											<Grid item xs={12}>
											<ValidatorForm
												ref="form"
												onSubmit={this.handleSubmit}
												onError={errors => console.log(errors)}
											>
												<Grid container spacing={1} alignItems='flex-end'>
													<Grid item xs={1}>
														<GroupWorkOutlined />
													</Grid>
													<Grid item xs={11}>
														<TextValidator
															required
															type="email"
															name="email"
															id="email"
															label="Email"
															onChange={this._handleChange}
															// value={email}
															validators={['required', 'isEmail']}
															errormessages={['this field is required', 'email is not valid']}
															fullWidth
															style={{ padding : '1em 0 0.5em 0', }}
														/>

													</Grid>

												</Grid>

											<Grid item xs={12}>
												<Grid container spacing={1} alignItems='flex-end'>
													<Grid item xs={1}>
														<PlaceOutlined />
													</Grid>
													<Grid item xs={11}>
														<TextField
															required
															type="password"
															name="password"
															id="password"
															onChange={this._handleChange}
															// value={password}
															validators={['required', 'isPassword']}
															errormessages={['this field is required', 'email is not valid']}
															label='Password'
															fullWidth
															className='textField'
															style={{ padding : '1em 0 0.5em 0',
															marginTop  : '0.5em', }}
														/>
													</Grid>
												</Grid>
											</Grid>
											<Grid item xs={12}>
												<Button
													variant='contained'
													color= 'primary'
													fullWidth
													onClick= {this.handleFormSubmit}
													className='button'
													type="submit"
													value="Signin"
												>
													Sign In
												</Button>
											</Grid>
											{/* <Grid item xs={12}>
												<Button
													variant='outlined'
													color='primary'
													fullWidth
													onClick={() => onRouteChange('signup')}
													// value='SignUp'
													className='button'
												>
													Sign Up
												</Button>

											</Grid> */}
										</ValidatorForm>
										</Grid>
										</Grid>

									</Grid>
								</Grid>
							</article>
						</Typography>
					</Container>
			</Fragment>
		);
    }
}
export default Login;
