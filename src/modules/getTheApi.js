const baseUrl = 'https://ll.thespacedevs.com/2.2.0/launch/upcoming/?mode=list&status=8&ordering=window_end'
const counter = document.querySelector('.count')
import render from "./render";
const getTheApi = async () => {
    const data = await fetch(baseUrl)
       const res = await data.json()
       render(res.results)
       counter.innerText = res.count
      };

     export default getTheApi()
