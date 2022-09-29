// deux facon de selectionner un id
const btn = document.querySelector("#btn");
const img = document.getElementById("img");

btn.addEventListener("click", () => {
  // console.log('yes !');
  //   img.classList.add("show");
  img.classList.toggle("show");
  alert("Le style va changer");
});

// =====================mouseEvent============
// normalement toutes ces declarations se font en haut de page
// console.log(event); = console.log(e);

const mouseEvent = document.querySelector(".mouseEvent");
const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");

mouseEvent.addEventListener("mousemove", (e) => {
  // console.log(event);
  horizontal.innerHTML = e.x;
  vertical.innerHTML = e.y;
  mouseEvent.style.left = (e.x / window.innerWidth) * 100 + "%";

  if (e.x > 500) {
    document.body.style.filter = "blur(3px) ";
  } else {
    document.body.style.filter = "none";
  }
});

// ==================== On peu ne pas declarer une variable

document.getElementById("input").addEventListener("input", (e) => {
  // console.log(e.target.value);
  vertical.innerHTML = e.target.value;
});
// ========================

const theme = document.querySelectorAll(".theme");

// on peu tout mettre a la place de ITEM, ce n'est qu'un nom (parametre)
theme.forEach((item) => {
  item.addEventListener("click", (e) => {
    // console.log(e.target.id);
    document.body.classList.remove('darkTheme', 'yellowTheme', 'salmonTheme' )
    switch (e.target.id) {
      case "dark":
        document.body.classList.add("darkTheme");
        break;
      case "salmon":
        document.body.classList.add("salmonTheme");
        break;
      case "yellow":
        document.body.classList.add("yellowTheme");
        break;

      default:
        null;
        break;
    }
  });
});

// manipulation des données 1:13:00
