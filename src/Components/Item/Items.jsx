import React from 'react';
import Item from './Item.jsx';

const Items=({items,DeleteItem,changeName})=>{
    return(
        <div>
            {items.map(item=>(
                <Item key={item.id} 
                name={item.name} 
                deleted={()=>DeleteItem(item.id)}
                changed={(event)=>changeName(event,item.id)}
                />
            ))}
        </div> );
        };

export default Items;