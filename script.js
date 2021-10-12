function toggle() {
    var x = document.getElementById("redbox");
    x.classList.toggle("hide");
  }

  
  var width = document.getElementById("width").value;

  document.getElementById("blueboxSubmit").addEventListener("click", function(e) {
    e.preventDefault();
    let height = document.getElementById("height").value;
    let width = document.getElementById("width").value;
    let position = document.getElementById("position").value;
    document.getElementById("blueboxid").style.height = height + "px";
    document.getElementById("blueboxid").style.width = width + "px";
    if (position == "center") {
        document.getElementById("blueboxid").style.left = "45%";
        document.getElementById("blueboxid").style.top = "45%";
    } else if (position =="left") {
        document.getElementById("blueboxid").style.left = "0%";
    } else if (position =="right") {
        document.getElementById("blueboxid").style.left = "100%";
    } else if (position =="top") {
        document.getElementById("blueboxid").style.top = "0%";
    } else {
        document.getElementById("blueboxid").style.top = "100%";
    }
});

function randomcolor() {
    let random1 = Math.floor(Math.random() * 16777215).toString(16);
    let random2 = Math.floor(Math.random() * 16777215).toString(16);
    let random3 = Math.floor(Math.random() * 16777215).toString(16);
    let random4 = Math.floor(Math.random() * 16777215).toString(16);
    let random5 = Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById("box1").style.backgroundColor = "#" + random1;
    document.getElementById("box2").style.backgroundColor = "#" + random2;
    document.getElementById("box3").style.backgroundColor = "#" + random3;
    document.getElementById("box4").style.backgroundColor = "#" + random4;
    document.getElementById("box5").style.backgroundColor = "#" + random5;
}


document.getElementById("btn2").addEventListener("click", function(e) {
    e.preventDefault();
  var row = document.getElementById("tablecontent").insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  let name = document.getElementById("name").value;
  let surname = document.getElementById("surname").value;
  let birthYear = document.getElementById("birthYear").value;
  for (let i=0; i++ ) { 
    
  cell1.innerHTML = i;
  }
  cell2.innerHTML = name;
  cell3.innerHTML = surname;
    
  cell4.innerHTML = "NEW CELL4";
});