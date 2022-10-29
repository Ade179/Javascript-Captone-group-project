import render from './render.js';
<<<<<<< HEAD
=======
import popup from './popupwindow.js';
>>>>>>> add-popup

const baseUrl = 'https://ll.thespacedevs.com/2.2.0/launch/upcoming/?mode=list&status=8&ordering=window_end';
const counter = document.querySelector('.count');
const getTheApi = async () => {
  const data = await fetch(baseUrl);
  const res = await data.json();
  render(res.results);
<<<<<<< HEAD
=======
  document.addEventListener('click', (e) => {
    const { id } = e.target;
    if (e.target.matches('.comment')) {
      popup(id, res.results);
    }
  });
>>>>>>> add-popup
  counter.innerText = res.count;
};

export default getTheApi();
