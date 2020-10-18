import React,{useContext, useState,useRef,useEffect} from 'react';
import ItemContext from '../../Context/ItemContext';
import {Button} from 'react-bootstrap';

const AddNewItem = () => {
    const [row, setState]=useState(
        {
            name:"",
            price:"",
            quantity:""            
        }
    );
    
    const focusInput=useRef(null);
    const context=useContext(ItemContext);
    const style = {margin: 10,}
    
    useEffect(() => {
       focusInput.current.focus();
    })

    const handleChange= (event)=> {
        const value = event.target.value;
        setState({
          ...row,
          [event.target.name]: value
        });
      }
    
    const handleSubmitButton = ()=>
    {
        context.handleNewItem(row);
    }

    return (
        <div className="m-s p-2">
            <form
                className="form-inline justify-content-center"
                onSubmit={(event) => event.preventDefault()}
            >
                <div className="input-group">
                    <label>
                        نام کالا:
                        <input
                            type="text"
                            className="form-control"
                            placeholder="نام کالا"  
                            name="name"
                            onChange={handleChange}
                            value={row.name}
                            ref={focusInput}
                            required
                        />
                    </label>
                    <label>
                        قیمت:
                        <input
                            type="number"
                            className="form-control"
                            placeholder="قیمت"
                            name="price"
                            onChange={handleChange}
                            value={row.price}
                            required                           
                        />
                    </label>
                    <label>
                        تعداد:
                        <input
                            type="number"
                            className="form-control"
                            placeholder="تعداد"
                            name="quantity"
                            onChange={handleChange}
                            value={row.quantity}
                            required                           
                        />
                    </label>
                    
                    <Button
                        type="submit"
                        onClick={handleSubmitButton}
                        variant={'success'}
                        className="fa fa-plus-square"
                        style={style}
                    />
                </div>
            </form>
        </div>
    )

};
export default AddNewItem;