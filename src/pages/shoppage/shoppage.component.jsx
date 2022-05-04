import React from "react";
import SHOP_DATA from "./shoppage.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component.jsx";

class ShopPage extends React.Component{
    constructor(){
        super();

        this.state = {
            catalog: SHOP_DATA 
        }
    }

    render(){
        return(
            <div>{
                this.state.catalog.map(({id, ...OtherProps})=>(
                    <CollectionPreview key={id} {...OtherProps}/>
                ))    
            }</div>
        )
    }
}

export default ShopPage;