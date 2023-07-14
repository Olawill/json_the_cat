const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  let err;
  let desc;
 
  // Make a request to the url
  request(url, (error, response, body) => {

    // Handle cases where the url wrong
    if (error) {
      err = error;
      return callback(err, desc);
    }

    // Parse the body of the response
    const data = JSON.parse(body);
    if (data.length === 0) {
      err =  Error(`Information about ${breedName} is not available. Please check back later!!!`);
      return callback(err, desc);

    }
    desc = data[0].description;
    return callback(err, desc);
  });
 
};

module.exports = { fetchBreedDescription };
