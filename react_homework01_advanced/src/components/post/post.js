import './post.css';

const PostBlock =  ({post}) => {

    const {userId, id, title, body} = post;

    return (
         <div className="post-block">

             <div className="post-block__field">userId: {userId}</div>
             <div className="post-block__field"> Id: {id}</div>
             <div className="post-block__field">title: {title}</div>
             <div className="post-block__field">body: {body}</div>
         </div>
    );
};

export {PostBlock};
