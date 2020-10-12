import React from 'react';
import axios from "axios";
import { toast } from "react-toastify";
import { Alert } from 'react-bootstrap';

class Search extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
            factor: [],
            name: "",
        }
        this.handleSubmitButton = this.handleSubmitButton.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(){

    }

    handleSubmitButton(){

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
                    //console.log('factor', this.state.factor);
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
        const style = {margin: 10,};

        return(
        <div className="rtl text-center container">
            <Alert variant="info">
				<h2>جستجو</h2>
			</Alert>
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
                            onChange={this.handleChange}
                            value={this.state.name}
                            required
                        />
                    </label>
                                    
                    <button
                        type="submit"
                        onClick={this.handleSubmitButton}
                        variant={'success'}
                        className="btn btn-primary"
                        style={style}
                    >
                        جستجو
                    </button>
                </div>
            </form>
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
