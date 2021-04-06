import React from 'react';
import Lol from './MyPosts.module.css'
import Post from './Post/Post.jsx'
const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);


  let newPostElement = React.createRef();
 let addPost = () => {
   let text = newPostElement.current.value;
   props.addPost(text);
 }
  return (
      <div>
       My post
      <div>
        <textarea ref ={newPostElement}></textarea>
        <button onClick = { addPost}>Add post</button>
        </div>
        <div className={Lol.posts}>
         {postsElements}
      </div>
    </div>
  )
}
export default MyPosts;
