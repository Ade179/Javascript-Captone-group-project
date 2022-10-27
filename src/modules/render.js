const cardContainer = document.querySelector('.card-cont');
const render = (data) =>{
    data.forEach(dat =>{
     const containment = document.createElement('div')
     containment.classList.add('containment')
        containment.innerHTML = `
         <div class="contain">
         <img src="${dat.image}" class = "img" alt="">
         <div class="heading">
             <p class="mission-name">${dat.name}</p>
             <div class="likes"></div>
         </div>
        <div class="buttons">
         <button class="comment">Comments</button>
         <button class="reservation">reservation</button>
        </div>
     </div>
         `
         cardContainer.appendChild(containment)
     })
     }
     
const comment = document.querySelectorAll('.comment')
console.log(comment)
   module.exports = render
