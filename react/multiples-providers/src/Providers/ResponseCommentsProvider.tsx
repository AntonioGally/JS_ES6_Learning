import React from "react";
import { useAppSelector } from "../store/hooks";

type comments = {
    content: {
        comments: string;
    }
}
type Props = {
    element: React.FC<comments>;
}

const ResponseCommentsProvider: React.FC<Props> = ({ element }) => {
    
    const { comments } = useAppSelector(selector => selector.response);

    return (
        <>
            {React.createElement(element, {
                content: {
                    comments: comments
                }
            })}
        </>
    )
}

export default ResponseCommentsProvider;