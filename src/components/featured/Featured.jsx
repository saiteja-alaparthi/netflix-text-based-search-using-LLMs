import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import "./featured.scss"

export default function Featured({type}) {
    return (
        <div className="featured">
            <img src="https://wallpapercave.com/wp/wp4294839.jpg" alt=""/>

            <div className="info">
                <img src="https://upload.wikimedia.org/wikipedia/commons/archive/3/34/20210711133524%21Batman_Begins_logo.png" alt="" />
                <span className="desc">As a toxic threat endangers a corrupt city, Bruce Wayne finds himself at odds with a league of assassins and forced to battle more than his own demons. Directed by Christopher Nolan, this dark Batman origin story stars Christian Bale, Liam Neeson, Morgan Freeman and more.</span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                    <InfoOutlined />
                    <span>Info</span>
                    </button>
                </div>
            </div>
        </div>

    )
}