let userInput = document.getElementById("neighborhoodTextBox");

function getUserInput() {
  let userInput = `<p>{userInput.value}</p>`;

  try {
    if (getUserInput()) {
      `<ul>list.innerHTML = userInput</ul>`;
    }
  } catch (err) {
    errorList.push("Please enter a real place!");
  }
}

function checkNeighborhoodStatus() {
  let neighborhood = $(userInput).value();
  $.ajax({
    type: "post",
    url: "input.js",
    data: { Ratings: area },
    success: function (msg) {
      alert(msg);
    },
  });
}
