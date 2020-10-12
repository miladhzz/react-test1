import { createContext } from 'react';

const ItemContext = createContext({
    items: [],
    item:"",
    handleDeleteItem: () => { },
    handleChangeName: () => { },
    handleNewItem: () => { },
    setItem: () => { },   
    row : {
        name:"",
        price:"",
        count:"" 
    } 
});

export default ItemContext;