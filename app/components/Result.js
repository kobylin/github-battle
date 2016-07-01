var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var MainContainer = require('./MainContainer');
var PlayerInfo = require('./PlayerInfo');
var PlayerInfoWrapper = require('./PlayerInfoWrapper');
var space = require('../styles').space;
var Loading = require('./Loading');

function StartOver (props) {
	return (
		<div className="col-sm-8 col-sm-offset-2" style={space}>
			<Link to="/playerOne">
				<button type="button" className="btn btn-large btn-danger">
					Start Over
				</button>
			</Link>
		</div>
	);
}

function Result(props) {
	var winner; 
 	var looser;

 	if(props.isLoading) {
 		return (
 			<MainContainer> 
				<Loading/> 
			</MainContainer>
		);
 	}

 	if (props.scores[0] === props.scores[1]) {
 		return (
 			<MainContainer>
 				<p>Nobody Wins..... <br/> :( or :)</p>
 				<StartOver/>
 			</MainContainer>
 		);
 	}

	if (props.scores[0] > props.scores[1]) {
		winner = 0;
		looser = 1;
	} else {
		winner = 1;
		looser = 0;
	}

	return (
			<MainContainer>
				<h1>Result</h1>
				<PlayerInfoWrapper header="Winner">
					<PlayerInfo header="Player One" player={props.playersInfo[winner]} score={props.scores[winner]}/>
				</PlayerInfoWrapper>
				<PlayerInfoWrapper header="Loser">
					<PlayerInfo player={props.playersInfo[looser]} score={props.scores[looser]}/>
				</PlayerInfoWrapper>
				<div className="row">
					<StartOver/>
				</div>
			</MainContainer>
	);
}

Result.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	scores: PropTypes.array.isRequired,
	playersInfo: PropTypes.array.isRequired
};

module.exports = Result;