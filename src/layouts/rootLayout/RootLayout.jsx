import { Link } from 'react-router-dom'
import './rootLayout.css'

const RootLayout = () => {
    return (
        <div className='rootLayout'>
            <header>
                <Link to={"/"}>
                    <img src='/logo.png' />
                    <span>Chat GPT</span>
                </Link>
            </header>
        </div>
    )
}

export default RootLayout