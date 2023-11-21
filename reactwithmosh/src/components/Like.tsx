import { FaHeart } from "react-icons/fa";
import { useState } from "react";

interface LikeProps {
  size?: number; // Define size as an optional number prop
}

function Like({ size = 24 }: LikeProps) {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <>
      <FaHeart
        size={size}
        onClick={toggleLike}
        style={{ cursor: "pointer", color: liked ? "red" : "inherit" }}
      />
    </>
  );
}

export default Like;
