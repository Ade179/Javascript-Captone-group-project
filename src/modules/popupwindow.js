const pop_up = document.querySelector('.pop-up');
const over = document.querySelector('.over');
const overlay= document.getElementById('overlay');
export const popup = (id,rockets)=>{

    const rocket = rockets.find((data) => data.id === id);
    
    pop_up.innerHTML= `
    <div class="titles">
    <img class="rocketimage" src="${rocket.image}" alt="rocket">
    <button class="close">&times;</button>
</div>
<div class="content">
    <h1>${rocket.name}</h1>
    <div class="info">
        <ul class="line1">
            <li><span>Logistics Service Provider:</span> ${rocket.lsp_name}</li>
            <li><span>Orbit:</span> ${rocket.orbit}</li>
            <li><span>Pad:</span> ${rocket.pad}</li>
        </ul>
        <ul class="line2">
        <li><span>Mission:</span> ${rocket.mission}</li>
        <li><span>Mission Type:</span> ${rocket.mission_type}</li>
        <li><span>Location:</span> ${rocket.location}</li>
        </ul>
    </div>
    <h3>comment(2)</h3>
    <ul>
    <li>29/3/2022 at what the fuck</li>
    <li>29/3/2022 at what the fuck</li>
    </ul>

    <h3>Add comment</h3>
    <form>
        <input type="text" class="input" placeholder="your name">
        <textarea name="insight" class="input" cols="30" rows="10" placeholder="your insights"></textarea>
        <button type="button">comment</button>
    </form>
</div>    
    `

    pop_up.classList.toggle('active');
    over.classList.toggle('active');
    overlay.classList.toggle('active');
    const close = document.querySelector('.close');
          close.addEventListener("click", ()=>{
            pop_up.classList.remove('active');
            over.classList.remove('active');
            overlay.classList.remove('active');
          })
}