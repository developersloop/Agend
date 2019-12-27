import React, { Component } from 'react';
import  { Button,Form,Row,Col }  from  'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { submitLogin,registerUser } from '../../actions/index';
import { Table } from '../Table/index';
import { Modal } from '../Modal/index';
class  Formulario extends Component{

       constructor(props){
             super();

             this.state = {
                show:false,
                setShow:false,
                email:'',
                password:''
             }
            //  this.email = React.createRef();
            //  this.password = React.createRef();
            //  this.handleSubmit = this.handleSubmit.bind(this)
       }

       

         emailChange = event => {
                this.setState(
                     {
                        email:event.target.value
                     }
                )
         }
         passwordChange = event => {
          this.setState(
               {
                  password:event.target.value
               }
          )
        }
         render(){
           const { show, setShow } = this.state;
           const handleClose = () => this.setState({setShow:false});
           const handleShow = () => this.setState({setSho:true});
           const newUser = {
               name:"vinicius Silva",
               lastname:"marques",
               idade:"25",
               email:"vinicius@gmail1.com",
               password:"0903amor13"
          }
           const { email,password } = this.state;
           const { user,submitLogin,registerUser,token } = this.props;
               return (
                    <div>
                         <Form>
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
                              onClick={ () => submitLogin(email,password)}>
                              Submit
                              </Button>
                              <Modal show={show} handleShow={handleShow} handleClose={handleClose}/>
                              {/* <button onClick={registerUser}></button> */}
                              {/* {token} */}
                         </Form>
                         <Table>
                               <thead>
                                      <tr>
                                             <td>ID</td>
                                             <td>NAME</td>
                                             <td>EMAIL</td>
                                      </tr>
                               </thead>
                               <tbody>
                                      {
                                           user.map((value,index) => {
                                                  return <tr key={index}>
                                                            <td>{value.id}</td>
                                                            <td>{value.name}</td>
                                                            <td>{value.email}</td>
                                                         </tr>
                                           })
                                      }
                               </tbody>
                         </Table>
                    </div>
               )
         }
} 

const mapStateToProps = store => ({
     // token:store.Login.token,
     user:store.user.user     
})


const mapDispatchToProps = dispatch => 
  bindActionCreators({submitLogin,registerUser},dispatch);

//   const mapDispatchToProps = dispatch => 
//   bindActionCreators({registerUser},dispatch);


export default connect(mapStateToProps,mapDispatchToProps)(Formulario);