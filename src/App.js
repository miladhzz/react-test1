import React from 'react'; 
import {Badge,Button,Alert} from 'react-bootstrap';
import Items from './Components/Item/Items';

//import 'App.css';

class App extends React.Component{

  state = {items:[],
  item:'',
  showitem:true
  };

 handleShowItem=()=>{
  this.setState({showitem:!this.state.showitem});
 }

 handleDeleteItem=id=>{
  const items=[...this.state.items];
  const filterItems=items.filter(p=>p.id!==id);

  this.setState({items:filterItems});  
 }

 handleChangeName=(event,id)=>{
  const {items:allItems}=this.state;
  const items=[...allItems];
  const itemIndex=allItems.findIndex(p=>p.id===id);
  const item=allItems[itemIndex];

  item.name=event.target.value;
  Items[itemIndex]=item;
  this.setState({items});
 }
 
 handleNewItem=()=>{
  const items=[...this.state.items];
  const item={
      id:Math.floor(Math.random()*1000),
      name:this.state.item
    };

  if (item.fullname!=="" &item.fullname!==" "){
    items.push(item);
    this.setState({items,item:""});
  }
 };

 setItem=event=>{
     this.setState({item:event.target.value});
 }
  render(){
    const {items,showitem}=this.state;
    let item=null;  
    let badgestyle='';

    if (items.length>=3)
      badgestyle="success";
    if (items.length<=2)
      badgestyle="warning";
    if (items.length<=1)
      badgestyle="danger";

    if(showitem){
        item=<Items items={items} DeleteItem={this.handleDeleteItem} changeName={this.handleChangeName}/>
      }
    
    return(
      <div className="rtl text-center">
        <Alert variant="info">
          <h2>مدیریت کننده اقلام</h2>
        </Alert>    
        <div>
          <Alert variant="light">
          تعداد اقلام  &nbsp;
            <Badge pill variant={badgestyle}>{items.length} 
            </Badge> عدد می باشد 
          </Alert>        
        </div>  
        <div className="m-s p-2">
          <form className="form-inline justify-content-center" onSubmit={event=>event.preventDefault()}>
            <div  className="input-group">
              <input type="text" className="form-control" placeholder=" اسم بهم بده " onChange={this.setItem} value={this.state.item}/>
              <Button type="submit" onClick={this.handleNewItem} variant={"success"}className="fa fa-plus-square input-group-prepend"/>
            </div>
          </form>
        </div>
        <div>
          <Button onClick={this.handleShowItem} variant={showitem ? "info":"danger"}>نمایش و مخفی</Button>
        </div>

        {item}

      </div>)
    }
}
export default App;