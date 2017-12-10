import React from 'react';

export class Numbers extends React.Component  {
	constructor() {
		super();
		//this.handleOperation = this.handleOperation.bind(this);
		this.state = {
			display: [],
			input: [],
			previousInputValue: 0
		}
	}

    updateInputValue(field, event) {
    	const regex = /^[0-9\b]+$/;

    	if (event.target.value === '' || regex.test(event.target.value)) {
		    this.setState({
		    	//inputValue: event.target.value
		      	[event.target.value1]: event.target.value,
		      	[event.target.value2]: event.target.value,
		      	display: event.target.value
		    });
		    console.log(typeof Number(this.state.inputValue));
		}
  	}

	handleOperation(event) {
		switch (event) {
            case '/':
            case '*':
            case '+':
            case '-':
                this.setState({
                    previousInputValue: this.state.inputValue1,
                    inputValue: 0,
                    display: this.state.display.concat([event.target.value])
                });
                break;
        }

		console.log(this.state.previousInputValue);
	}

	clearClick(event){
		this.setState({
			display: ''
		})
	}

	equalClick(event){
		console.log(this.state.display.join(''));
		this.setState({

			//display: eval(this.state.display.join(''))
		})
	}


	render() {
		return (
			<div className="calculator">
				<div className="input">
					{this.state.display.length !== 0
						? this.state.display : 0
					}
				</div>

				<input value={this.state.input.value1} onChange={this.updateInputValue.bind(this, 'input1')}></input>
				<input name="value2" value={this.state.input.value2} onChange={this.updateInputValue.bind(this)}></input>
					<div className="buttons">
						<div className="operators">
							<button type="button" value="+" onClick={this.handleOperation.bind(this)}>+</button>
							<button type="button" value="-" onClick={this.handleOperation.bind(this)}>-</button>
							<button type="button" value="/" onClick={this.handleOperation.bind(this)}>/</button>
							<button type="button" value="*" onClick={this.handleOperation.bind(this)}>*</button>
						</div>
						<div className="left-panel">
							<div className="numbers">
								<button type="button" value="1" >1</button>
								<button type="button" value="2" >2</button>
								<button type="button" value="3" >3</button>
							</div>
							<div className="numbers">
								<button type="button" value="4" >4</button>
								<button type="button" value="5" >5</button>
								<button type="button" value="6" >6</button>
							</div>
							<div className="numbers">
								<button type="button" value="7" >7</button>
								<button type="button" value="8" >8</button>
								<button type="button" value="9" >9</button>
							</div>
							<div className="numbers">
								<button id="zero" value="0" >0</button>
								<button id="clear" type="button" onClick={this.clearClick.bind(this)}>Clear</button>
							</div>
						</div>
						<button className="equal" type="button" onClick={this.equalClick.bind(this)}>=</button>
					</div>

			</div>
		)
	}

}
