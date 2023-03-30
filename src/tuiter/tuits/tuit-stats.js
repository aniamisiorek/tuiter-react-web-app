import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faRepeat,
  faShareAlt,
  faHeart
} from "@fortawesome/free-solid-svg-icons";
import {faComment, faThumbsDown} from "@fortawesome/free-regular-svg-icons";
import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = (
    {
      tuit = {
        "topic": "Space",
        "userName": "SpaceX",
        "time": "2h",
        "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
        "image": "nasa.webp",
        "liked": true,
        "replies": 123,
        "retuits": 432,
        "likes": 2345,
        "dislikes": 0,
        "handle": "@spacex",
        "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
      }
    }
) => {
  const dispatch = useDispatch();
  return(
      <div className="row mt-2">
        <div className="col-1">
        </div>
        <div className="col-2">
          <FontAwesomeIcon icon={faComment}/> {tuit.replies}
        </div>
        <div className="col-2">
          <FontAwesomeIcon icon={faRepeat}/> {tuit.retuits}
        </div>
        <div className="col-2" >
          <FontAwesomeIcon onClick={() => dispatch(updateTuitThunk({
            ...tuit,
            likes: tuit.likes + 1}))}
                           className={`bi bi-heart-fill text-danger`}
                           icon={faHeart}/> {tuit.likes}
        </div>
        <div className="col-2" >
          <FontAwesomeIcon onClick={() => dispatch(updateTuitThunk({
            ...tuit,
            dislikes: tuit.dislikes + 1}))}
                           icon={faThumbsDown}/> {tuit.dislikes}
        </div>
        <div className="col-2">
          <FontAwesomeIcon icon={faShareAlt}/>
        </div>
      </div>
  );
};
export default TuitStats;