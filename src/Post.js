import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
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
    Spinner
} from "reactstrap";
import Comment from './Comment'
import UserInfo from './UserInfo'

import axios from 'axios';
function Post(props) {
    const params = useParams();
    console.log(props)
    
    console.log(params);
    const API_URL = 'https://jsonplaceholder.typicode.com/posts/'
    const [selectedPost, setSelectedPosts] = useState({});
    const [comments, setComments] = useState([]);
    const [userInfo, setUserInfo] = useState({});
  
  
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        getDetailedPost();
    }, []);

    const getDetailedPost = async () => {
        const { data } = await axios.get(API_URL + params.id);
        setSelectedPosts(data);
        setIsLoading(false)

        
        console.log(selectedPost);
    }

    const goBack = () =>{
        props.history.goBack();
    }

    const getComments =  async () => {
        
            const { data } = await axios.get(
              `https://jsonplaceholder.typicode.com/comments?postId=${selectedPost.id}`
            );
           setComments(data)
           setUserInfo({});
           console.log(comments)
    }



    const getUserInfo =  async () => {
        
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${selectedPost.userId}/`
        );
       setUserInfo(data)
       setComments([])
       console.log(userInfo)
}

    

  
    

    return (
        
     
       
        
            <Container>
               {/* <div style={{textAlign: 'right', marginTop: '10%'}}>
        <Button color="link" onClick={goBack}>Go Back</Button>
        
        </div> */}

        {isLoading ? 
        (<div style={{ marginTop: '20%' }}> <Spinner style={{ width: '3rem', height: '3rem' }} color="info" />{' '} </div>) : 
            
            
            
            (<div >
            
                      <div style={{textAlign: 'right', marginTop: '10%'}}>
        <Button color="link" onClick={goBack}>Go Back</Button>
        
        </div>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>User ID</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th colspan="4">Actions</th>
                    </tr>
                </thead>
                <tbody>


                    <tr>
                        <th scope="row">{selectedPost.id}</th>
                        <td>{selectedPost.userId}</td>
                        <td>{selectedPost.title}</td>
                        <td>{selectedPost.body}</td>
                        <td>
              
                            <Button
                                color="primary"
                                size="sm"
                                type="submit"
                            >
                                <Link
                                    to={{
                                        pathname: `/posts/edit/${selectedPost.id}`,
                                        state: {
                                            selPost: selectedPost,
                                            isEdit: true
                                        },
                                    }}
                                    style={{ textDecoration: 'none', color: 'white' }}
                                >
                                    Edit
                                </Link>


                            </Button>
                            </td>
                            <td>

                            <Button
                            color="primary"
                            size="sm"
                            onClick={getComments}
                          >
                           Comment
                          </Button>


                        </td>

                        <td>

                            <Button
                            color="primary"
                            size="sm"
                            onClick={getUserInfo}
                          >
                           UserInfo
                          </Button>


                        </td>
                    </tr>


                </tbody>
            </Table>
            </div>)}

            {comments.length > 0 ? (<Comment comments={comments}></Comment>) : null}
            {(Object.entries(userInfo).length) !== 0 ?( <UserInfo userInfo={userInfo}></UserInfo>) : null}
    
           
        </Container>
    )
}

export default Post;