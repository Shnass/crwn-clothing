import React from "react";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size, linkUrl}) => {
    let history = useNavigate();
    return (
    <div className={`menu-item ${size}`} onClick={()=>{
        history(`/${linkUrl}`);
    }}>
        <div className="background-image" style={{
        backgroundImage: `url(${imageUrl})`
    }}></div>
    <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">buy now</span>
    </div>
</div>
)};

export default MenuItem;