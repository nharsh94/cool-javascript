import { IMPORTANT_VALUE, logInCaps, Dog } from './import-from-me.js';

window.addEventListener('DOMContentLoaded', async () => {
  console.log('DOM content fully loaded and parsed.');

  const url = "https://jservice.xyz/api/random-clue";
  try {
    const response = await fetch (url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      throw new Error('Response not ok');
    }
  } catch (error) {
    console.error('error', error);
  }
});

console.log('IMPORTANT_VALUE is', IMPORTANT_VALUE);
logInCaps('This is a message.');

const dog = new Dog('Fido');
const dogWords = dog.speak();
console.log(dogWords);

console.log('main.js is loaded');

// // Get a promise that there will be a response
// // when it's done
// const promisedResponse = fetch(url);
// promisedResponse
//     .then(response => {
//         // if the response is ok
//         if (response.ok) {
//             // Get a promise that will turn into
//             // the JS value based on 
//             // JSON
//             return response.json();
//         } else {
//             // Throw a new error
//             throw new Error('Response not ok');
//         }
//     })
//     // Print the data that comes from response.json()
//     .then(data => console.log(data))
//     // Handle the error from anywhere in the Promise
//     .catch(error => console.error('error', error));