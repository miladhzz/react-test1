import React,{ createContext } from 'react';

const ItemContext = createContext({
    state: {},
    handleDeleteItem: () => { },
    handleChangeName: () => { },
    handleNewItem: () => { },
    setItem: () => { }
});

export default ItemContext;