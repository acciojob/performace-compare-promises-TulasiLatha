// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];
async function fetchData(apiUrls){
	const starttimeAll=Date.now();
	const allPromise=apiUrls.map(url=>
		fetch(url));
	await Promise.all(allPromise);
	const endtimeAll=Date.now();
	const timetakenAll=endtimeAll-starttimeAll;

	const starttimeAny=Date.now();
	const anyPromise=apiUrls.map(url=>
		fetch(url));
	await Promise.any(anyPromise);
	const endtimeAny=Date.now();
	const totaltakenAny=endtimeAny-starttimeAny;

	const results=document.getElementbyId('output-all').innerHTML=timetakenAll;
	const result2=document.getElementbyId('output-any').innerHTML=totaltakenAny;
	
}



// You can write your code here
