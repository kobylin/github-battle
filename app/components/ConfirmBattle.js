var React = require('react');


function puke(obj) {
	return <pre>{JSON.stringify(obj, null, ' ')}</pre>;
}

function ConfirmBattle(props) {
	return (
		props.isLoading === true ?
			<div>Loading....</div> :
			<div>Battle! {puke(props)}</div>
	);
}

module.exports = ConfirmBattle;