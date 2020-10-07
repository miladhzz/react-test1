import React from 'react'


class Square extends React.Component {

    render() {
      const myStyle ={
        height: 30,
        width: 30,
      }
      return (
        <button 
          style={ myStyle } 
          className="square" 
          onClick={ ()=> this.props.onClick() }
        >
          { this.props.value }
        </button>
      );
    }
  }

export default Square;