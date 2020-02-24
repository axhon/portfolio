import * as React from 'react'
import profile from '../assets/images/axhon-profile.jpg'
import './AboutMe.scss'

const AboutMe: React.FC<{}> = () => {
    return (
        <section className="AboutMe">
            <h2>About</h2>

            <div className="About">
                <div className="About-introduction">
                    <h3>Let me introduce myself.</h3>
                    <img src={profile} className="Introduction-picture" />
                    <p>
                        I&apos;m a Software Engineer based in Boston, MA.
                        Currently, I&apos;m working for{' '}
                        <a href="https://wikipedia.org/wiki/wayfair">Wayfair</a>{' '}
                        building out their UI on multiple customer-facing pages.
                        Professional Bug Squasher. I also like to play music and
                        perform on stage.
                    </p>
                </div>

                <div className="About-profile">
                    <h3>Profile</h3>
                    <p>
                        Born in San Salvador, El Salvador, my family emigrated
                        to America while I was very young. Growing up, I was
                        always performing on stage as either a musician or
                        actor. I took the lessons I learned from these hobbies
                        and use them to write more empathic code.
                    </p>
                </div>

                <div className="About-skills">
                    <h3>Skills</h3>
                    <p>I work with these technologies regularly:</p>
                    <ul>
                        <li>Javascript/Typescript</li>
                        <li>React</li>
                        <li>Node</li>
                        <li>PHP</li>
                        <li>GraphQL</li>
                    </ul>
                </div>

                <a
                    className="About-resume"
                    href="https://resume.creddle.io/resume/i0ynygosl1u"
                >
                    Download Resume
                </a>
            </div>
        </section>
    )
}

export default AboutMe
