import {useLocation} from 'react-router-dom'
function Nomatch(props) {
    console.log(props)
   const history = useLocation();
    return(
        <div style={{marginTop: 200}}>
        <p>No match found for {history.pathname}</p>
        </div>
    )
}

export default Nomatch;