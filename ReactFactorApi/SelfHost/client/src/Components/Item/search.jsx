import React from 'react';
import axios from "axios";
import { toast } from "react-toastify";
import { Alert } from 'react-bootstrap';

class Search extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
            factor: [],
            Id: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event){
        this.setState({Id: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();     
        axios
            .get(
                "http://localhost:3001/api/factor/SearchFactor", {
                    params: {
                      id: this.state.Id
                    }}
            )
            .then(({ data, status }) => {
                if (status === 200) {
                    const fact = data.map(obj => (
                        {
                            id: obj.Id, 
                            CreateDate: obj.CreateDate,                            
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
                            CreateDate: obj.CreateDate
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
                onSubmit={this.handleSubmit}
            >
            <div className="input-group">
                    <label>
                        شماره فاکتور:
                        <input
                            type="text"
                            className="form-control"
                            placeholder="شماره فاکتور"  
                            name="Id"
                            onChange={this.handleChange}
                            value={this.state.Id}
                            
                        />
                    </label>
                                    
                    <button
                        type="submit"
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
                            تاریخ
                        </td>
                        
                       
                        
                    </tr>
                </thead>
                <tbody>     
                    {this.state.factor.map((item, i) => (
                        <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.CreateDate}</td>                            
                        </tr>
                        ))}       
                </tbody>

            </table>
        </div>
        );}
}

export default Search;
