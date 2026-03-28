import { db } from "../../js/firebase-config.js";

import {
collection,
addDoc,
getDocs,
deleteDoc,
doc,
updateDoc
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

function readFileAsDataURL(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(file);
    });
}

let editID = null;


/* =========================
ADD OR UPDATE COURSE
========================= */

async function addCourse(){

const title = document.getElementById("title").value
const description = document.getElementById("description").value
const file = document.getElementById("image").files[0]
const sampleImage = document.getElementById("sampleImage").value

console.log("Adding course:", {title, description, file: file ? file.name : 'no file', sample: sampleImage})

if(!title || !description){
alert("Please fill all fields")
return
}

try{

let imageURL = null

/* Use sample image if selected */
if(sampleImage){
imageURL = sampleImage
console.log("Using sample image:", imageURL)
}

/* Use uploaded file as data URL (Firestore only) */
else if(file){

console.log("Encoding uploaded image as data URL...")

try{
imageURL = await readFileAsDataURL(file)
console.log("Image encoded:", imageURL?.slice(0, 50) + "...")
}
catch(uploadErr){
console.error("Encoding failed:", uploadErr)
alert("Image encode failed: " + uploadErr.message)
return
}

}

else{
alert("Please select a sample image or upload an image")
return
}

/* EDIT MODE */

if(editID){

const updateData = {
title:title,
description:description
}

if(imageURL){
updateData.image = imageURL
}

await updateDoc(doc(db,"courses",editID),updateData)

alert("Course Updated")

editID = null

}

/* ADD MODE */

else{

await addDoc(collection(db,"courses"),{
title:title,
description:description,
image:imageURL
})

alert("Course Added")

}

clearForm()

loadCourses()

}catch(err){

console.error("Error saving course:", err)
alert("Error saving course: " + err.message)

}

}


/* =========================
LOAD COURSES
========================= */

async function loadCourses(){

const snapshot = await getDocs(collection(db,"courses"))

const container = document.getElementById("courses")

if(snapshot.empty){
container.innerHTML = "<p style='text-align:center; color:#555; font-style:italic;'>No courses yet. Add one using the form above.</p>"
return
}

container.innerHTML = ""

snapshot.forEach((docSnap)=>{

const c = docSnap.data()
const id = docSnap.id

container.innerHTML += `

<div class="course-card">

<img src="${c.image}" onerror="this.src='/pics/course_1774256745067.png'" alt="${c.title}">

<h4>${c.title}</h4>

<p>${c.description}</p>

<div class="admin-buttons">

<button class="edit-btn" onclick="editCourse('${id}','${c.title}','${c.description}')">
Edit
</button>

<button class="delete-btn" onclick="deleteCourse('${id}')">
Delete
</button>

</div>

</div>

`

})

}


/* =========================
EDIT COURSE
========================= */

function editCourse(id,title,description){

document.getElementById("title").value = title
document.getElementById("description").value = description

editID = id

const btn = document.querySelector('button[onclick="addCourse()"]')
if(btn) btn.textContent = "Save Edit"

window.scrollTo({
top:0,
behavior:"smooth"
})

}


/* =========================
DELETE COURSE
========================= */

async function deleteCourse(id){

if(!confirm("Delete this course?")) return

await deleteDoc(doc(db,"courses",id))

loadCourses()

}


/* =========================
CLEAR FORM
========================= */

function clearForm(){

document.getElementById("title").value = ""
document.getElementById("description").value = ""
document.getElementById("image").value = ""
document.getElementById("sampleImage").value = ""

const btn = document.querySelector('button[onclick="addCourse()"]')
if(btn) btn.textContent = "Add Course"

const imagePreview = document.getElementById("imagePreview")
if(imagePreview) imagePreview.style.display = "none"

}



/* =========================
GLOBAL
========================= */

window.addCourse = addCourse
window.deleteCourse = deleteCourse
window.editCourse = editCourse

loadCourses()