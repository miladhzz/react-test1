import React,{useContext} from 'react';
import ItemContext from '../../Context/ItemContext';
import {Button} from 'react-bootstrap';

const AddNewItem = () => {
    const context=useContext(ItemContext);
    return (
        <div className="m-s p-2">
            <form
                className="form-inline justify-content-center"
                onSubmit={(event) => event.preventDefault()}
            >
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder=" اسم بهم بده "
                        onChange={context.setItem}
                        value={context.state.item}
                    />
                    <Button
                        type="submit"
                        onClick={context.handleNewItem}
                        variant={'success'}
                        className="fa fa-plus-square input-group-prepend"
                    />
                </div>
            </form>
        </div>
    )

};
export default AddNewItem;