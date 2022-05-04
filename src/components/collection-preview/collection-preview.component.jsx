import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import './collection-preview.styles.scss';


const CollectionPreview = ({title, items}) => (
    <div className="collection-preview">
        <div className="title">{title}</div>
        <div className="preview">
            {
                items
                    .filter((item,idx)=>idx<4)
                    .map(item=>(
                        <CollectionItem 
                            key={item.id} 
                            name={item.name} 
                            price={item.price} 
                            imageUrl={item.imageUrl}
                        />
                    ))
            }
        </div>
    </div>
)

export default CollectionPreview;