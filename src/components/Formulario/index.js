import React, { Component } from 'react';
import  { Button,Form,Row,Col }  from  'react-bootstrap';

class  Formulario extends Component{

       constructor(props){
             super(props);
             this.email = React.createRef();
             this.password = React.createRef();
             this.handleSubmit = this.handleSubmit.bind(this)
       }

         handleSubmit(){
                const email = this.email.current.value;
                const password = this.password.current.value;

                return {email,password};
         }
         componentDidMount(){
                console.log(this.handleSubmit());
         }
         render(){
               return (
                <Form>
                    <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        ref={this.email}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                         type="password" 
                         placeholder="Password"
                         ref={this.password} />
                    </Form.Group>
                    <Button 
                      variant="primary" 
                      type="button"
                      onClick={this.handleSubmit}>
                    Submit
                    </Button>
              </Form>
               )
         }
} 

export default Formulario;