import { Link } from 'react-router-dom'
import './homepage.css'

const HomePage = () => {
    return (
        <div className='homePage'>
            <Link to={"/dashboard"}>Dashboard</Link>
        </div>
    )
}

export default HomePage