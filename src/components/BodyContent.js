import React from 'react';

export class BodyContent extends React.Component  {
	constructor() {
		super();
		this.state = {
			input: ''
		} 
	}

	componentDidMount(){
    	document.addEventListener("keyup", this.handleKeyUp, false)
  	}

  	handleClick = (event) => {
		this.setState({
			input: this.state.input.concat([event.target.value])
		})
		//console.log(typeof this.state.input, this.state.input);
	}

	handleKeyUp = (event) => {
		let keyName = event.key;
		const regex = /[0-9/*+-]/i;
		let result =  this.state.input.concat([event.key]);;

		if(regex.test(keyName)) {
			this.setState({
				input: result
			})
		} else if (keyName === '=' || event.keyCode === 13) {
			this.equalButtonClick();
		}
	}

	equalButtonClick = (event) => {
		let value = '';
		try {
			value = eval(this.state.input).toString();
		} catch (error) {
			if (error instanceof SyntaxError) {
				alert("The expression is not valid, please enter the expression one more time!");
			}
		}

		if (this.state.input.length !== 0) {
			this.setState({
				input: value
			})
		} else {
			this.setState({
				input: ''
			})
		}
	}

	clearButtonClick = (event) => {
		this.setState({
			input: ''
		})
	}

	render() {
		return (
			<div className="calculator">
				<div className="output">
					{this.state.input}
				</div>
					<div className="buttons">
						<div className="operators">
							<button type="button" value="+" onClick={this.handleClick}>+</button>
							<button type="button" value="-" onClick={this.handleClick}>-</button>
							<button type="button" value="/" onClick={this.handleClick}>/</button>
							<button type="button" value="*" onClick={this.handleClick}>*</button>
						</div>
						<div className="left-panel">
							<div className="rows">
								<button type="button" value="1" onClick={this.handleClick}>1</button>
								<button type="button" value="2" onClick={this.handleClick}>2</button>
								<button type="button" value="3" onClick={this.handleClick}>3</button>
							</div>
							<div className="rows">
								<button type="button" value="4" onClick={this.handleClick}>4</button>
								<button type="button" value="5" onClick={this.handleClick}>5</button>
								<button type="button" value="6" onClick={this.handleClick}>6</button>
							</div>
							<div className="rows">
								<button type="button" value="7" onClick={this.handleClick}>7</button>
								<button type="button" value="8" onClick={this.handleClick}>8</button>
								<button type="button" value="9" onClick={this.handleClick}>9</button>
							</div>
							<div className="rows">
								<button id="zero" value="0" onClick={this.handleClick}>0</button>
								<button id="clear" type="button" onClick={this.clearButtonClick}>Clear</button>
							</div>
						</div>
						<button className="equal" type="button" onClick={this.equalButtonClick}>=</button>
					</div>
			</div>
		)
	}

}

/*
	isNumber(num) {
	    return (typeof num === 'string' || typeof num === 'number') && !isNaN(num - 0) && num !== '';
	};

	equalButtonClick(event) {
	    let postFixArray = [];
	    let operationsStack = [];
	    let numbersArray = [];
	    let number = "";
	    let self = this;

	    this.state.output.forEach(function(element) {

	        if (self.isNumber(element)) {
	        	number += element;
	        } else {
	          	postFixArray.push(Number(number));

	          	if (element === "/" || element === "*") {
	            	operationsStack.push(element);
	            	console.log('hei', operationsStack);
	          	} else { 
	          		if (operationsStack.length)
 			            postFixArray.push(operationsStack.pop());
 						operationsStack.push(element);
 					console.log('hei2', operationsStack, 'hei3', postFixArray);
 		       		}
	        		number = ""
         	}
         console.log('hei4', operationsStack);
        })


	    if (number !== "") {
	      	postFixArray.push(Number(number));
	    }
	    console.log('post+++', postFixArray);

	    while (operationsStack.length) {
	      	postFixArray.push(operationsStack.shift());
	    }

        console.log('post', postFixArray);

	    postFixArray.forEach(function(element) {
	    
		    if (typeof element !== 'number') {
		        let a = numbersArray.shift();
		        let b = numbersArray.shift();
		        let result = 0;
		        console.log('a', a, 'b',  b);
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
*/
