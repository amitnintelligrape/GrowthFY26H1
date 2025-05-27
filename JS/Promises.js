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