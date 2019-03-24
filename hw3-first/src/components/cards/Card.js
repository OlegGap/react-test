import React, { Fragment } from "react";

const Card = ({ imgUrl, preTitle, title, content }) => (
    <Fragment>
    <img src={imgUrl} alt={title}/>
    <p>{preTitle}</p>
    <h2>{title}</h2>
    <p>{content}</p>
    </Fragment>
);

export default Card;
