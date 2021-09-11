import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Like = ({ isLike, onToggleLike }) => {
  const Icon = isLike ? AiFillHeart : AiOutlineHeart;
  return <Icon className='react-icon' onClick={onToggleLike} />;
};

export default Like;
