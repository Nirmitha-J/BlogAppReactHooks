
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

function Comments(props) {
    // let comments = props.comments;
    console.log(props)
    return(
        <Container>
        {props.comments.length > 0 ?
        (<>
        <p style={{textAlign: 'center', marginTop: '50px', textDecoration: 'underline'}}>Comments for PostId: <strong>{props.comments[0].postId}</strong></p>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Id</th>
              <th>PostId</th>
              <th>Name</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {props.comments.map((comment) => {
              return (
                <tr key={comment.id}>
                  <th scope="row">{comment.id}</th>
                  <td>{comment.postId}</td>
                  <td>{comment.name}</td>
                  <td>{comment.body}</td>
                  
                </tr>
              );
            })}
          </tbody>
        </Table>
        </>) : null}

</Container>

    )
}

export default Comments