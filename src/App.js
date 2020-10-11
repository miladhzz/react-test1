import React,{useState} from 'react';
import {Button} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import Items from './Components/Item/Items';
import Header from './Components/Common/Header';
import ItemContext from './Context/ItemContext';
import AddNewItem from './Components/Item/AddNewItem';

const App=()=>{
	const [getItems,setItems]=useState([]);
	const [getSingleItem,setSingleItem]=useState("");
	const [getShowItem,setShowItem]=useState(true);
	
	const handleShowItem = () => {
		setShowItem(!getShowItem);
	};

	const handleDeleteItem = (id) => {
		const items = [...getItems];
		const filterItems = items.filter((p) => p.id !== id);
		setItems(filterItems);

		const index = items.findIndex((i) => i.id === id);
		const item = items[index];
		toast.error(`آیتم ${item.name} با موفقیت حذف گردید`, {
			position: 'bottom-center',
			autoClose: 5000,
			closeOnClick: true,
		});
	};

	const handleChangeName = (event, id) => {
		const allItems = [...getItems];
		const itemIndex = allItems.findIndex((p) => p.id === id);
		const item = allItems[itemIndex];

		item.name = event.target.value;
		//const items = [...allItems];
		Items[itemIndex] = item;
		setItems(allItems);
	};

	const handleNewItem = () => {
		const items = [...getItems];
		const item = {
			id: Math.floor(Math.random() * 1000),
			name: getSingleItem,
		};

		if ((item.name !== '') & (item.name !== ' ')) {
			items.push(item);
			setItems(items);
			setSingleItem("");
			toast.success('قلم مورد نظر اضافه شد', {
				position: 'bottom-center',
				autoClose: 5000,
				closeOnClick: true,
			});
		}
	};

	const setItem = (event) => {
		setSingleItem(event.target.value);
	};
	
		let item = null;

		if (getShowItem) {
			item = <Items />;
		}

		return (
			<ItemContext.Provider value={{
				items:getItems,
				item:getSingleItem,
				handleDeleteItem:handleDeleteItem,
				handleChangeName:handleChangeName,
				handleNewItem:handleNewItem,
				setItem:setItem
			}}>
			<div className="rtl text-center">
				<Header appTitle="مدیریت کننده اقلام"/>
				<AddNewItem/>
				<div>
					<Button onClick={handleShowItem} variant={getShowItem ? 'info' : 'danger'}>
						نمایش و مخفی
					</Button>
				</div>
				{item}
				<ToastContainer />
			</div>
			</ItemContext.Provider>
		);
	}
export default App;
