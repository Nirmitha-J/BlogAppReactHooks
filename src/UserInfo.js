import React, { useState, useEffect } from 'react'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Col,
  Container,
  Navbar,
  NavbarBrand,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Table,
  ListGroupItem,
  ListGroup,
  ButtonDropdown,
} from "reactstrap";
function UserInfo(props) {
    let userInfo = props.userInfo;
    return(
        <Container>
        
        <>
        <p style={{textAlign: 'center', marginTop: '50px', textDecoration: 'underline'}}>UserIfo of userId: {props.userInfo.id} <strong>"{props.userInfo.name}"</strong></p>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>UserName</th>
              <th>Email</th>
              <th>street</th>
              <th>city</th>
              <th>zipcode</th>        
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
          
                <tr key={props.userInfo.id}>
                  <th scope="row">{props.userInfo.id}</th>
                  <td>{props.userInfo.name}</td>
                  <td>{props.userInfo.username}</td>
                  <td rowspan="3">{props.userInfo.email}</td>
    
                  <td>{props.userInfo.address.street}</td>
                  <td>{props.userInfo.address.city}</td>
                  <td>{props.userInfo.address.zipcode}</td>
                  <td>{props.userInfo.phone}</td>
                  <td>{props.userInfo.website}</td>
                  
                </tr>
             
          </tbody>
        </Table>
        </>

</Container>

    )

}
export default UserInfo;