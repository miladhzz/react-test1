import React,{useContext} from 'react';
import ItemContext from '../../Context/ItemContext.jsx';
import Item from './Item.jsx';

const Items=()=>{
    const context = useContext(ItemContext);
    return(
        <div>
            {context.items.map(item=>(
                <Item key={item.id} 
                name={item.name} 
                deleted={()=>context.handleDeleteItem(item.id)}
                changed={event=>context.handleChangeName(event,item.id)}
                />
            ))}
        </div> );
        };

export default Items;