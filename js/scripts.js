var health = 100;
var happiness = 100;
var hunger = 25;
var energy = 100;

$("#HP").append(health);
$("#LV").append(happiness);
$("#HG").append(hunger);
$("#EG").append(energy);
$("#text").append("<center>welcome to vPet</center>");

$("#Pet").on("click", function () {
  console.log("You pet the vPet");
  happiness = happiness + 5;
  $("#LV").empty();
  $("#LV").append("Love:" + happiness);
  if (happiness >= 100) {
    $("#text").empty();
    $("#text").append("Your vPet is happy");
  }
  if (happiness >= 500) {
    $("#HP").remove();
    $("#LV").remove();
    $("#HG").remove();
    $("#EG").remove();
    $("#HP").remove();
    $("#Pet").remove();
    $("#Feed").remove();
    $("#Play").remove();
    $("#Sleep").remove();
    $("#text").empty();
    $("#text").append(
      "Your vPet is so happy they transcended to a higher plane of existence. " +
        "<br/> <br/> Becoming a god like entity. " +
        "<br/> <center>[Refresh the page to try again]</center>"
    );
  }
});

$("#Feed").on("click", function () {
  $("#text").empty();
  $("#text").append("You fed the vPet");
  hunger = hunger + 5;
  $("#HG").empty();
  $("#HG").append("Hunger:" + hunger);
  if (hunger >= 100) {
    $("#text").empty();
    $("#text").append("Your vPet is full");
  }
  if (hunger >= 600) {
    $("#HP").remove();
    $("#LV").remove();
    $("#HG").remove();
    $("#EG").remove();
    $("#HP").remove();
    $("#Pet").remove();
    $("#Feed").remove();
    $("#Play").remove();
    $("#Sleep").remove();
    $("#text").empty();
    $("#text").append(
      "Your vPet has eaten so much that it has become a black hole and sucked you in. " +
        "<br/> <br/> <center>[Refresh the page to try again]</center>"
    );
  }
});

$("#Play").on("click", function () {
  $("#text").empty();
  $("#text").append("Your vPet is playing");
  energy = energy - 5;
  hunger = hunger - 5;
  $("#EG").empty();
  $("#HG").empty();
  $("#EG").append("Energy:" + energy);
  $("#HG").append("Hunger:" + hunger);
  if (energy <= 0) {
    $("#text").empty();
    $("#text").append("Your vPet is tired");
  }
  if (hunger <= -400) {
    $("#HP").remove();
    $("#LV").remove();
    $("#HG").remove();
    $("#EG").remove();
    $("#HP").remove();
    $("#Pet").remove();
    $("#Feed").remove();
    $("#Play").remove();
    $("#Sleep").remove();
    $("#text").empty();
    $("#text").append(
      "his DEAD.. you killed him.. you monster :( " +
        "<br/> <center>[Refresh the page to try again]</center>"
    );
  }
});

$("#Sleep").on("click", function () {
  $("#text").empty();
  $("#text").append("you sent your vPet to sleep");
  energy = energy + 5;
  $("#EG").empty();
  $("#EG").append("Energy:" + energy);
  if (energy >= 100) {
    $("#text").empty();
    $("#text").append("Your vPet is well rested");
  }
  if (energy >= 500) {
    $("#HP").remove();
    $("#LV").remove();
    $("#HG").remove();
    $("#EG").remove();
    $("#HP").remove();
    $("#Pet").remove();
    $("#Feed").remove();
    $("#Play").remove();
    $("#Sleep").remove();
    $("#text").empty();
    $("#text").append(
      "your vPet has sleeped for so long that it has" +
        "<br/> created a whole dream world were you are the pet...." +
        "<br/> <br/>They kill you instantly <br/> <center>[Refresh the page to try again]</center>"
    );
  }
});
