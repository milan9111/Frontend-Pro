fetch('https://api.github.com/users')
  .then((response) => {
    return response.json();
  })
  .then((dataUsers) => {
    var arr = dataUsers;
    var resultUsers = arr.splice(0, 10).map(data => {
        return {login: data.login, avatar_url: data.avatar_url, id: data.id};
    })
    for (i in resultUsers) {
        console.log(Number(i) + 1 + ' ********************');
        for (key in resultUsers[i]) {
        console.log(key + ': ' + resultUsers[i][key]);
        }
      }
  });

