var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var space = require('../styles').space;

var PlayerInfo = require('./PlayerInfo');
var PlayerInfoWrapper = require('./PlayerInfoWrapper');
var MainContainer = require('./MainContainer');
var Loading = require('./Loading');

function puke(obj) {
	return <pre>{JSON.stringify(obj, null, ' ')}</pre>;
}

function ConfirmBattle(props) {
	return (
		props.isLoading === true ?
			<MainContainer>
				<Loading/>
			</MainContainer> :
			<MainContainer>
				<h1>Confirm Players</h1>
				<PlayerInfoWrapper header="Player One">
					<PlayerInfo header="Player One" player={props.playersInfo[0]}/>
				</PlayerInfoWrapper>
				<PlayerInfoWrapper header="Player Two">
					<PlayerInfo player={props.playersInfo[1]}/>
				</PlayerInfoWrapper>
				<div className="row">
					<div className="col-sm-8 col-sm-offset-2" style={space}>
						<button type="button" className="btn btn-large btn-success" onClick={props.onInitiateBattle}>
							Initite Battle!
						</button>
					</div>
					<div className="col-sm-8 col-sm-offset-2" style={space}>
						<Link to="/playerOne">
							<button type="button" className="btn btn-large btn-danger">
								Reselect Players
							</button>
						</Link>
					</div>
				</div>
			</MainContainer>
	);
}

ConfirmBattle.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	playersInfo: PropTypes.array.isRequired,
	onInitiateBattle: PropTypes.func.isRequired
};

module.exports = ConfirmBattle;