const pop_up = document.querySelector('.pop-up');
const over = document.querySelector('.over');
const overlay= document.getElementById('overlay');
export const popup = (id,rockets)=>{

    const rocket = rockets.find((data) => data.id === id);
    
    pop_up.innerHTML= `
    
    
    `

    pop_up.classList.toggle('active');
    over.classList.toggle('active');
    overlay.classList.toggle('active');
}