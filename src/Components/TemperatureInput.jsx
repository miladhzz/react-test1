import React from 'react'


const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };

class TemperatureInput extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {
            temperature : '',
        }

        this.handleTemp = this.handleTemp.bind(this);
    }

    handleTemp(event){
        this.props.onTemperatureChange(event.target.value);
    }

    

    render(){
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <div>
                <label>
                    Temp in {scaleNames[scale]}:
                    <input 
                        type="number" 
                        value={temperature} 
                        onChange={this.handleTemp}
                    />                    
                </label>                
            </div>            
        );
    }
}

export default TemperatureInput;