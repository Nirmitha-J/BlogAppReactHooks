import logo from './logo.svg';
import './App.css';
import Common from './Common'
import Posts from './Posts'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  NavLink,
  useParams,
  Redirect
  
} from "react-router-dom";
import Home from './Home'
import NoMatch from './NoMatch';
import Post from './Post';
import FormReuse from './FormReuse';
import About from './About';



function App() {
  return (
    
    <div className="App">
      
      <BrowserRouter>
              <div style={{backgroundColor: 'black', height: 40, textAlignLast: 'left', width: '100%', top: 0}}>
              <NavLink activeStyle={{color: 'red'}} className="navLink" to="/home/" >HOME</NavLink>
          
              <NavLink activeStyle={{color: 'red'}} className="navLink" to="/about/" >ABOUT</NavLink>
            
              <NavLink activeStyle={{color: 'red'}} className="navLink" to="/posts/" >POSTS</NavLink>
              </div>
              <Switch>
              <Route exact path='/'>
              <Redirect to="/home" />
              </Route>
              <Route path='/home' component={Home}/>
              <Route exact path='/about' component={About}/>
              <Route exact path='/posts' component={Posts}/>
              <Route exact path='/posts/:id' component={Post}/>
              <Route eaxct path='/posts/edit/:id' component={FormReuse}/>
              <Route path="*">
               <NoMatch />
          </Route>
         
              </Switch>
             
          
      </BrowserRouter>


  <div className="footer" style={{textAlign: 'center',  bottom: '0', width: '100%', height: '30px', backgroundColor: 'black', color: 'white', position: 'scroll', marginTop: '30px',  zIndex: 1}}>
    © 2021 Copyright
    
  </div>

    </div>
  
  );
}

export default App;
