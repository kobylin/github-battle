var React = require('react');

function Puke(props) {
	return (
		<pre>{JSON.stringify(props.data, 2, ' ')}</pre>
	);
}

module.exports = Puke;