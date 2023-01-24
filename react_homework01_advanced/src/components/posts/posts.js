import './posts.css';

import {PostBlock} from "../post/post";
import {PostData} from "./postsInitData";


const PostsBlock = (userId) => {

    const {id} = userId;

    const posts = PostData(id);

    return (
        <div id={'userPost' + id} className="posts-container">
            POSTS
            {
                posts.map(post => <PostBlock key={post.id} post={post}/>)
            }
        </div>
    );
}

export {PostsBlock};

