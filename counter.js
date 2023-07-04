import {doc,setDoc,db} from "./firebase/config"
/*export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}*/



export  function setupForm(element)
{
  if(element)
  {
    element.addEventListener("submit",async(e)=>{
     e.preventDefault();
     
     let first_name = document.getElementById("fname").value;
     let last_name = document.getElementById("lname").value;
     let address = document.getElementById("address").value;
     let  voter_id = document.getElementById("voter_id").value;
     let district = document.getElementById("district").value;
     let word_number = document.getElementById("word_number").value;
     let vote = document.getElementById("parties").value;
     let gender = document.getElementById("gender").value
    

     // Add a new document in collection "voters"
     await setDoc(doc(db,"voters",`${voter_id}`),{
      district,
      word_number,
      vote,
     })
     alert("Your response has been added")

  })
}

}