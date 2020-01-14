console.log("hi");// console.log your input from your submit
// create url to see api attributes (in browser)
// const links = document.querySelector('#links');






const geo = document.querySelector('#coordinates');
// const  = document.querySelector('#coordinates');
const userInput = document.querySelector('#userInput');
const search = document.querySelector('#search');
search.addEventListener('click', (event) => {
  event.preventDefault();


  const fetchMap = (query) => {
    console.log(userInput.value);
    fetch(`https://api.scaleserp.com/search?api_key=F184B27DD8CB4C89AA93C2018267783E&q=${userInput.value}`)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        const resultOne = (data.organic_results[0].link);
        const resultTwo = (data.organic_results[1].link);
        const resultThree = (data.organic_results[2].link);
        const resultFour = (data.organic_results[3].link);
        const resultFive = (data.organic_results[4].link);
        console.log(resultOne);
        console.log(resultTwo);
        console.log(resultThree);
        console.log(resultFour);
        console.log(resultFive);
        // console.log(longitude);
        // const coordinates = `<p>${resultOne} + ${longitude}</p>`;
        // document.getElementById("resultOnes").innerHTML = resultOne;
        // resultOne.forEach(item => console.log(item));
        geo.insertAdjacentHTML('beforeend', resultOne);
        geo.insertAdjacentHTML('beforeend', resultTwo);
        geo.insertAdjacentHTML('beforeend', resultThree);
        geo.insertAdjacentHTML('beforeend', resultFour);
        geo.insertAdjacentHTML('beforeend', resultFive);
        event.preventDefault();
      });
  };

  fetchMap(userInput);
});








// const axios = require('axios');
// // set up the request parameters
// const params = {
//   api_key: "F184B27DD8CB4C89AA93C2018267783E",
//   q: "bitcoin"
// }
// // make the http GET request to Scale SERP
// axios.get('https://api.scaleserp.com/search', { params })
//   .then(response => {
//     // print the JSON response from Scale SERP
//     console.log(JSON.stringify(response.data, 0, 2));
//   }).catch(error => {
//     // catch and print the error
//     console.log(error);
//   })
