const Pet = (props) => {
	return React.createElement('div', {},[
		React.createElement('h1', {}, props.name),
		React.createElement('h2', {}, props.animal),
		React.createElement('h2', {}, props.breed)
	]);
}

class App extends React.Component {
	handleTitleClick() {
		alert('you just clicked the title');
	}

	render(){
		return React.createElement('div', {}, [
		React.createElement('h1', { onClick: this.handleTitleClick}, 'adopt-me!'),
		React.createElement(Pet, {
			name : 'max',
			animal : 'dog',
			breed : 'german'
		}),
		React.createElement(Pet, {
			name : 'kitty',
			animal : 'cat',
			breed : 'mixed'
		})	
		]);
	}
}


ReactDOM.render(React.createElement(App), document.getElementById('root'))