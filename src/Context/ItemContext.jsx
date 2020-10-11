import { createContext } from 'react';

const ItemContext = createContext({
    items: [],
    item:"",
    handleDeleteItem: () => { },
    handleChangeName: () => { },
    handleNewItem: () => { },
    setItem: () => { }
});

export default ItemContext;