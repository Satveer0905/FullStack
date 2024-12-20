// function roll(num) {
//     setTimeout(() => {
//       console.log("Rolled after 2 seconds!");
//     }, 3000);
//     console.log("Roll num is", num);
//   }
  
//   console.log("second");


// function roll(num) {
//     console.log(`Roll num is ${num}`);
//     console.log("second");
//     setTimeout(function () {
//       console.log("Rolled after 2 seconds!");
//     }, 3000);
//   }roll(5);


// function roll( num,delay,nextroll){
//     setTimeout(() =>{
//         console.log("Roll num is",num);
//         if(nextroll) nextroll();
//     },delay);
// }
// roll(12,1000, () =>{
//     roll(13,2000, () => {
//         roll(14,3000, () => {
//             roll(15,4000);
// });
// });
// });


//promises


// let Promise =new Promise((resolve,reject)=>{
//     resolve()
// }
// )
// Promise.then((data)=>
// {
//     co
// })



// function roll( num,delay,nextroll){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() =>{
//             console.log("Roll num is",num);
//             if(nextroll) nextroll();
//         resolve()
//        // reject()
//     },delay);
//     })
// }

// async function executeRolls() {
//     await roll(121, 1000);
//     await roll(122, 1000);
//     await roll(123, 1000);
// }
// roll(121,1000).then(()=>{
//     roll(122,1000).then(()=>{
//         roll(123,1000).then(()=>{
//             console.log("Viva Completed")
//         })
//     })
// }).catch(()=>{

// })
  
// function Dish(dish, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(dish + " is ready.");
//             resolve();
//         }, delay);
//     });
// }

// Dish("Burger", 1000).then(() => {
//     return Dish("Chaumin", 1000);
// }).then(() => {
//     return Dish("Bhealpuri", 1000);
// }).then(() => {
//     console.log("All Done");
// });

// // Using async/await for better readability
// async function Dishes() {
//     await Dish("Burger", 1000);
//     await Dish("Chaumin", 1000);
//     await Dish("Bhelpuri", 1000);
//     console.log("All done");
// }

// // Call the function to start preparing dishes
// Dishes();



//Fetch

let url='https://api.github.com/users/Satveer0905';
 b=fetch(url);
 b.then((data)=>{
    console.log(data);
        return data.json();

}).then((data)=>{
    console.log(data);
}).catch(()=>{
    console.log("Error")
}).finally(()=>{
    console.log("Finally");
})

// async function getData() {
//     data = await b;
//     console.log(data)
//     json = await data.json();
//     console.log(json);
// }



// async function getData() {
//     const url = 'https://api.github.com/users/Satveer0905';
//     try {
//         const response = await fetch(url); // Fetch data
//         const jsonData = await response.json(); // Parse JSON
//         console.log(jsonData); // Log the data
//     } catch (error) {
//         console.error("Error:", error); // Handle errors
//     }
// }

// // Call the function
// getData();