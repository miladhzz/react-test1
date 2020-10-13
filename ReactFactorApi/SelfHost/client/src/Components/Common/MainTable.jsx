import React,{useContext} from 'react';
import ItemContext from '../../Context/ItemContext.jsx';

const MainTable = ()=> {
    const context = useContext(ItemContext);

    return (

        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <td>
                            ردیف
                        </td>
                        <td>
                            عنوان
                        </td>
                        
                        <td>
                            قیمت
                        </td>

                        <td>
                            تعداد
                        </td>
                        
                    </tr>
                </thead>
                <tbody>                            
                    {context.items.map((item, i) => (
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                        </tr>
                        ))}       
                </tbody>

            </table>
        </div>

    );

}

export default MainTable;