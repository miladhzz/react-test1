import React from 'react';
import {Button} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import Items from './Components/Item/Items';
import Header from './Components/Common/Header';
import ItemContext from './Context/ItemContext';
import AddNewItem from './Components/Item/AddNewItem';

//import 'App.css';

class App extends React.Component {
	state = { items: [], item: '', showitem: true, appTitle:"مدیریت کننده اقلام" };

	handleShowItem = () => {
		this.setState({ showitem: !this.state.showitem });
	};

	handleDeleteItem = (id) => {
		const items = [...this.state.items];
		const filterItems = items.filter((p) => p.id !== id);
		this.setState({ items: filterItems });

		const index = items.findIndex((i) => i.id === id);
		const item = items[index];
		toast.error(`آیتم ${item.name} با موفقیت حذف گردید`, {
			position: 'bottom-center',
			autoClose: 5000,
			closeOnClick: true,
		});
	};

	handleChangeName = (event, id) => {
		const { items: allItems } = this.state;
		const items = [...allItems];
		const itemIndex = allItems.findIndex((p) => p.id === id);
		const item = allItems[itemIndex];

		item.name = event.target.value;
		Items[itemIndex] = item;
		this.setState({ items });
	};

	handleNewItem = () => {
		const items = [...this.state.items];
		const item = {
			id: Math.floor(Math.random() * 1000),
			name: this.state.item,
		};

		if ((item.name !== '') & (item.name !== ' ')) {
			items.push(item);
			this.setState({ items, item: '' });
			toast.success('قلم مورد نظر اضافه شد', {
				position: 'bottom-center',
				autoClose: 5000,
				closeOnClick: true,
			});
		}
	};

	setItem = (event) => {
		this.setState({ item: event.target.value });
	};
	
	render() {
		const { items, showitem } = this.state;
		let item = null;

		if (showitem) {
			item = <Items />;
		}

		return (
			<ItemContext.Provider value={{
				state:this.state,
				handleDeleteItem:this.handleDeleteItem,
				handleChangeName:this.handleChangeName,
				handleNewItem:this.handleNewItem,
				setItem:this.setItem
      }}>
				<div className="rtl text-center">
					<Header/>
					<AddNewItem/>
					<div>
						<Button onClick={this.handleShowItem} variant={showitem ? 'info' : 'danger'}>
							نمایش و مخفی
						</Button>
					</div>
					{item}
					<ToastContainer />
				</div>
			</ItemContext.Provider>
		);
	}
}
export default App;
