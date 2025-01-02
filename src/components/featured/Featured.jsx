import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import "./featured.scss"

export default function Featured({type}) {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                <span>{type === "movie" ? "Movies" : "TV Shows"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    {type === "movie" ? (
                        <>
                            <option value="action">Action</option>
                            <option value="anime">Anime</option>
                            <option value="children">Children & Family</option>
                            <option value="classics">Classics</option>
                            <option value="comedy">Comedies</option>
                            <option value="crime">Crime</option>
                            <option value="cult">Cult</option>
                            <option value="documentry">Documentaries</option>
                            <option value="drama">Drama</option>
                            <option value="faith">Faith & Spirituality</option>
                            <option value="fantasy">Fantasy</option>
                            <option value="fresh">Fresh Perspectives</option>
                            <option value="holidays">Holidays</option>
                            <option value="horror">Horror</option>
                            <option value="independent">Independent</option>
                            <option value="international">International</option>
                            <option value="lgbtq">LGBTQ</option>
                            <option value="music">Music & Musicals</option>
                            <option value="romance">Romance</option>
                            <option value="scifi">Sci-Fi</option>
                            <option value="shorts">Shorts</option>
                            <option value="sports">Sports</option>
                            <option value="standup">Stand-Up Comedy</option>
                            <option value="thriller">Thriller</option>
                        </>
                    ) : (
                        <>
                            <option value="action">Action</option>
                            <option value="AMC">AMC Collection</option>
                            <option value="anime">Anime Series</option>
                            <option value="british">British</option>
                            <option value="classic">Classic & Cult</option>
                            <option value="comedy">Comedies</option>
                            <option value="crime">Crime</option>
                            <option value="docuseries">Docuseries</option>
                            <option value="drama">Dramas</option>
                            <option value="holidays">Holidays</option>
                            <option value="horror">Horror</option>
                            <option value="international">International</option>
                            <option value="kdrama">K-Dramas</option>
                            <option value="kids">Kids</option>
                            <option value="lgbtq">LGBTQ</option>
                            <option value="mystery">Mysteries</option>
                            <option value="reality">Reality</option>
                            <option value="romance">Romance</option>
                            <option value="scifi">Scifi & Fantasy</option>
                            <option value="science">Science & Nature</option>
                            <option value="spanish">Spanish-Language</option>
                            <option value="stanup">Stand-Up & Talk Shows</option>
                            <option value="teen">Teen</option>
                            <option value="thriller">Thriller</option>
                        </>
                    )}
                </select>
            </div>
            )}
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



