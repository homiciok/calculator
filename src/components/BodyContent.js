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
		console.log(this.state.output);
	}

	handleOperation(event) {
		//this.refs.btn.setAttribute("disabled", "disabled");
		this.setState({
			output: this.state.output.concat([event.target.value])
		});

		console.log(typeof this.state.output);
	}

	clearClick(event){
		this.setState({
			output: '',
			input: ''
		})
	}

	equalClick(event){
		this.setState({
		})
	}


	render() {
		return (
			<div className="calculator">

				<div className="input">
					{this.state.output.length !== 0
						? this.state.output : 0
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
								<button type="button" value="1" onClick={this.handleClick.bind(this)}>1</button>
								<button type="button" value="2" onClick={this.handleClick.bind(this)}>2</button>
								<button type="button" value="3" onClick={this.handleClick.bind(this)}>3</button>
							</div>
							<div className="numbers">
								<button type="button" value="4" onClick={this.handleClick.bind(this)}>4</button>
								<button type="button" value="5" onClick={this.handleClick.bind(this)}>5</button>
								<button type="button" value="6" onClick={this.handleClick.bind(this)}>6</button>
							</div>
							<div className="numbers">
								<button type="button" value="7" onClick={this.handleClick.bind(this)}>7</button>
								<button type="button" value="8" onClick={this.handleClick.bind(this)}>8</button>
								<button type="button" value="9" onClick={this.handleClick.bind(this)}>9</button>
							</div>
							<div className="numbers">
								<button id="zero" value="0" onClick={this.handleClick.bind(this)}>0</button>
								<button id="clear" type="button" onClick={this.clearClick.bind(this)}>Clear</button>
							</div>
						</div>
						<button className="equal" type="button" onClick={this.equalClick.bind(this)}>=</button>
					</div>
			</div>
		)
	}

}
