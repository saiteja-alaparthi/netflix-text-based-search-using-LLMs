import "./listItem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import { useState } from "react";

export default function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://www.istockphoto.com/video/halloween-and-bats-gm472770455-14423283?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_video_sponsored_ratiochange&utm_content=https%3A%2F%2Fpixabay.com%2Fvideos%2Fsearch%2Fbatman%2520tariler%2F&utm_term=batman+tariler";
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg"
        alt=""
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay loop muted/>
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>2 hour 32 mins</span>
              <span className="limit">PG-13</span>
              <span>2008</span>
            </div>
            <div className="desc">
            Batman, Lieutenant Gordon and District Attorney Harvey Dent go up against the Joker, a criminal mastermind in ghoulish makeup terrorizing Gotham City.
            </div>
            <div className="genre">Action & Adventure</div>
          </div>
        </>
      )}
    </div>
  );
}