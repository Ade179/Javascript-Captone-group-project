const cardContainer = document.querySelector('.card-cont');
<<<<<<< HEAD
=======

>>>>>>> add-popup
const render = (data) => {
  data.forEach((dat) => {
    const containment = document.createElement('div');
    containment.classList.add('containment');
    containment.innerHTML = `
         <div class="contain">
         <img src="${dat.image}" class = "img" alt="">
         <div class="heading">
             <p class="mission-name">${dat.name}</p>
             <div class="likes"></div>
         </div>
<<<<<<< HEAD
        <div class="buttons">
         <button class="comment">Comments</button>
        </div>
     </div>
         `;
    cardContainer.appendChild(containment);
  });
};
module.exports = render;
=======
         <button id="${dat.id}" class="comment">Comments</button>
        </div>
         `;
    cardContainer.append(containment);
  });
};
export { render as default };
>>>>>>> add-popup
