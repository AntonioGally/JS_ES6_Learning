import React, { useState } from "react";
import Header from "./Header"
import Post from "./Post";

const App = () => {
    const [posts, setPosts] = useState([
        { id: Math.random(), likes: 10, title: "post 1", subTitle: "subtitle1" },
        { id: Math.random(), likes: 15, title: "post 2", subTitle: "subtitle2" },
        { id: Math.random(), likes: 20, title: "post 3", subTitle: "subtitle3" },
    ]);

    function handleRefresh() {
        setPosts((prevState) => [
            ...prevState,
            {
                id: Math.random(),
                title: `Title#0${prevState.length + 1}`,
                subTitle: `Sub#0${prevState.length + 1}`,
                likes: 50
            }
        ])
    }

    function handleRemovePost(postId) {
        setPosts((prev) => prev.filter((post) => post.id !== postId))
    }

    return (
        <>
            <Header>
                <h2>
                    Posts da semana
                    <button onClick={handleRefresh} style={{ marginLeft: 10 }}>
                        Atualizar
                    </button>
                </h2>
            </Header>
            {posts.map((postObj) => (
                <Post key={postObj.id}
                    likes={postObj.likes}
                    post={{ title: postObj.title, subTitle: postObj.subTitle, id: postObj.id }}
                    onRemove={handleRemovePost}
                />
            ))}
        </>
    )
}

export default App

/*
likes: 1,
post: {
    title: asd,
    subtitle: asd
}
*/