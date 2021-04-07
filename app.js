const peopleBtn = document.querySelector(".people");
const placesBtn = document.querySelector(".places");
const peopleDiv = document.querySelector(".panel-1");
const placesDiv = document.querySelector(".panel-2");



const getPeople = async () => {
  placesDiv.innerHTML = "";
  peopleBtn.setAttribute("disabled", true);
  placesBtn.removeAttribute("disabled");
  
  const data = await fetch("https://randomuser.me/api/?results=30&nat=us");

  const people = await data.json();

  counter = 1
  for (let person of people.results) {
    const div = document.createElement("div");
    div.setAttribute("class", "card-1");

    const imgBox = document.createElement("div");
    imgBox.setAttribute("class","imgBox");

    const content = document.createElement("div");
    content.setAttribute("class", "content");

    const img = document.createElement("img");
    const h3 = document.createElement("h3");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const i1 = document.createElement("i");
    i1.setAttribute("class", "fab fa-linkedin");
    const i2 = document.createElement("i");
    i2.setAttribute("class", "fab fa-facebook-square");
    const i3 = document.createElement("i");
    i3.setAttribute("class", "fab fa-instagram-square");

    img.src = `${person.picture.large}`
    imgBox.append(img);
    
    h3.append(`${person.name.first} ${person.name.last}`);
    p1.append(`${person.email}`);
    p2.append(`${person.phone}`);
    p3.append(i1, i2, i3);
    content.append(h3, p1, p2, p3);
    div.append(imgBox, content);
    peopleDiv.append(div);
    counter += 1
  }

  const social = document.querySelectorAll(".fab");
  social.forEach(item => {
    item.addEventListener("click", () => {
      alert("That won't work, these aren't real people!")
    })
  })
}


const getPlaces = async () => {
  peopleDiv.innerHTML = "";
  placesBtn.setAttribute("disabled", true);
  peopleBtn.removeAttribute("disabled");
  
  const API = "a837b1571878ee3e544714487af8d2517612be7a"
  const data = await fetch(`https://fakerapi.it/api/v1/custom?_quantity=30&customfield1=longitude&customfield2=latitude&customfield3=city&customfield4=image`);
  
  const places = await data.json();
  
  counter = 1
  for (let place of places.data) {
    const div = document.createElement("div");
    div.setAttribute("class", "card-2");
    
    const imgBox = document.createElement("div");
    imgBox.setAttribute("class","imgBox");
    
    const content = document.createElement("div");
    content.setAttribute("class", "content");
    
    const img = document.createElement("img");
    const h3 = document.createElement("h3");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const i1 = document.createElement("i");
    i1.setAttribute("class", "fas fa-map-marker-alt")
    
    img.src = `${place.customfield4}`
    imgBox.append(img);
    
    
    h3.append(`${place.customfield3}`);
    p1.append(`Longitude: ${place.customfield1}`);
    p2.append(`Latitude: ${place.customfield2}`);
    p3.append(i1)
    content.append(h3, p1, p2, p3);
    div.append(imgBox, content);
    placesDiv.append(div);
    counter += 1
  }
  const icon = document.querySelectorAll(".fas");
  icon.forEach(item => {
    item.addEventListener("click", () => {
      alert("That won't work, these aren't real places!")
    })
  })
}


peopleBtn.addEventListener("click", getPeople);
placesBtn.addEventListener("click", getPlaces);
