import React, { useState, useEffect } from "react";
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
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  UncontrolledAlert,
  Alert,
} from "reactstrap";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function FormReuse(props) {
  const [posts, setPosts] = useState([]);
  const [userss, setUserss] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState("Please Select");
  const [value, setValue] = useState("Please Select");
  const [dropdownOpen, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [visible, setVisible] = useState(false);
  const [createVisible, setCreateVisible] = useState(false);


  // const onDismiss = () => setVisible(false);

  const [modal, setModal] = useState(false);

  const toggle1 = () => setModal(!modal);

  const toggle = () => setOpen(!dropdownOpen);

  let isEdit;
  if (props.location === undefined) {
    isEdit = false;
  } else {
    isEdit = true;
  }

  let state, postId;
  const getPosts = async () => {
    const { data } = await axios.get(API_URL);
    setPosts(data);
  };

  const getUsers = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    if (isEdit) {
      let seluser = data.filter((item) => item.id === state.userId);
      setSelectedUser(seluser[0].name);
    }
    setUserss(data);

    // console.log(userss);
  };

  const goBack = () => {
    props.history.goBack();
  };

  useEffect(() => {
    getPosts();
    getUsers();
  }, []);

  useEffect(() => {}, [userss]);
  useEffect(() => {}, [visible, createVisible]);

  const deletePost = async (postId) => {
    toggle1();
    setDeleteId(postId);
    // await axios.delete(`${API_URL}/${postId}`);
    // setPosts(posts.filter((post) => post.id !== postId));
  };

  const confirmDelete = async () => {
    await axios.delete(`${API_URL}/${deleteId}`);
    toggle1();
    setPosts(posts.filter((post) => post.id !== deleteId));
  };

  if (props && !props.isEdit) {
    state = props.location.state.selPost;
    postId = props.match.params.id;
  }
  const initialFormState = {
    userId: state === undefined ? " " : state.userId,
    title: state === undefined ? "" : state.title,
    body: state === undefined ? "" : state.body,
  };
  const [user, setUser] = useState(initialFormState);
  const API_URL = "https://jsonplaceholder.typicode.com/posts";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  // update post
  const updatePost = async () => {
    setVisible(false)
    let selectedUser1 = userss.filter((item) => {
      return item.name === selectedUser;
    });

    let id = selectedUser1[0].id;
    user.userId = id;
    setUser({ ...user });

    const { data } = await axios.put(`${API_URL}/${postId}`, {
      userId: user.userId,
      title: user.title,
      body: user.body,
    });

    const postIndex = posts.findIndex((post) => post.id === Number(postId));
    posts[postIndex] = data;
    setPosts(posts);
    setVisible(true)
    setUser({ userId: "", title: "", body: "" });
  };

  // CREATE
  const createPost = async () => {
    setCreateVisible(false)
    let selectedUser1 = userss.filter((item) => {
      return item.name === selectedUser;
    });
    console.log(selectedUser1);
    let id = selectedUser1[0].id;
    user.userId = id;
    const { data } = await axios.post(API_URL, {
      userId: user.userId,
      title: user.title,
      body: user.body,
    });
    posts.push(data);
    setPosts(posts);
    setCreateVisible(true)
    setUser({ userId: "", title: "", body: "" });
  };

  const select = (event) => {
    setOpen(!dropdownOpen);
    setValue(event.target.innerText);
    setSelectedUser(event.target.innerText);
  };


  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      updatePost();
    } else {
      createPost();
    }
  };
  return (
    <Container>
       {(!isEdit && createVisible) ? (
        <div>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css'
        />

        <UncontrolledAlert color='info' fade={false}>
          Added post sucessfull
        </UncontrolledAlert>
      </div>
      
        ) : null }
      
      {deleteId ? (
        <Modal size="md" centered={true} isOpen={modal} toggle={toggle1}>
          <ModalHeader toggle={toggle1}>Confirm Delete</ModalHeader>
          <ModalBody>
            Are you sure, you want to delete post with postId:{" "}
            <strong>{deleteId}</strong> ?
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={confirmDelete}>
              Confirm
            </Button>{" "}
            <Button color="secondary" onClick={toggle1}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      ) : null}

      {isEdit  ? (
        
        <div style={{ textAlign: "right", marginTop: "10%" }}>
          <Button color="link" onClick={goBack}>
            Go Back
          </Button>
        </div>) : null}
         {isEdit && visible ? (
        <div>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css'
        />
        
        <UncontrolledAlert color='info' fade={false}>
          Update sucessfull
        </UncontrolledAlert>
      </div>) : null}

      
      <Form onSubmit={handleSubmit}>
        {isEdit ? (
          <FormGroup row>
            <Label for="PostId" sm={2}>
              PostId{" "}
            </Label>
            <Col sm={10}>
              <input
                disabled={isEdit}
                name="postId"
                type="text"
                value={postId}
                onChange={handleChange}
              />
            </Col>
          </FormGroup>
        ) : null}
        <FormGroup row>
          <Label for="selectedUser" sm={2}>
            User Name{""}
          </Label>
          <Col sm={10}>
            <ButtonDropdown
              style={{ width: 190, marginBottom: 7 }}
              isOpen={dropdownOpen}
              toggle={toggle}
            >
              <DropdownToggle caret>{selectedUser}</DropdownToggle>
              <DropdownMenu>
                {userss.map((user) => {
                  return (
                    <DropdownItem onClick={select}>{user.name}</DropdownItem>
                  );
                })}
              </DropdownMenu>
            </ButtonDropdown>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="title" sm={2}>
            Title{" "}
          </Label>
          <Col sm={10}>
            <input
              name="title"
              type="text"
              value={user.title}
              onChange={handleChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="body" sm={2}>
            Body
          </Label>
          <Col sm={10}>
            <input
              name="body"
              type="text"
              value={user.body}
              onChange={handleChange}
            />
          </Col>
        </FormGroup>

        <FormGroup>
          <Button color="secondary" type="submit">
            {isEdit ? "Update" : "Add"} Post
          </Button>
        </FormGroup>
        <br />
      </Form>

      <div>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Id</th>

              <th>User ID</th>
              <th>Title</th>
              <th>Body</th>

              {!isEdit ? <th colspan="4">Actions</th> : null}
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => {
              return (
                <tr key={post.id}>
                  <th scope="row">{post.id}</th>

                  <td>{post.userId}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>

                  {!isEdit ? (
                    <>
                      <td>
                        <Button color="primary" size="sm">
                          <Link
                            to={`/posts/${post.id}`}
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            View
                          </Link>
                        </Button>
                      </td>
                      <td>
                        <Button
                          color="danger"
                          size="sm"
                          onClick={() => deletePost(post.id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </>
                  ) : null}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}
export default FormReuse;
