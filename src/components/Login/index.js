import React, { Component } from 'react';
import  { Row,Col }  from  'react-bootstrap';
import Formulario from '../Formulario';
import './Login.css';
class Login extends Component{
       render(){
             return (
               <div>
                 <Row>
                 <Col xs={10} sm={10} md={6} lg={4} className="offset-md-5" className="container">
                    <Formulario/>
                 </Col>
               </Row>    
               </div>
             );
       }
}


export default Login;