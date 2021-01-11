var myData = [
];
function setup() {
  if (localStorage.getItem("myStoredData")) {
    myData = JSON.parse(localStorage.getItem("myStoredData"));
  }
  render();
}
function render() {
  var myOutput = "";
  myData.forEach(function (item, index) {
    myOutput += `
      <div class="item">
      <div class="nav">
      <div class="item-title">
      ${item.titel}
      </div>
      </div>
        <div class="item-content">
          ${item.content}
        </div>
        <div class="item-actions">
          <i class="far fa-check-square ${item.complete ? '' : 'fade'}" onclick="toggleComplete(${index})"></i>
          <i class="far fa-trash-alt fade" onclick="deleteItem(${index})"></i>
          <i class="fas fa-heart  ${item.favorite ? '' : 'fade'}" onclick="toggleFavorite(${index})  "></i>
        </div>
      </div>`;
  });
  document.querySelector("#results").innerHTML = myOutput;
}



	
// eslint-disable-next-line no-unused-vars
function submit() {
  var newItem = document.querySelector("#myInput").value;
  var title = document.querySelector("#title").value;
 

  myData.push({content: newItem, titel: title, complete: false});
  updateStorage();
  render();
}

// eslint-disable-next-line no-unused-vars
function deleteItem(index) {
  var verify = confirm("Are you sure? You are about to delete this item.");
  if (verify) {
    myData.splice(index, 1);
    updateStorage();
    render();
  }
}

// eslint-disable-next-line no-unused-vars
function toggleComplete(index) {
  if (myData[index].complete == true) {
    myData[index].complete = false;
  }
  else {
    myData[index].complete = true;
  }
  updateStorage();
  render();
}

// eslint-disable-next-line no-unused-vars
function toggleFavorite(index) {
  if (myData[index].favorite == true) {
    myData[index].favorite = false;
  }
  else {
    myData[index].favorite = true;
  }
  updateStorage();
  render();
}

function updateStorage() {
    localStorage.setItem("myStoredData", JSON.stringify(myData));
}

window.onload = setup();

