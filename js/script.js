fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then(res => reload(res.users))

let tenfive = document.querySelector(".age_twenty_five");
let fiveten = document.querySelector(".age_five_ten");
let rest = document.querySelector(".age_rest");
let box = document.querySelector(".ages_box");

function reload(arr) {
  box.innerHTML = "";
  console.log(arr);
  for (let item of arr) {
    let div_korol = document.createElement("div");
    let h1_img = document.createElement("div")
    let name_h1 = document.createElement("h1");
    let img = document.createElement("img")
    let div_age = document.createElement('div')
    let age_h1 = document.createElement("h1");
    let num_h1 = document.createElement('h1')

    name_h1.innerHTML = item.firstName
    age_h1.innerHTML = 'Age'
    num_h1.innerHTML = item.age
    img.src = item.image

    div_korol.classList.add("div_korol");
    name_h1.classList.add("name_h1_box");
    age_h1.classList.add("age_h1_box");
    h1_img.classList.add('h1_img')
    img.classList.add('img')
    div_age.classList.add('div_age')
    num_h1.classList.add('num_h1')

    div_korol.append(h1_img, div_age)
    h1_img.append(name_h1, img)
    div_age.append(age_h1, num_h1)

    if (item.age <= 25) {
      tenfive.append(div_korol);
    } else if (item.age <= 50) {
      fiveten.append(div_korol);
    } else if (item.age >= 50) {
      rest.append(div_korol);
    }
  }
}