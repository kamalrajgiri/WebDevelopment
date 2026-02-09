// async function getData(){
//     //simulates getting data from a server
//     return new Promise((resolve, reject) => {

//     setTimeout(() => {
//         resolve(455)
//     }, 3000);})
// }
async function getData() {
  //simulates getting data from a server
  // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  let x = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  let data = await x.json();
  //  let data = await x.text()
  return data;
}

// async function postData(url ="",data) = {

// }

async function main() {
  console.log("Loading modules");

  console.log("Do something else while loading");

  console.log("load data");
  let data = await getData(); //we use await instead of then
  console.log(data);

  console.log("process data");

  console.log("task 2");
}

main();

async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

getData("https://example.com/answer",{answer: 42}).then((data) => {
  console.log(data);
});

// postData("https://jsonplaceholder.typicode.com/posts", {
//   title: "foo",
//   body: "bar",
//   userId: 1,
// }).then((data) => {
//   console.log(data);
// });

// console.log("Loading modules")
// console.log("Do something else while loading")
// console.log("load data")
// let data = getData();

// data.then ((v)=>{
// console.log(data)

// console.log("process data")

// console.log("task 2")
// })
