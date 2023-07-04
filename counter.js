import {doc,setDoc} from "./firebase/config"
export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}



export function setupForm(element)
{
  element.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log(e)


  })

}