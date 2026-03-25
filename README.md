# Bright Horizons Web Platform

A modern educational website with an admin dashboard that allows administrators to manage courses dynamically using Firebase.

The system allows users to view courses and administrators to add, edit, and delete courses through a connected Firebase backend.

---

## Project Overview

Bright Horizons is an educational web platform designed to showcase learning programs and courses. The system includes a public-facing website and an admin dashboard for managing course content.

Courses are stored in Firebase Firestore and images are uploaded to Firebase Storage. This allows real-time updates and cloud-based data management.

---

## Features

### Public Website

* View available courses
* Responsive design for mobile, tablet, and desktop
* Dynamic course loading from Firebase
* Clean and modern UI

### Admin Dashboard

* Add new courses
* Upload course images
* Edit course details
* Delete courses
* Real-time updates using Firebase

---

## Technologies Used

Frontend

* HTML5
* CSS3
* JavaScript (ES6)

Backend / Database

* Firebase Firestore
* Firebase Storage
* Firebase Authentication

Tools

* GitHub
* Firebase Hosting (optional for deployment)

---



## Firebase Setup

1. Create a Firebase Project.

2. Enable the following services:

* Firestore Database
* Firebase Storage
* Authentication (Email/Password)

3. Replace the configuration in `firebase-config.js` with your Firebase project configuration.

Example:

```
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "yourproject.firebaseapp.com",
  projectId: "yourproject",
  storageBucket: "yourproject.appspot.com",
  messagingSenderId: "XXXX",
  appId: "XXXX"
};
```

---

## How to Run the Project

1. Clone the repository

```
git clone https://github.com/yourusername/brighthorizons-web.git
```

2. Open the project folder

3. Run using a local server (recommended)

Example with VS Code Live Server.

4. Open the browser at

```
http://127.0.0.1:5500
```

---

## Admin Access

The admin dashboard allows management of courses.

Admin features include:

* Add course
* Upload course image
* Edit course
* Delete course

Admin page example:

```
/admin/dashboard.html
```

---

## Deployment

The project can be deployed using:

* Firebase Hosting
* Netlify
* Vercel
* GitHub Pages

For Firebase Hosting:

```
firebase init
firebase deploy
```

---

## Future Improvements

* Admin authentication protection
* Course enrollment system
* User accounts
* Payment integration
* Video learning modules
* Course search and filtering

---

## Author

This project was created as part of a web engineering 

---

## License

This project is for educational purposes only.
