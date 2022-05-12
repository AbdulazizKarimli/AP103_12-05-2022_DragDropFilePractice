//Task-1

// const dropArea = document.querySelector(".drop-area");
// const colorItems = document.querySelectorAll(".color-item");

// dropArea.addEventListener("dragover", (e) => e.preventDefault());

// colorItems.forEach((colorItem) => {
//   colorItem.addEventListener("dragstart", (e) => {
//     const { target, dataTransfer } = e;
//     const red = target.dataset.red;
//     const green = target.dataset.green;
//     const blue = target.dataset.blue;

//     let color = `${red},${green},${blue}`;

//     dataTransfer.setData("text", color);
//   });
// });

// dropArea.addEventListener("drop", (e) => {
//   const { dataTransfer } = e;
//   let givenColors = dataTransfer.getData("text").split(",");

//   const [red, green, blue] = givenColors;

//   dropArea.style.backgroundColor = `rgb(${red},${green},${blue})`;
// });

// let person = {
//   name: "Logman",
//   surname: "Elizade",
// };

// const { name, surname } = person;

// console.log(name);

// let names = ["Jale", "Kamal", "Ilkin", "Fatime", "Ferid", "Nesrullah"];

// const [name1, kamal, test] = names;

// console.log(name1, kamal);

const fileZone = document.querySelector(".file-zone");
const gallery = document.querySelector(".gallery .row");

fileZone.addEventListener("dragover", (e) => e.preventDefault());

fileZone.addEventListener("drop", (e) => {
  e.preventDefault();

  const { dataTransfer } = e;

  let fileReader = new FileReader();

  fileReader.readAsDataURL(dataTransfer.files[0]);

  fileReader.onload = function () {
    console.log(fileReader.result);
    gallery.innerHTML += `
    <div class="col-md-3">
        <img src="${fileReader.result}" class="img-fluid" alt="" />
    </div>
    `;
  };
});
