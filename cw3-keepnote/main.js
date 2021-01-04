document.querySelector('#Btn').addEventListener('click', submit);
var myData = [
    {
      content: "Go to grocery.",
      complete: true
    },
    {
      content: "Call mom.",
      complete: false
    },
    {
      content: "Take dog to vet.",
      complete: false
    },
    {
      content: "Pay bills.",
      complete: false
    }
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
      myOutput += <div class="item">
          <div class="item-content">
            ${item.content}
          </div>
          <div class="item-actions">
            <i class="far fa-check-square ${item.complete ? '' : 'fade'}" onclick="toggleComplete(${index})"></i>
            <i class="far fa-trash-alt fade" onclick="deleteItem(${index})"></i>
    <i class="fas fa-heart ${item.favorite ? '' : 'fade'}" onclick="toggleFavorite(${index})"></i>
          </div>
        </div>;
    });
    document.querySelector("#results").innerHTML = myOutput;
  }
  
  function submit() {
    var newItem = document.querySelector("#myInput").value;
    myData.push({content: newItem, complete: false});
    updateStorage();
    render();
  }
  
  function deleteItem(index) {
    var verify = confirm("Are you sure? You are about to delete this item.");
    if (verify) {
      myData.splice(index, 1);
      updateStorage();
      render();
    }
  }
  
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
  
  function toggleFavorite(index) {
    if (myData[index].favorite == true) {
      myData[index].favorite = false;
    }
    else {
      myData[index].favorite = true;
    }
    render();
  }
  
  function updateStorage() {
      localStorage.setItem("myStoredData", JSON.stringify(myData));
  }
  
  window.onload = setup();