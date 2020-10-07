import React from 'react'; 
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
    let badgestyle=[];

    if (items.length>=3)
      badgestyle.push("badge-success"); 
    if (items.length<=2)
      badgestyle.push("badge-warning"); 
    if (items.length<=1)
      badgestyle.push("badge-danger"); 

    if(showitem){
        item=<Items items={items} DeleteItem={this.handleDeleteItem} changeName={this.handleChangeName}/>
      }
    
    return(
      <div className="rtl text-center">
        <div className="alert alert-info">
          <h2>مدیریت کننده اقلام</h2>
        </div>
        <div>
          <h5 className="alert alert-light">  تعداد اقلام  &nbsp;
            <span className={`badge badge-pill ${badgestyle.join(" ")}`}>{items.length} 
            </span> عدد می باشد 
          </h5>
        </div>  
        <div className="m-s p-2">
          <form className="form-inline justify-content-center" onSubmit={event=>event.preventDefault()}>
            <div  className="input-group">
              <input type="text" className="form-control" placeholder=" اسم بهم بده " onChange={this.setItem} value={this.state.item}/>
              <button type="submit" onClick={this.handleNewItem} className="btn btn-success fa fa-plus-square input-group-prepend"/>
            </div>
          </form>
        </div>
        <div>
          <button onClick={this.handleShowItem} className={showitem ? "btn btn-info":"btn btn-danger"}>نمایش و مخفی</button>
        </div>

        {item}

      </div>)
    }
}
export default App;