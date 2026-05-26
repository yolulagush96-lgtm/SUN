let onload= alert("Tap everything you see!");

const blocks = document.querySelectorAll(".block");
const body = document.body;

blocks.forEach(block => {

  block.addEventListener("click", () => {

    let song;

    if(body.classList.contains("eclipse")) {

      song = block.dataset.eclipse;

    } else {

      song = block.dataset.day;

    }

    window.open(song, "_blank");

  });

});


const sun = document.querySelector(".sun");

sun.addEventListener("click", () => {
  body.classList.toggle("eclipse");
});


