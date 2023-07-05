import './style.css'
import boju from "/boju.png"
import election_commision_india from "/election-commission-india.svg"
import {setupForm} from "./counter.js"

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">

      <img src="${election_commision_india}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${boju}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Online Voting System</h1>
   
    <p class="read-the-docs">
      This website is strictly to be used under the guidence of polling officer representing election commission of India
      
    </p>

    <form method="post" onsubmit="${setupForm()}" id="form_one">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" ><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" ><br>
  <label for "address">Address:</label><br>
  <input type="text" id="address" name="address"> <br>
  <br><br>
  <label for "gender"> choose a gender:</label>
  <select name="gender" id="gender">
  <option value="male">male</label>
  <option value="female">female</label>
  </select>
  <br><br>
  <label for="voter_id"> voter_id:</label><br>
  <input type="text" id="voter_id" name="voter_id"><br>
  <label for="word_no"> word_no:</label><br>
  <input type="word_no" id = "word_number" name="word_number"<br><br><br>
  <label for="district">Choose a district:</label>
  <select name="district" id="district">
    <option value="gangtok">gangtok</option>
    <option value="pakyoung">pakyoung</option>
    <option value="soreng">soreng</option>
    <option value="magan">magan</option>
    <option value="namchi">namchi</option>
    <option value="geyzing">geyzing</option>
  </select>
    <br><br>
<label for="parties"> choose a parties:</label>
<select name="parties" id="parties">
<option value="SDF">SDF</option>
<option value="SKM">SKM</option>
<option value="CAP">CAP</option>
<option value="NOTA">NOTA</option>
</select>
<br><br>
  
  <input type="submit" value="Submit">
</form>


  </div>
`

setupForm(document.querySelector("#form_one"))

