var axios = require('axios');

function getUserInfo(username) {
	return axios.get('https://api.github.com/users/' + username);
}

function getUserRepositories(username) {
	return axios.get('https://api.github.com/users/' + username + '/repos');
}

function countRepositoriesValue(repositories) {
	return repositories.data.reduce(function(acc, r) {
		return acc + r.stargazers_count + r.watchers_count + r.forks_count;
	}, 0);
}

function getUserScore(user) {
	return getUserRepositories(user.login)
		.then(countRepositoriesValue)
		.then(function(repositoriesValue){
			return repositoriesValue + user.followers;
		});
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
	},

	getPlayersScore: function(players) {
		return axios.all([
			getUserScore(players[0]),
			getUserScore(players[1])
		]);
	}
};

module.exports = helpers;