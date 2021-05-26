import react, { useState, useEffect } from "react";
import axios from "axios";
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
  Spinner,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  NavLink,
  useParams,
  Redirect,
} from "react-router-dom";
import FormReuse from "./FormReuse";

const API_URL = "https://jsonplaceholder.typicode.com/posts";
function Posts(props) {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getPosts();
  }, []);

  const goBack = () => {
    props.history.goBack();
  };

  const getPosts = async () => {
    const { data } = await axios.get(API_URL);
    setPosts(data);
    setIsLoading(false);
  };


  return (
    <>
      {isLoading ? (
        <div style={{ marginTop: "20%" }}>
          {" "}
          <Spinner
            style={{ width: "3rem", height: "3rem" }}
            color="info"
          />{" "}
        </div>
      ) : (
        <Container>
            <div style={{textAlign: 'right', marginTop: '8%'}}>
        <Button color="link" onClick={goBack}>Go Back</Button>
        
        </div>
          <FormReuse isEdit="false"></FormReuse>
        </Container>
      )}
    </>
  );
}

export default Posts;
