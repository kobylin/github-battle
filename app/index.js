var React = require('react');
var ReactDOM = require('react-dom');

var USER = {
	image: 'https://tnp-production.s3.amazonaws.com/uploads/image_block/000/019/519/image/base_c04b12fc1f.png',
	name: 'Andrew',
	username: 'kobylin'
};

var ProfilePic = React.createClass({
	render: function() {
		return (
			<div>
				<img src={this.props.imageUrl}/>
			</div>
		);	
	}
});

var Link = React.createClass({
	changeURL: function() {
		window.location.replace(this.props.href);
	},
	render: function() {
		return (
			<span style={{color: 'blue', cursor: 'pointer'}} onClick={this.changeURL}>
				{this.props.children}
			</span>
		);
	}
});

var ProfileLink = React.createClass({
	render: function() {
		return (
			<Link href={'http://github.com/' + this.props.username}>
			 {this.props.username}
			 <b>Fafa</b>
			</Link>
		);	
	}
});

var ProfileName = React.createClass({
	render: function() {
		return (
			<b>
				{this.props.name}
			</b>
		);	
	}
});

var Avatar = React.createClass({
	render: function() {
		return (
			<div>
				<ProfilePic imageUrl={this.props.user.image}/>
				<ProfileName name={this.props.user.name}/>
				<ProfileLink username={this.props.user.username}/>
			</div>
		);
	}
});



var routes = require('./config/routes');
ReactDOM.render(
	routes,
	document.getElementById('app')
)