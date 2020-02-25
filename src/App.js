import React, {Component} from 'react';

class App extends Component{
  state = {
    inputValue: '',
    inputNewValue: '',
    inputOperator: '',
  };

  handleClick = e => {
    this.setState({
      inputValue: this.state.inputValue + e.target.id
    })
  };

  handleClickZero = e => {
    if (this.state.inputValue !== '') {
      this.setState({
        inputValue: this.state.inputValue + e.target.id
      })
    }
  };

  handleMinus = () => {
    if (this.state.inputValue && this.state.inputValue.charAt(0) !== "-" && this.state.inputValue.charAt(0) !== "0") {
      this.setState({
        inputValue: '-' + this.state.inputValue
      })
    } else {
      this.setState({
        inputValue: this.state.inputValue.substring(1)
      })
    }
  };

  handleClear = () => {
    this.setState({
      inputValue: '',
      inputNewValue: '',
      inputOperator: '',
    })
  };

  handleOperator = (e) => {
    this.setState({
      inputNewValue: this.state.inputValue,
      inputValue: '',
      inputOperator: e.target.id
    });
  };


  handleEqual = () => {
    let newValue = '';
      switch (this.state.inputOperator) {
        case "plus":
          newValue = +this.state.inputNewValue + +this.state.inputValue;
          this.setState({
            inputValue: newValue.toString()
          });
              break;
        case "times":
          newValue = +this.state.inputNewValue * +this.state.inputValue;
          this.setState({
            inputValue: newValue.toString()
          });
              break;
        case "divide":
          newValue = +this.state.inputNewValue / +this.state.inputValue;
          if (newValue.toString() !== 'Infinity') {
            this.setState({
              inputValue: newValue.toString()
            })
            } else {
            this.setState({
              inputValue: ''
            })
          }
              break;
        case "minus":
          newValue = +this.state.inputNewValue - +this.state.inputValue;
          this.setState({
            inputValue: newValue.toString()
          });
              break;
        default:
          return null
      }
  };

  render() {
    return (
        <div className='mainDiv'>
          <div>
            <input value={this.state.inputValue} readOnly className = 'calc-input'/>
          </div>
          <div className='calc-main'>
            <button onClick = {this.handleOperator} className = 'itemX' id = 'times'> X </button>
            <button onClick = {this.handleEqual} className = 'itemEqual'> = </button>
            <button onClick = {this.handleOperator} className = 'itemDivide' id = 'divide'> / </button>
            <button onClick = {this.handleClear} className = 'itemC'> C </button>
            <button onClick = {this.handleClick} className = 'item1' id = '1'> 1 </button>
            <button onClick = {this.handleClick} className = 'item2' id = '2'> 2 </button>
            <button onClick = {this.handleClick} className = 'item3' id = '3'> 3 </button>
            <button onClick = {this.handleOperator} className = 'itemPlus' id = 'plus'> + </button>
            <button onClick = {this.handleClick} className = 'item4' id = '4'> 4 </button>
            <button onClick = {this.handleClick} className = 'item5' id = '5'> 5 </button>
            <button onClick = {this.handleClick} className = 'item6' id = '6'> 6 </button>
            <button onClick = {this.handleOperator} className = 'itemMinus' id = 'minus'> - </button>
            <button onClick = {this.handleClick} className = 'item7' id = '7'> 7 </button>
            <button onClick = {this.handleClick} className = 'item8' id = '8'> 8 </button>
            <button onClick = {this.handleClick} className = 'item9' id = '9'> 9 </button>
            <button onClick = {this.handleClickZero} className = 'item0' id = '0'> 0 </button>
            <button onClick = {this.handleClick} className = 'itemDot' id = '.'> . </button>
            <button onClick = {this.handleMinus} className = 'itemPlusMinus' id = 'plusMinus'> - / + </button>
          </div>
        </div>
    )
  }
}

export default App;
