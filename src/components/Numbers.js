import React from 'react';

export class Numbers extends React.Component  {
	constructor() {
		super();
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			display: []
		}
	}

	handleClick(event) {
		this.setState({
			display: this.state.display.concat([event.target.value])
		})
		console.log(this.state.display);
	}

	clearClick(event){
		this.setState({
			display: []
		})
	}

	equalClick(event){
		console.log(this.state.display.join(''));
		this.setState({
			display: eval(this.state.display.join(''))
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

					<div className="buttons">
						<div className="operators">
							<button type="button" value="/" onClick={this.handleClick.bind(this)}>/</button>
							<button type="button" value="*" onClick={this.handleClick.bind(this)}>*</button>
							<button type="button" value="+" onClick={this.handleClick.bind(this)}>+</button>
							<button type="button" value="-" onClick={this.handleClick.bind(this)}>-</button>
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
								<button type="button" value="." onClick={this.handleClick.bind(this)}>.</button>
								<button type="button" onClick={this.clearClick.bind(this)}>Clear</button>
							</div>
						</div>
						<button className="equal" type="button" onClick={this.equalClick.bind(this)}>=</button>
					</div>

			</div>
		)
	}

}
