import React from 'react';

export class BodyContent extends React.Component  {
	constructor() {

		super();
		this.state = {
			output: [],
			input: []
		}
	}

  	handleClick(event) {
		this.setState({
			output: this.state.output.concat([event.target.value])
		})
	}

	handleOperation(event) {
		//this.refs.btn.setAttribute("disabled", "disabled");
		this.setState({
			output: this.state.output.concat([event.target.value])
		});
	}

  isNumber(num) {
    return (typeof num === 'string' || typeof num === 'number') && !isNaN(num - 0) && num !== '';
  };

	equalButtonClick(event){
    let postFixArray = [];
    let operationsStack = [];

    let number = "";
    let self = this;
    this.state.output.forEach(function(element) {
        if (self.isNumber(element)) {
          number += element;
        } else {
          postFixArray.push(Number(number));
          if (element === "/" || element === "*") {
            operationsStack.push(element);
          } else {
            if (operationsStack.length)
              postFixArray.push(operationsStack.pop());
            operationsStack.push(element);
          }
          number = "";
        }
    });

    if (number !== "") {
      postFixArray.push(Number(number));
    }

    while (operationsStack.length) {
      postFixArray.push(operationsStack.pop());
    }

    let numbersArray = [];

    postFixArray.forEach(function(element) {
      if (typeof element !== 'number') {
        let a = numbersArray.pop();
        let b = numbersArray.pop();
        let result = 0;

        switch (element) {
          case "+":
            result = a + b;
            break;

          case "-":
            result = a - b;
            break;

          case "*":
            result = a * b;
            break;

          case "/":
            result = a / b;
            break;
        }
        numbersArray.push(result)
      } else {
        numbersArray.push(element);
      }
    })

		this.setState({
      output: numbersArray
		})
	}

	clearButtonClick(event){
		this.setState({
			output: [],
			input: []
		})
	}

	render() {
		return (
			<div className="calculator">

				<div className="output">
					{this.state.output.length !== 0
						? this.state.output
						: 0
					}
				</div>
					<div className="buttons">
						<div className="operators">
							<button type="button" value="+" onClick={this.handleOperation.bind(this)}>+</button>
							<button type="button" value="-" onClick={this.handleOperation.bind(this)}>-</button>
							<button type="button" value="/" onClick={this.handleOperation.bind(this)}>/</button>
							<button type="button" value="*" onClick={this.handleOperation.bind(this)}>*</button>
						</div>
						<div className="left-panel">
							<div className="rows">
								<button type="button" value="1" onClick={this.handleClick.bind(this)}>1</button>
								<button type="button" value="2" onClick={this.handleClick.bind(this)}>2</button>
								<button type="button" value="3" onClick={this.handleClick.bind(this)}>3</button>
							</div>
							<div className="rows">
								<button type="button" value="4" onClick={this.handleClick.bind(this)}>4</button>
								<button type="button" value="5" onClick={this.handleClick.bind(this)}>5</button>
								<button type="button" value="6" onClick={this.handleClick.bind(this)}>6</button>
							</div>
							<div className="rows">
								<button type="button" value="7" onClick={this.handleClick.bind(this)}>7</button>
								<button type="button" value="8" onClick={this.handleClick.bind(this)}>8</button>
								<button type="button" value="9" onClick={this.handleClick.bind(this)}>9</button>
							</div>
							<div className="rows">
								<button id="zero" value="0" onClick={this.handleClick.bind(this)}>0</button>
								<button id="clear" type="button" onClick={this.clearButtonClick.bind(this)}>Clear</button>
							</div>
						</div>
						<button className="equal" type="button" onClick={this.equalButtonClick.bind(this)}>=</button>
					</div>
			</div>
		)
	}

}
