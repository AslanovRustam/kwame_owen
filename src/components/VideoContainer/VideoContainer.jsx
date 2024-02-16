import s from "./videoContainer.module.css";
import comment from "../../images/comment.png";

const VideoContainer = () => {
  return (
    <div className={s.container}>
      image/Video{" "}
      <div className={s.wrapper}>
        <img className={s.image} src={comment} alt="comment" />
      </div>
    </div>
  );
};

export default VideoContainer;
