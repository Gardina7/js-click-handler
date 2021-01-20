import React, { Component } from 'react';

class Contact extends Component {
    constructor(props){
    super(props)

    this.state ={
        submitted: false,
        formData: {
            firstName:'',
            lastName:'',

        }
    }
}


handleChange = (event) => {
    const formData = {...this.state.formData}
    console.log(formData)
console.log(event.target.name)
console.log(event.target.value)
formData[event.target.name] = event.target.value

this.setState({formData})

}
handleSubmit = (event) => {
    //prevent the form submission from reloading the page
    event.preventDefault();
    //update state to reflect the form submission
    //we leverage this in the render method to show the thank you page instead of the form
    this.setState({
        submitted: true
    });
}

resetForm = (event) => {
    this.setState({
        submitted: false,
        formData: {
            firstName: '',
            lastName: '',
            email: ''
        }
    });
 }


    render() {
        if (this.state.submitted){
            return (
                <div className="Contact">
                    <p>Thank You, {this.state.formData.firstName},for submitting the form.</p>
                    <button onClick ={this.resetForm}>Reset Form</button>
                </div>
            )
        }
        return (
            <div className="Contact">
                <form onSubmit ={this.handleSubmit}>
                    <div>
                        <label htmlFor='firstName'>First Name</label>
                        <input
                            type='text'
                            name='firstName'
                            value={this.state.formData.firstName}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor='lastName'>Last Name</label>
                        <input
                            type='text'
                            name='lastName'
                            value={this.state.formData.lastName}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button>Submit Form</button>
                </form>

            </div>
        )


    }
}

export default Contact