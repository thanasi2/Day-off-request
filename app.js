

const form = document.getElementById('content');
const rType = document.getElementById('myList');
const addSec = function() {
  var newDiv = document.createElement("div");
  newDiv.innerHTML =(`Off Type<br>
    <select name="Off Type" id="myList2" onchange="funcOff()">
    <option></option>
    <option>Vacation</option>
    <option>H1</option>
    <option>H2</option>
    <option>H3</option>
    <option>H4</option>
    <option>H5</option>
    <option>H6</option>
    <option>H7</option>
    <option>H8</option>
    <option>H9</option>
    <option>H11</option>
    <option>PPT</option>
    </select><br>
    Your EMP#:<br>
    <input type="text" name="emp1#"><br>
    Date:<br>
    <input id="date" type="date" value="12/9/2019" name="date"><br>
    <br>
    <button value="submit" onclick="addCard()">Add to queue</button>`);
    form.appendChild(newDiv);
}

const addSec2 = function() {
  var newDiv = document.createElement("div");
  newDiv.innerHTML =(`
    Your EMP# (Swap off):<br>
    <input type="text" name="emp1#"><br>
    Their EMP# (Swap work):<br>
    <input type="text" name="emp2#"><br>
    Date:<br>
    <input type="date" value="12/9/2019" name="date"><br>
    <br>
    <button value="submit">Submit</button>`);
    form.appendChild(newDiv);
}

function func() {
  if (rType.value === 'Day(s) Off') {
    if (form.childElementCount === 2) {
      form.children[1].remove();
      addSec();
      } else {
        addSec();
      }
  }else if (rType.value === 'Swap') {
    if (form.childElementCount === 2) {
      form.children[1].remove();
      addSec2();
      }else {
        addSec2();
      }
  }else if (rType.value === '' && form.childElementCount === 2 ) {
    form.children[1].remove();
  }
}

function funcOff() {
  var oType = document.getElementById('myList2');
  if (oType.value === "PPT" || oType.value === "Vacation" ) {
    if (document.getElementById('hrInput')) {
      document.getElementById('hrInput').remove();
    }
    oType.insertAdjacentHTML('afterend','<div id="hrInput"> # of hours<br><input name="# of hours"></input></div>' )
  }else if (oType.value !== "PPT" || oType.value !== "Vacation") {
    if (document.getElementById('hrInput')) {
      document.getElementById('hrInput').remove();
    }
  }
}

function addCard(){
  var offType = document.getElementById('myList2').value;
  var date = document.getElementById('date').value;
  var queueForm = document.getElementById('queueForm');
  var card = `<div name="request" class="card"><div class="remove" onclick="removeCard(event)">Remove</div>Off type: ${offType} <br> Date: ${date}</div>`;
  queueForm.insertAdjacentHTML('beforeend', card);

}

function removeCard(evt) {
  evt.target.parentElement.remove();
}
