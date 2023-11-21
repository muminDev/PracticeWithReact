import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";

interface LikeProps {
  size?: number; // Define size as an optional number prop
}

function Like({ size = 24 }: LikeProps) {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  if (liked === true) {
    return (
      <>
        <FaHeart
          size={size}
          onClick={toggleLike}
          style={{ cursor: "pointer", color: "red" }}
        />
      </>
    );
  } else {
    return (
      <>
        <FaRegHeart
          size={size}
          onClick={toggleLike}
          style={{ cursor: "pointer" }}
        />
      </>
    );
  }
}

export default Like;
