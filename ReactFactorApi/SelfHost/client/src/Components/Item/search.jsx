import React from 'react';
import axios from "axios";
import { toast } from "react-toastify";

class Search extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
            factor: [],
        }
    }
    
    componentDidMount(){
        axios
            .get(
                "http://localhost:3001/api/factor/GetFactor",
            )
            .then(({ data, status }) => {
                if (status === 200) {
                    const fact = data.map(obj => (
                        {
                            id: obj.Id, 
                            name: obj.Name,
                            price: obj.Price, 
                            quantity: obj.Quantity,
                        }));
                    this.setState({factor:fact});
                    console.log('factor', this.state.factor);
                }
            })
            .catch(ex => {
                toast.error("مشکلی پیش آمده.", {
                    position: "top-right",
                    closeOnClick: true
                });
                console.log(ex);
            });
    }
   
    render() {
        return(
        <div className="rtl text-center container">
            <div>
                جستجو
            </div>
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
                    {this.state.factor.map((item, i) => (
                        <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                        </tr>
                        ))}       
                </tbody>

            </table>
        </div>
        );}
}

export default Search;
