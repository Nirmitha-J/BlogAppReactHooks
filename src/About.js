import { Container, Button } from "reactstrap";

function About(props) {
    const goBack = () =>{
        props.history.goBack();
     
    }
    return(
        <Container>
               <div style={{textAlign: 'right', marginTop: 40}}>
               <Button color="link" onClick={goBack}>Go Back</Button>
               </div>
            <div style={{border: "1px solid grey", padding: '20px',color: 'white', backgroundColor: 'black'}}>
                <p>React Hook CRUD App for "Blog Posts"</p>
                <p>Author:  Nirmitha Jalagani</p>

            </div>
        </Container>

    )
}

export default About;