import {useEffect, useState} from "react";

 const PostData =  (id) =>
{
    const POSTS_URL =() => {return  'https://jsonplaceholder.typicode.com/users/' + id + '/posts'};
    const [postsData, setPosts] = useState ([]);

    useEffect(() => {
        fetch(POSTS_URL())
            .then(data => data.json())
            .then (data => setPosts(data))
    }, []);

    return (postsData);
}

export {PostData};