import { useHistory } from 'react-router-dom'
import blog_image from '../assets/images/blog_image.png'
const Blog = () => {
  const history = useHistory()
  return (
    <div className="blog">
      <div className="blog__image">
        <img src={blog_image} alt="" />
      </div>
      <div className="blog__body" onClick={() => history.push('/blog/091th0')}>
        <p className="blog__date">January 01, 2020</p>
        <h4 className="blog__title">An Open Call to Artists</h4>
        <p className="blog_description">
          Short descriptip/summary of the blog will go here.... lorem isum lorem
          isum lorem isum lorem isum lorem isum lorem isum lorem isum
        </p>
      </div>
    </div>
  )
}

export default Blog
