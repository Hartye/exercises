const date = {
    loadDate() {
        let nowDate = new Date()
        let nowYear = nowDate.getFullYear()
        document.querySelector(".date").innerHTML = nowYear
    }
}

var listItems = [
  'Settings',
  'Customer Support',
  'On Demand',
  'Search',
  'Widgets'
];

function executeQ2() {
    const ki = document.querySelector("#q2-list")

    listItems.forEach((value) => {
        let an = document.createElement("li")
        an.innerHTML = value
        ki.appendChild(an)
    })
}

// ======================

function Person() {
  var name = '';

  this.setName = function(n) {
    name = n;
  };

  this.getName = function() {
    return name;
  }
}

function executeQ3() {
    
}

date.loadDate()