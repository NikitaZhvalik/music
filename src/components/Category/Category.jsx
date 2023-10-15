import React from "react";
import { useParams } from "react-router-dom";

import style from "./style.module.css"

const Category = () => {
    const params = useParams()

    return (
        <h1 className={style.title}>Category: {params.id}</h1>
    );
}
 
export default Category;