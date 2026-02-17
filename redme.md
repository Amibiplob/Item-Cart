(1): undefined : যখন ভ্যারিয়েবল declare করা হয় কিন্তু তার মধ্যে কোনো মান দেয়া হয় না তখন সেটির মান হয় undefined 
ex :let name;
null :program এ খালি মান দেওয়া হল null
ex:let name = null;

(2) :map :map অ্যারের প্রতিটি মান নিয়ে  নতুন অ্যারে return করে 
ex :	let numbers = [1, 2, 3];
	let doubled = numbers.map(num => num * 2);
	console.log(doubled); // [2, 4, 6]
forEach: foreach অ্যারের প্রতিটি মান নিয়ে  নতুন অ্যারে return করে না  

(3): == শুধু মান তুলনা করে 
   ===মান এবং টাইপ দুটোই তুলনা করে  
	 
(4):async/await asynchronous কোডকে synchronous এর মতো লিখতে সাহায্য করে|এটি Promise এর উপর ভিত্তি করে কাজ করে |যার জন্য  Error handling সহজ হয়    

((5):Global Scope: যেসব ভ্যারিয়েবল function এর বাহিরে declare করা হয়।এর কাজ পুরো প্রোগ্রাম থেকে access করার জন্য  
Function Scope :যেসব ভ্যারিয়েবল function এর ভিতরে  declare করা হয়।এর কাজ শুধুমাত্র অই  function থেকে access করার জন্য 
