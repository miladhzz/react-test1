import React,{useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Items from './Components/Item/Items';
import Header from './Components/Common/Header';
import ItemContext from './Context/ItemContext';
import AddNewItem from './Components/Item/AddNewItem';
import MainTable from './Components/Common/MainTable';

const App=()=>{
	const [getItems, setItems]=useState([]);
	
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

	const handleNewItem = (data) => {
		//console.log("ddddd", data.name);
		const items = [...getItems];
		const item = {
			id: Math.floor(Math.random() * 1000),
			name: data.name,
			price: data.price, 
			count: data.count
		};

		if ((item.name !== '') & (item.name !== ' ')
			& item.price !== ''
			& item.count !== '') {
			items.push(item);
			setItems(items);
			toast.success('قلم مورد نظر اضافه شد', {
				position: 'bottom-center',
				autoClose: 1000,
				closeOnClick: true,
			});
		}
	};

	const saveFactor = ()=>{

		toast.success('فاکتور ذخیره شد، شماره فاکتور 123123', {
			position: 'bottom-center',			
			closeOnClick: true,
			autoClose: false,
		});
	}

	return (
			<ItemContext.Provider value={{
				items:getItems,
				handleDeleteItem:handleDeleteItem,
				handleChangeName:handleChangeName,
				handleNewItem:handleNewItem,
				
			}}>
			<div className="rtl text-center container">
				<Header appTitle="مدیریت کننده اقلام"/>
				<AddNewItem/>
				<MainTable />	
				<button className="btn btn-primary" 
					onClick={saveFactor}
					>ذخیره</button>
				<ToastContainer />
			</div>
			</ItemContext.Provider>
		);
	}
export default App;
