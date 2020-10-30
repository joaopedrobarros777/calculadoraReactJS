import React from 'react';
import './App.css';
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { ClearButton } from "./components/ClearButton";
import * as math from 'mathjs'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  addToInput = val => {
    this.setState({ input: this.state.input + val });
  }

  handleEqual = () => {
    this.setState({ input: math.evaluate(this.state.input)})
  }

  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Input input={this.state.input}></Input>
          <div className="row">
            <Button handleClic={this.addToInput}>7</Button>
            <Button handleClic={this.addToInput}>8</Button>
            <Button handleClic={this.addToInput}>9</Button>
            <Button handleClic={this.addToInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClic={this.addToInput}>4</Button>
            <Button handleClic={this.addToInput}>5</Button>
            <Button handleClic={this.addToInput}>6</Button>
            <Button handleClic={this.addToInput}>X</Button>
          </div>
          <div className="row">
            <Button handleClic={this.addToInput}>1</Button>
            <Button handleClic={this.addToInput}>2</Button>
            <Button handleClic={this.addToInput}>3</Button>
            <Button handleClic={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClic={this.addToInput}>.</Button>
            <Button handleClic={this.addToInput}>0</Button>
            <Button handleClic={() => this.handleEquBl()}>=</Button>
            <Button handleClic={this.addToInput}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={() => this.setState({ input: ""})}>
              Clear
            </ClearButton>
          </div>    
        </div>
      </div>
    )
  }
}
export default App;
