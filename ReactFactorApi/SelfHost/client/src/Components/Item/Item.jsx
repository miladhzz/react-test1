import React from 'react';
import propTypes from 'prop-types';

const Item=({name,deleted,changed})=>{
    return(
        <div className="card text-white bg-info mb-2 mt-3 mx-auto w-25">
            <div className="card-body">
                <p className="d-block">{name}</p>
                <div className="input-group justify-content-center">
                    <input type="Text" className="form-control" placeholder={name} onChange={changed}/>
                    <div className="input-group-prepend">
                        <button onClick={deleted} className="fa fa-trash btn btn-danger"/>
                    </div>
                </div>
            </div>
        </div>);
        }
Item.propTypes={
    name: propTypes.string,
    deleted: propTypes.func,
    changed: propTypes.func
}
export default Item;