import React from "react";
import FormInput from "../form-input/form-input.component.jsx";
import Button from "../button/button.component.jsx";
import './sign-in.styles.scss';
class SignIn extends React.Component{
    constructor(){
        super();

        this.state = {
            email:'',
            password:''
        }
    }

    handleChange = (event) =>{
        //this
        const { value, name } = event.target;
        
        this.setState({ [name]:value });
    }

    handleSubmit = (event) => {
        event.preventDefaul();

        this.setState({
            email:'',
            password:''
        })
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email</span>
                <form onSubmit = {this.handleSubmit} >
                    <FormInput
                        type="email" 
                        value={this.state.email} 
                        name="email" 
                        handleChange = {this.handleChange}
                        label="email"
                        required
                    />
                    <FormInput 
                        handleChange = {this.handleChange} 
                        type="password" 
                        value={this.state.password} 
                        name="password" 
                        required
                        label="password"
                    />
                    <Button type="submit" value="Submit">Submit Form</Button>
                </form>


            </div>
        )
    }

}

export default SignIn;