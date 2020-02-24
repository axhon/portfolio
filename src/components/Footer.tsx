import * as React from 'react'
import { SocialIcon } from 'react-social-icons'
import './Footer.scss'

const Footer: React.FC<{}> = () => {
    return (
        <footer className="Footer">
            <h2>Contact Me</h2>

            <p>I&apos;d Love To Hear From You.</p>

            <ul>
                <li>
                    <SocialIcon
                        url="https://twitter.com/axhon"
                        bgColor="#151515"
                        fgColor="#fff"
                    />

                    <p>@axhon</p>
                </li>
                <li>
                    <SocialIcon
                        url="mailto:axhonruiz@gmail.com"
                        bgColor="#151515"
                        fgColor="#fff"
                    />
                </li>
                <li>
                    <SocialIcon
                        url="https://github.com/axhon"
                        bgColor="#151515"
                        fgColor="#fff"
                    />

                    <p>@axhon</p>
                </li>
            </ul>

            <p>
                &#169; {new Date(Date.now()).getFullYear()} Axhon Ruiz-Gonzalez
            </p>
        </footer>
    )
}

export default Footer
