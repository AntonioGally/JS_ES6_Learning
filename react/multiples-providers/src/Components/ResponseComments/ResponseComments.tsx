import React from "react";
import style from "./responseComments.module.css";

const ResponseComments: React.FC = () => {
    return (
        <div className={style["wrapper"]}>
            <h3>Comentários</h3>
            <textarea className={style["textarea"]} />
        </div>
    )
}

export default ResponseComments;