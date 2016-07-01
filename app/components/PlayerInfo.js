var React = require('react');
var PropTypes = React.PropTypes;

function PlayerInfo(props) {
	return (
		<ul>
			{ props.score && <li className="list-group-item">
				Score: {props.score}
			</li> }
			<li className="list-group-item">
				<img className="img-rounded img-responsive" src={props.player.avatar_url}/>
			</li>
			<li className="list-group-item">
				Name: {props.player.name}
			</li>
			<li className="list-group-item">
				Login: {props.player.login}
			</li>
			<li className="list-group-item">
				Location: {props.player.location}
			</li>
			{ props.player.company && <li className="list-group-item">
				Company: {props.player.company}
			</li> }
			<li className="list-group-item">
				Followers: {props.player.followers}
			</li>
			<li className="list-group-item">
				Following: {props.player.following}
			</li>
			<li className="list-group-item">
				Public Repos: {props.player.public_repos}
			</li>
			<li className="list-group-item">
				Public Gists: {props.player.public_gists}
			</li>
			{ props.player.blog && <li className="list-group-item">
				Blog: {props.player.blog}
			</li> }
		</ul>
	);
}

PlayerInfo.propTypes = {
	score: PropTypes.number,
	player: PropTypes.shape({
		avatar_url: PropTypes.string.isRequired,
		login: PropTypes.string.isRequired,
		blog: PropTypes.string,
		company: PropTypes.string,
		location: PropTypes.string,
		name: PropTypes.string,
		following: PropTypes.number.isRequired,
		followers: PropTypes.number.isRequired,
		public_repos: PropTypes.number.isRequired
	})
}

module.exports = PlayerInfo;