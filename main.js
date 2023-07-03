import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import {doc,setDoc} from "./firebase/config"

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Online Voting System</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>

    <form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br>
  <label for "address">Address:</label><br>
  <input type="text" id="address" name="address"> <br>
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
  <input type="submit" value="Submit">
</form>


  </div>
`

setupCounter(document.querySelector('#counter'))
