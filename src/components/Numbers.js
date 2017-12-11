import React from 'react';

export class Numbers extends React.Component  {
	constructor() {
		super();
		this.state = {
			display: [],
			input: [],
			previousInputValue: ''
		}
	}

    updateInputValue(propertyName, event) {
    	const regex = /^[0-9\b]+$/;

    	if (event.target.value === '' || regex.test(event.target.value)) {
			const input = this.state.input;
	      	input[propertyName] = event.target.value;

		    this.setState({
		    	input: input,
		    	previousInputValue: input.value1,
		      	display: event.target.value
		    });
		    console.log(this.state.previousInputValue);
		}
  	}

	handleOperation(event) {

		console.log(this.state.previousInputValue);
	}

	clearClick(event){
		this.setState({
			display: ''
		})
	}

	equalClick(event){
		this.setState({

		})
	}


	render() {
		return (
			<div className="calculator">

				<div>
					<input value={this.state.input.value1} onChange={this.updateInputValue.bind(this, 'value1')} />
				</div>
				<div>
					<input value={this.state.input.value2} onChange={this.updateInputValue.bind(this, 'value2')} />
				</div>

				<div className="input">
					{this.state.display.length !== 0
						? this.state.display : 0
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
