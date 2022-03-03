const axios = require('axios');
const {solve} = require('./solver.js');

let palabras;
// Make a request for a user with a given ID
axios.get('https://yurigo.dev/wordlesolver/wordlES.json')
  .then(function (response) {
    // handle success
    if (response.status === 200){
        palabras = response.data;
        console.log(solve(palabras, "ieounslycpgdm" , [null, "r", "a", null, "a"]));
    }
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });