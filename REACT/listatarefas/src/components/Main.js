import React, { Component } from "react";

import "./Main.css";

export default class Main extends Component {
	state = {
		novaTarefa:"",
	};

	handleChange= (e) =>{
		this.setState({
			novaTarefa: e.target.value
		});
	};
	render(){
		// const { novaTarefa } = this.state;
		return (
			<div className="classname">
				<h1>Lista de trarefas</h1>
				<form action="#">
					<input onChange={this.handleChange} type="text" />
					<button type="submit">Emviar</button>
				</form>
			</div>
		);
	}
}