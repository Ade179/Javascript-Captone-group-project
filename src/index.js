import './style.css'
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import getTheApi from './modules/getTheApi.js';
import render from './modules/render.js';
render()
getTheApi()

const modalPopup = document.querySelector('.pop-up')
const comment = document.querySelector('.comment')

// comment.addEventListener('click', (e)=>{
// e.preventDefault()
// modalPopup.style.display = 'block';
// modalPopup.innerHTML = `
//         <div class="contained">
//            <div><img src="" alt=""></div> 
//            <h2>X</h2>
//            <div class="name"></div>
//         </div>
//         <article class="information">
//         <div class="info">
//             <h3 class="mission"></h3>
//             <h3 class="mission-type"></h3>
//         </div>
//         <div class="info2">
//             <h3 class="pad"></h3>
//             <h3 class="location"></h3>
//         </div>
//     </article>
//     <h1 class="reservation">Reservation</h1>
//     <div class="reservecontainer"></div>
//     <h2 class="addreserve">Add a reservation</h2>
//     <form action="" class="form">
//         <input type="text" name="username" class="username" placeholder="Your name">
//         <input type="text" name="username" class="username" placeholder="Start date">
//         <input type="text" name="username" class="username" placeholder="End date">
//         <button type="submit">Reserve</button>
//     </form>
// `
// })

console.log(comment)