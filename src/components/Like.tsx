import { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

interface Props {
  onClick: () => void
}
const Like = ({ onClick }: Props) => {
  const [liked, setLiked] = useState(false)

  const toggleLike = ()=>{
    setLiked(!liked)
    onClick()
  }

  return (
    <div onClick={toggleLike}>
      {liked ? <FaHeart color='#ff6b81' size='40px' /> : <FaRegHeart color='#ff6b81' size='40px' />}
    </div>
  )
}

export default Like
