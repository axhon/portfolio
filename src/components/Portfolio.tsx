import * as React from 'react'
import krPic from '../assets/images/knowledgerocket_app.png'
import bassDrumPic from '../assets/images/bass_drum_sticker.png'
import './Portfolio.scss'

interface WorkProps {
    url: string
    imgUrl: string
}

const Work: React.FC<WorkProps> = ({ url, imgUrl }) => {
    return (
        <a href={url} className="Work">
            <img src={imgUrl} />
        </a>
    )
}

const Portfolio: React.FC<{}> = () => {
    return (
        <section className="Portfolio">
            <h2>Portfolio</h2>

            <h3>Check out some of my works.</h3>

            <div className="Works">
                <div className="Works-one">
                    <Work imgUrl={krPic} url="https://knowledgerocket.app" />
                </div>
                <div className="Works-two">
                    <Work
                        imgUrl={bassDrumPic}
                        url="https://soundcloud.com/whereszach/sets"
                    />
                </div>
                <div className="Works-three">
                    <iframe
                        src="https://www.youtube.com/embed/I_miH3fBdwg"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    )
}

export default Portfolio
