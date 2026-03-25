import { db } from "./firebase-config.js"

import {
collection,
onSnapshot
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js"



/* MOBILE MENU */

const menu = document.querySelector(".nav__menu")
const openBtn = document.querySelector("#open-menu-btn")
const closeBtn = document.querySelector("#close-menu-btn")

if(openBtn){

openBtn.addEventListener("click",()=>{

menu.style.display="flex"
openBtn.style.display="none"
closeBtn.style.display="inline-block"

})

closeBtn.addEventListener("click",()=>{

menu.style.display="none"
openBtn.style.display="inline-block"
closeBtn.style.display="none"

})

}



/* FIREBASE COURSES */

const container = document.querySelector(".courses__container")

if(container){

onSnapshot(collection(db,"courses"),(snapshot)=>{

container.innerHTML=""

snapshot.forEach(doc=>{

const c = doc.data()

container.innerHTML+=`

<article class="course">

<div class="course__image">
<img src="${c.image}" onerror="this.src='/pics/course_1774256745067.png'" alt="${c.title}">
</div>

<div class="course__info">

<h4>${c.title}</h4>

<p>${c.description}</p>

</div>

</article>

`

})

})

}