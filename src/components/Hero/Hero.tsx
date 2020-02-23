import * as React from 'react'
import { SocialIcon } from 'react-social-icons'
import './Hero.css'

const Hero: React.FC<{}> = () => {
    return (
        <header className="Hero">
            <div className="Hero-overlay" />
            <div className="Hero-copy">
                <h1 className="Hero-title">Hello, world.</h1>
                <p className="Hero-intro">I&apos;m Axhon Ruiz-Gonzalez.</p>
                <p className="Hero-subtitle">Software Engineer</p>
            </div>

            <ul>
                <li>
                    <SocialIcon
                        url="https://www.github.com/axhon"
                        fgColor="#111"
                        bgColor="#fff"
                    />
                </li>
                <li>
                    <SocialIcon
                        url="https://www.linkedin.com/in/axhon-ruiz"
                        fgColor="#fff"
                        bgColor="#111"
                    />
                </li>
            </ul>
        </header>
    )
}

export default Hero
