var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function() {
		return {
			isLoading: true,
			playersInfo: []
		}
	},

	componentDidMount: function() {
		var query = this.props.location.query;
		//fetch info from github then update state
		githubHelpers
			.getPlayersInfo([query.playerOne, query.playerTwo])
			.then(function(playersInfo) {
				this.setState({
					isLoading: false,
					playersInfo: [playersInfo[0], playersInfo[1]]
				});
			}.bind(this));
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