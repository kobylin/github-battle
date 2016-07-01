var React = require('react');

var Loading = React.createClass({
	getDefaultProps: function () {
		return {
			text: 'Loading',
			speed: 400,
			dots: 3
		};
	},

	getInitialState: function () {
		return {
			text: this.props.text
		}
	},

	componentDidMount: function () {
		this.currentDots = 0;

		this.repeatIntervalId = setInterval(function(){
			if(this.currentDots < this.props.dots) {
				this.currentDots++;
				this.setState({
					text: this.state.text + '.'
				});
			} else {
				this.currentDots = 0;
				this.setState({
					text: this.props.text
				});
			}
		}.bind(this), this.props.speed);
	},

	componentWillUnmount: function () {
		clearInterval(this.repeatIntervalId);
	},

	render: function () {
		return (
			<div>
				<h3>{this.state.text}</h3>
			</div>
		);
	}
});

module.exports = Loading;