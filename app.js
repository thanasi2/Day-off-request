

const form = document.getElementById('content');
const request = document.getElementById('rType');

// section that is added if request type is "Day(s) Off"
const addSec = function() {
  var newDiv = document.createElement("div");
  newDiv.innerHTML =(`Off Type<br>
    <select name="Off Type" id="offType" value="0" onchange="funcOff()">
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
    Date:<br>
    <input id="date" type="date" value="12/9/2019" name="date"><br>
    <br>
    <button value="submit" onclick="addCard()">Add to queue</button>`);
    form.appendChild(newDiv);
}
// section that is added if request type is "Swap"
const addSec2 = function() {
  var newDiv = document.createElement("div");
  newDiv.innerHTML =(`
    Your EMP# (Swap off):<br>
    <input id="emp1" type="text" name="emp1#"><br>
    Their EMP# (Swap work):<br>
    <input id='emp2' type="text" name="emp2#"><br>
    Date:<br>
    <input id='date' type="date" value="12/9/2019" name="date"><br>
    <br>
    <button value="submit" onclick="addCard()">Add to queue</button>`);
    form.appendChild(newDiv);
}
// adds form based on request type
function func() {
  if (request.value === 'Day(s) Off') {
    if (form.childElementCount === 2) {
      form.children[1].remove();
      addSec();
      } else {
        addSec();
      }
  }else if (request.value === 'Swap') {
    if (form.childElementCount === 2) {
      form.children[1].remove();
      addSec2();
      }else {
        addSec2();
      }
  }else if (request.value === '' && form.childElementCount === 2 ) {
    form.children[1].remove();
  }
}
// adds hour input if off type is vacation or ppt
function funcOff() {
  var oType = document.getElementById('offType');
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
// adds request to queue
function addCard(){
  const date = document.getElementById('date').value;
  const queueForm = document.getElementById('queueForm');
  if(request.value === 'Day(s) Off'){
    var offType = document.getElementById('offType').value;
     if(offType === "Vacation" || offType === "PPT"){
       var hours = document.getElementById('hrInput').children[1].value;
       var card = `
       <div name="request" class="card">
          <div class="remove" onclick="removeCard(event)">Remove</div>
          <div>Off type: ${offType}</div>
          <br>
          <div>Hours: ${hours}</div>
          <br>
          <div>Date: ${date}</div>
          </div>`;
      }else{
        var card = `
          <div name="request" class="card">
            <div class="remove" onclick="removeCard(event)">Remove</div>
            <div>Off type: ${offType}</div>
            <br>
            <div>Date: ${date}</div>
          </div>`;
      }
    queueForm.insertAdjacentHTML('beforeend', card);
  }else if(request.value === 'Swap') {
    const emp1 = document.getElementById('emp1').value;
    const emp2 = document.getElementById('emp2').value;
    var card = `
    <div name="request" class="card">
      <div class="remove" onclick="removeCard(event)">Remove</div>
      <div>Off type: ${request.value}</div>
      <br>
      <div>Date: ${date}</div>
      <br>
      <div>Swap off: ${emp1}</div>
      <br>
      <div>Swap Work: ${emp2}</div>
    </div>`;
    queueForm.insertAdjacentHTML('beforeend', card);
  }
}
// Removes card from queue if "Remove" is clicked
function removeCard(evt) {
  evt.target.parentElement.remove();
}
