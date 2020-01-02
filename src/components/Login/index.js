import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  { Row,Col,Form,Button }  from  'react-bootstrap';
import {  submitLogin  } from '../../actions/index';
import { Formulario }  from '../Formulario';
import './Login.css';
import Axios from 'axios';
class Login extends Component{
      constructor(props){
          super()

          this.state = {
             email:'',
             password:''
          }
      }     

      emailChange = event => {
            this.setState({
                  email:event.target.value
            })
      }

      passwordChange = event => {
        this.setState({
              password:event.target.value
        })
      }

      

         render(){
               const {user,submitLogin } = this.props;
               const { email,password } = this.state;
             return (
               <div>
                 <Row>
                 <Col xs={10} sm={10} md={6} lg={4} className="offset-md-5" className="container">
                    <Formulario>
                            <Form.Group controlId="formBasicEmail">
                              <Form.Label>Email</Form.Label>
                              <Form.Control 
                              type="email" 
                              placeholder="Enter email" 
                              ref={this.email}
                              onChange={this.emailChange}/>
                              </Form.Group>

                              <Form.Group controlId="formBasicPassword">
                              <Form.Label>Password</Form.Label>
                              <Form.Control 
                                   type="password" 
                                   placeholder="Password"
                                   ref={this.password} 
                                   onChange={this.passwordChange}/>
                              </Form.Group>
                              
                              <Button 
                                    variant="primary" 
                                    type="button"
                                    onClick={() => submitLogin(email,password)}>
                              Submit
                              </Button>
                    </Formulario>
                 </Col>
               </Row>    
               </div>
             );
       }
}


const mapDispatchToProps = dispatch => 
  bindActionCreators({submitLogin},dispatch)

export default connect(null,mapDispatchToProps)(Login);