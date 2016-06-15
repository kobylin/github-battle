var React = require('react');

function ConfirmBattle(props) {
	return (
		props.isLoading === true ?
			<div>Loading....</div> :
			<div>Battle!</div>
	);
}

module.exports = ConfirmBattle;