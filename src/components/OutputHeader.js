import React from 'react';

export class OutputHeader extends React.Component  {
		
	constructor() {
		super();
		//this.handleClick = this.handleClick.bind(this);
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
			<div className="inputBox" type='text'>
				{this.state.display.length !== 0
					? this.state.display : 0
				}
			</div>
		);
	}
}
