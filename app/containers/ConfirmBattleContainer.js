var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');

var ConfirmBattleContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function() {
		return {
			isLoading: false,
			playersInfo: []
		}
	},

	componentDidMount: function() {
		var query = this.props.location.query;
		console.log('componentDidMount');
		//fetch info from github then update state

		setTimeout(function() {
			this.setState({isLoading: true});
		}.bind(this), 1000);
	},

	componentWillMount: function() {
		console.log('componentWillMount');
	},

	componentWillUnmount: function() {
		console.log('componentWillUnmount');
	},

	componentWillReceiveProps: function() {
		console.log('componentWillReceiveProps');
	},

	render: function() {
		console.log('render');
		return (
			<ConfirmBattle 
				isLoading={this.state.isLoading}
				playersInfo={this.state.playersInfo}
				/>
		);
	}
});

module.exports = ConfirmBattleContainer;