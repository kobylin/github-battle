var axios = require('axios');

function getUserInfo(username) {
	return axios.get('https://api.github.com/users/' + username);
}

var helpers = {
	getPlayersInfo: function(players) {
		return axios.all(players.map(function(username) {
			return getUserInfo(username);
		})).then(function(info){
			return info.map(function(inf) {
				return inf.data;
			})
		}).catch(function(error) {
			console.warn(error);		
		});
	}
};

module.exports = helpers;