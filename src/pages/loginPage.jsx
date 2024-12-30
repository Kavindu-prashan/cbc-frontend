
import "./loginPage.css"
import {Link} from 'react-router-dom'


export default function LoginPage() {
    return(
        <div>
            <h1>Login Page</h1>
            <input type="text" placeholder="Enter Your Name"/>
            <input type="Password" placeholder="Enter Your Password" />
            <button>Login</button>
            <Link to="/">Home</Link>

        </div>
    )
}