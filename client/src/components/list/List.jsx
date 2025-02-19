import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@mui/icons-material"
import "./list.scss"
import ListItem from "../listItem/ListItem"
import { useRef, useState } from "react";

export default function List({list}) {
  const [isMoved, setMoved] = useState(false)
  const [slideNum, setSlideNum] = useState(0)

  const listRef = useRef()

  const handleClick = (direction) => {
    setMoved(true)
    let s = listRef.current.getBoundingClientRect().x - 50
    if (direction === "left" && slideNum>0) {
      setSlideNum(slideNum-1)
      listRef.current.style.transform = `translateX(${230 + s}px)`
    }
    if (direction === "right" && slideNum < 5) {
      setSlideNum(slideNum+1)
      listRef.current.style.transform = `translateX(${-230 + s}px)`
    }
  }
  return (
    <div className="list">
      <span className="listTitle">{list.title}</span>
      <div className="wrapper">
        <ArrowBackIosOutlined className="sliderArrow left" onClick={() => handleClick("left")} style={{display :!isMoved && "none"}}/>
        <div className="container" ref={listRef}> 
          {list.content.map((item, index) => (
            <ListItem index={index} item={item}/>
          ))}
          
        </div>
        <ArrowForwardIosOutlined className="sliderArrow right" onClick={() => handleClick("right")} />
      </div>
    </div>
  );
}
