/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { storeContatos,fetchContatos } from '../../actions/contatos/index';
import { Col, Table,Button, InputGroup, FormControl } from 'react-bootstrap';
import { FaEdit,FaTrash } from 'react-icons/fa'
import './Contato.css';
import { Nav } from '../Navbar/index';
class Contato extends Component{
      constructor(props){
            super(props)

            this.state = {
                   name:'',
                   phone:''
            }
      }

      onChangephone = event => {
               this.setState({
                       name:event.target.value
               })       
      }
      onChangename = event => {
            this.setState({
                    phone:event.target.value
            })       
   }

   componentDidMount(){
      //      this.props.dispatch(fetchContatos());
   }



     render(){
         const { contatos,storeContatos,fetchContatos }  = this.props;  
         const { name,phone } = this.state;
           return (
                 <div>
                       <Nav/>
                    <Col xs={12} sm={9} md={7} lg={8} className="offset-xs-2 offset-sm-2 offset-md-3 offset-lg-2 container">
                     <Col md={12} className="recipient">
                        <Col md={4}>
                              <InputGroup>
                                    <FormControl
                                          placeholder="Enter the name"
                                          aria-label="Enter the name"
                                          aria-describedby="basic-addon2"
                                          onChange={this.onChangename}
                                    />
                              </InputGroup>
                        </Col>
                        <Col md={4}>
                              <InputGroup>
                                    <FormControl
                                          placeholder="Enter the phone"
                                          aria-label="Enter the phone"
                                          aria-describedby="basic-addon2"
                                          onChange={this.onChangephone}
                                    />
                              </InputGroup>
                        </Col>
                        <Col md={4}>
                        <Button 
                          variant="secondary" 
                          size="md"
                          onClick={ () => storeContatos(name,phone)}>Cadastrar</Button>
                        </Col>
                     </Col> 
                     <Table striped bordered hover className="top">
                        <thead>
                              <tr className="text-center">
                                    <th>#</th>
                                    <th>Nome</th>
                                    <th>Phone</th>
                                    <th>Ação</th>
                              </tr>
                        </thead>
                        <tbody>
                              {/* <tr className="text-center">
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>
                                          <Button variant="secondary" size="sm">
                                                Editar &nbsp;<FaEdit/>
                                          </Button>&nbsp;&nbsp;&nbsp;
                                          <Button variant="secondary" size="sm">
                                                Excluir &nbsp;<FaTrash/>
                                          </Button>
                                    </td>
                              </tr> */}
                              {
                                      contatos.map((value,index) => {
                                               return <tr key={index} className="text-center">
                                                            <td>{value._id}</td>
                                                            <td>{value.nome}</td>
                                                            <td>{value.phone}</td>
                                                            <td>
                                                                  <Button variant="secondary" size="sm">
                                                                        Editar &nbsp;<FaEdit/>
                                                                  </Button>&nbsp;&nbsp;&nbsp;
                                                                  <Button variant="secondary" size="sm">
                                                                        Excluir &nbsp;<FaTrash/>
                                                                  </Button>
                                                            </td>
                                                      </tr>
                                      })
                              }
                        </tbody>
                  </Table>
                 </Col>
                 </div>
           )
     }
}


const mapStateToProps = store => ({
        contatos:store.contatos.contatos
})

const mapDispatchToProps = dispatch => 
bindActionCreators({storeContatos},dispatch)


export default connect(mapStateToProps,mapDispatchToProps)(Contato);