import "./feed.css"
import Post from '../post/Post'
import Share from '../share/Share'
import { Posts } from '../../dummyData'

export default function Feed() {
  return (
    <div className='feedWrap'>
      <Share />
      {Posts.map((p) => (
        <Post key={p.id} post={p} />
      ))}

    </div>
  )
}
