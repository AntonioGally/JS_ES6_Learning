import React from "react";

const Post = (props) => {
    return (
        <>
            <article>
                <strong>{props.post.title}</strong>
                <button onClick={() => props.onRemove(props.post.id)} style={{ marginLeft: 10 }}>
                    Remover
                </button>
                <br />
                <small>{props.post.subtitle}</small>
                <br />
                Media: {props.likes / 2}
            </article>
            <br />
        </>
    )
}

export default Post;