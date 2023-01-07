import React, { memo } from "react";
import style from "./responseComments.module.css";

type Props = {
    content: {
        comments: string;
    }
}

const ResponseComments: React.FC<Props> = (props) => {
    return (
        <div className={style["wrapper"]}>
            <h3>Comentários</h3>
            <textarea className={style["textarea"]} value={props.content.comments || ""} />
        </div>
    )
}

export default memo(ResponseComments);