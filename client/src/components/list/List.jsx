import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons"
import "./list.scss"
import ListItem from "../listItem/ListItem"
import { useRef, useState } from "react";

export default function List() {
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
      <span className="listTitle">Continue Watching</span>
      <div className="wrapper">
        <ArrowBackIosOutlined className="sliderArrow left" onClick={() => handleClick("left")} style={{display :!isMoved && "none"}}/>
        <div className="container" ref={listRef}>
          <ListItem index={0}/>
          <ListItem index={1} />
          <ListItem index={2}/>
          <ListItem index={3}/>
          <ListItem index={4}/>
          <ListItem index={5}/>
          <ListItem index={6}/>
          <ListItem index={7}/>
          <ListItem index={8}/>
          <ListItem index={9}/>
          <ListItem index={10}/>
          <ListItem index={11}/>
          <ListItem index={12}/>
          <ListItem index={13}/>
          
        </div>
        <ArrowForwardIosOutlined className="sliderArrow right" onClick={() => handleClick("right")} />
      </div>
    </div>
  );
}
