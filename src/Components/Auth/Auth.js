import React, {Component} from "react";
import {Formik} from 'formik';
import {auth} from '../../Redux/authActionCreators';
import { connect } from "react-redux";

const mapDispatchToProps = dispatch =>{
    return {
        auth: (email, password, mode ) => dispatch(auth(email, password, mode))
    }
}

class Auth extends Component{
    state = {
        mode: "Sign Up"
    }
    switchModeHandler = () =>{
        this.setState({mode: this.state.mode=== "Sign Up" ? "Login" : "Sign Up"})
    }
    render() {
        return(
            <div>
           <Formik
           initialValues={
            {
                 email: "",
                 password: "",
                 passwordConfirm: "",
             }
          }
          onSubmit={
            (values) => {
                this.props.auth(values.email, values.password,  this.state.mode)
             }
          }

          validate={(values) =>{
            const errors = {};

            if (!values.email){
                errors.email = "Required"
            } else if ( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = "Invaild email address";
            }

            if (!values.password){
                errors.password = "Reqired"
            } else if (values.password.length < 4){
                errors.password = " Must be atlest four characters!"
            }

          if(this.state.mode === "Sign Up"){
                if (!values.passwordConfirm){
                    errors.passwordConfirm = " Required"
                } else if(values.password !==values.passwordConfirm){
                    errors.passwordConfirm = "Password field does not match";
                }
            }
                // console.log("Errosnnnn: " , errors)
                return errors
      }}
           >
                {({values, handleChange, handleSubmit, errors})=> <div style={{
                border: "1px grey solid",
                padding: "15px",
                borderRadius: "10px"
            }}>
                <button style={{
                    width: "100%",
                    backgroundColor: "#D70F64",
                    color: "white"
                }} className="btn btn-lg" onClick={this.switchModeHandler}>Switch to {this.state.mode === "Sign Up" ? "Login" : "Sign Up"}</button>
                <br/>
                <br/>

                    <form onSubmit={handleSubmit}>
                        <input
                        name="email"
                        placeholder="Enter Your Email"
                        className="form-control"
                        value={values.email}
                        onChange={handleChange} />
                       <span style={{color: "red"}}> {errors.email}</span> 
                        <br/>
                        <input
                        name="password"
                        placeholder="Enter Your password"
                        className="form-control"
                        value={values.password}
                        onChange={handleChange} />
                        <span style={{color: "red"}}> {errors.password}</span> 
                        <br/>
                        
                        {this.state.mode === "Sign Up" ? <div>
                        <input
                        name="passwordConfirm"
                        placeholder="Confrim password"
                        className="form-control"
                        value={values.passwordConfirm}
                        onChange={handleChange} />
                        <span style={{color: "red"}}> {errors.passwordConfirm}</span>
                        <br/>
                        </div> : null}
            
                            <button type="submit" className="btn btn-success">
                            {this.state.mode === "Sign Up" ? "Sign Up": "Login"}</button>
                    </form>
                    </div>}
           </Formik>
            </div>
        )
    }
}

export default  connect(null, mapDispatchToProps) (Auth);