# DeadlineDefender  
An assignment-tracking web application built using **Node.js, Express, MongoDB, and EJS**.  
Designed for students to keep all deadlines organized in one place.

Live Site: **https://deadline-defender.onrender.com**  
GitHub Repo: **https://github.com/izzatikram-web/deadline-defender**

---

# Overview
DeadlineDefender is a student productivity tool that helps university and college students manage all their course tasks and deadlines in one centralized dashboard.  
Instead of spreading tasks across notebooks, sticky notes, phone reminders, or multiple apps, DeadlineDefender provides a simple, structured, and visually calming space for academic management.

The app uses:
- A splash page with a full-screen anime background and a glass-card introduction  
- A dashboard that lists all tasks pulled directly from MongoDB  
- Full CRUD functionality
---

# Goals & Objectives
- Provide one dashboard showing tasks across all courses  
- Make adding, editing, and deleting assignments simple  
- Show weightage (%) to help users prioritize important tasks  
- Display statuses: *Not Started*, *In Progress*, *Completed*  
- Display urgency levels: *Low*, *Medium*, *High*  
- Keep all data safely stored using MongoDB Atlas  

---

## Main Features

### Home / Splash Page
- Full-screen anime background image  
- Glassmorphism welcome card  
- Intro description  
- “Open Dashboard” button  

### Tasks Dashboard
- Table displaying:
  - Course  
  - Task  
  - Description  
  - Deadline  
  - Weight (%)  
  - Status  
  - Urgency  
  - Edit/Delete buttons  
- Summary bar showing:
  - Total tasks  
  - Completed  
  - In progress  
  - Not started  
- Ambient anime study video placed under the table  
- All data loaded from MongoDB  

### Add Task Page
Form allows the student to enter:
- Course  
- Task name  
- Details/description  
- Deadline (calendar)  
- Weightage  
- Status  
- Urgency  

### Edit Task Page
- Same as Add Task  
- Pre-filled with selected task data  

### Delete Confirmation
- Confirmation page before deleting  
- Prevents accidental removals  
- Deletes from MongoDB upon confirmation  

---

## Tech Stack

### Frontend
- EJS templating  
- HTML5  
- CSS3 (Glassmorphism, blur effects, animations)  
- Bootstrap 5  

### Backend
- Node.js  
- Express.js  

### Database
- MongoDB Atlas  
- Mongoose ODM  

### Deployment
- Render (Web Service)  
- Environment Variables stored securely on Render  

---

## Deployment (Cloud)
This project is fully deployed on Render.

Live link:  
 **https://deadline-defender.onrender.com**

Environment variables (stored on Render, NOT in GitHub):  
