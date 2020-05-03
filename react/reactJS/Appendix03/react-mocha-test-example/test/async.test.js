import axios from 'axios';
import { expect } from 'chai';

it('asynchronous return an object', function(done){
  axios
    .get('https://api.github.com/users/torvus')
    .then(function (response) {
      expect(response).to.be.an('object');
      done();
    })
    .catch(function (error) {
      console.log(error);
    });
});