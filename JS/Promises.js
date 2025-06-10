const getData = ()=>{
    return new Promise((resolve, reject) => {
        setTimeout(function(){resolve('Data rendered')},1000)
    });
}
getData().then(console.log)

function getApiData(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            reject(new Error('Network response was not ok'));
          } else {
            return response.json();
          }
        })
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }
  
getApiData('https://dummyjson.com/test')
    .then(data => {
      console.log('Custom Promise resolved with data:', data);
    })
    .catch(error => {
      console.error('Custom Promise rejected with error:', error);
    });

//async await example for fetching data
const getProductData = async () => {  
    const res = await fetch(`https://dummyjson.com/products`);
    const data = await res.json();
    console.log(data);
};
getProductData();

const promise1 = new Promise((resolve) =>
    setTimeout(() => resolve("Promise 1 resolved"), 1000)
);
const promise2 = new Promise((resolve) =>
    setTimeout(() => resolve("Promise 2 resolved"), 500)
);
const promise3 = new Promise((resolve) =>
    setTimeout(() => resolve("Promise 3 resolved"), 800)
);
  
const promisesArray = [promise1, promise2, promise3];
  
Promise.all(promisesArray)
.then((results) => {
      console.log("All promises resolved:", results);
})
.catch((error) => {
      console.error("At least one promise rejected:", error);
});

Promise.allSettled(promisesArray)
.then((results) => {
      console.log("All promises Setteled:", results);
})

Promise.race(promisesArray)
.then((results) => {
      console.log("First promise resolved:", results);
})
.catch((error) => {
    console.error("At least one promise rejected:", error);
});