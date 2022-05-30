angular.module("app").service("CharactersService", function ($http, env) {
  this.getAllCharacters = (name) => {
    return $http.get(`${env.apiUrl}/characters`, {
      params: {
        apikey: "00c502c2b771a984e4cb31fea3921b14",
        hash: "6a16c993302911bceb2491e49926426b",
        ts: 1,
        nameStartsWith: name,
      },
    });
  };
});
