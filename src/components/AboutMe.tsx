import * as React from 'react'
import profile from '../assets/images/axhon-profile.jpg'
import './AboutMe.css'

const AboutMe: React.FC<{}> = () => {
    return (
        <section className="AboutMe">
            <h2>About</h2>

            <h3>Let me introduce myself.</h3>
            <img src={profile} className="Introduction-picture" />
            <p>
                I'm a Full-Stack Developer currently based on Oahu, HI.
                Currently my focus is on web-based applications built with
                Nodejs and Typescript. I also like to play music and perform on
                stage.
            </p>

            <h3>Profile</h3>
            <p>
                Born in San Salvador, El Salvador, my family emigrated to
                America while I was very young. Growing up, I was always
                performing on stage as either a musician or actor. I took the
                lessons I learned from these hobbies and use them to write more
                empathic code.
            </p>

            <h3>Skills</h3>
            <p>
                These are my top self-scored skills. You can find a more
                accurate list of my skills in my resume, or ask me on twitter!
            </p>
        </section>
    )
}

export default AboutMe
