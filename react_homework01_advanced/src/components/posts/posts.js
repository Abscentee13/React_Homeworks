import './posts.css';

import {PostBlock} from "../post/post";
import {PostData} from "../posts/postsInitData";


const PostsBlock = (userId) => {
    const {id} = userId;
    const posts = PostData(userId);

    return (
        <div id={'userPost' + id}>
            posts.map(post => <PostBlock key={'Post' + id} post={post}/>)
        </div>
    );
}

export {PostsBlock};

