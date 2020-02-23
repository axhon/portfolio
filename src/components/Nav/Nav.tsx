import * as React from 'react'
import { Link } from 'gatsby'

const Nav: React.FC = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/page-2">page 2</Link>
            </li>
        </ul>
    </nav>
)

export default Nav
