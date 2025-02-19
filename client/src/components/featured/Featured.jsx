import { InfoOutlined, PlayArrow } from "@mui/icons-material"
import "./featured.scss"
import { useState, useEffect } from "react";

export default function Featured({type}) {
    const [content, setContent] = useState({});

    useEffect(() => {
        const getRandomContent = async () => {
            try {
                const res = await axios.get(`/movies/random?type=${type}`, {
                    headers: {
                        token: `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`,
                }, 
            });
            setContent(res.data[0]);
            } catch (err) {
                console.log(err);
            }
        };
        getRandomContent();
    }, [type]);

    return (
        <div className="featured">
            {type && (
                <div className="category">
                <span>{type === "movies" ? "Movies" : "TV Shows"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    {type === "movies" ? (
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
            <img src={content.img} alt=""/>

            <div className="info">
                <img src={content.imgTitle} alt="" />
                <span className="desc">{content.desc}</span>
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



