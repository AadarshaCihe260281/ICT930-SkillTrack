# SkillTrack – Education & Training Platform

## ICT930 Advanced Web Application Development

**Assessment:** Assignment 2 – Frontend Design Overview  
**Course:** MIT  
**Unit:** ICT930 Advanced Web Application Development  
**Semester:** Semester 2, 2026  

---

## 1. Project Overview

SkillTrack is a responsive education and training platform designed to help learners organise their learning journey, discover courses, monitor their progress and work towards career goals.

The application provides a centralised learning experience where users can browse available courses, search and filter learning content, view detailed course information, track course progress, follow a career roadmap, complete knowledge quizzes and earn achievements.

The system was developed as a modern frontend web application using React. The project focuses on reusable components, client-side routing, state management, asynchronous data loading, responsive design, accessibility and interactive user experiences.

The main goal of SkillTrack is to demonstrate how a modern frontend framework can be used to design and implement an engaging education and training platform.

---

## 2. Problem Domain

SkillTrack addresses the Education and Training domain.

Many learners have difficulty maintaining a clear learning path when educational resources are distributed across different platforms. Learners may also lack visibility of their progress, career direction and learning achievements.

SkillTrack addresses these challenges by combining course discovery, progress tracking, career planning, achievements and knowledge assessment into one responsive web interface.

### Target Users

The primary target users are:

- Students
- Self-directed learners
- Beginner developers
- Users developing technical skills
- Learners working towards a specific career goal

---

## 3. Key Features

### Course Catalogue

Users can browse available courses through a structured course catalogue.

Features include:

- Course cards
- Course categories
- Course difficulty information
- Course descriptions
- Course progress
- Course enrolment
- Course detail pages

### Search and Filtering

Users can quickly find relevant courses using:

- Course search
- Category filtering
- Difficulty filtering
- Dynamic filtering of course results

### Course Details

Each course has a dedicated details page containing relevant course information and learning progress.

### Learning Dashboard

The dashboard provides an overview of the learner's activity, including:

- Enrolled courses
- Course completion progress
- Learning statistics
- Weekly learning activity
- Learning streak
- Recent learning information

### Career Roadmap

SkillTrack includes a Frontend Developer career roadmap that provides learners with a structured progression of skills and learning areas.

The roadmap helps users understand what skills they can focus on as they progress towards a frontend development career.

### Achievements

The achievement system provides badges and recognition based on learning activity and progress.

This feature is designed to encourage continued learner engagement.

### Learning Streak

SkillTrack includes a seven-day learning streak feature that encourages users to maintain consistent learning activity.

### Frontend Knowledge Quiz

Users can complete a frontend knowledge quiz containing multiple questions.

The quiz provides:

- Interactive questions
- Answer selection
- Score calculation
- Result feedback
- Learning assessment

### Certificate

The certificate view provides a completion-oriented outcome for learners who complete course requirements.

### User Profile

The profile page allows users to manage personal learning information and career goals.

### Theme Toggle

Users can switch between light and dark visual themes.

### Responsive Design

The application is designed to work across:

- Desktop computers
- Laptops
- Tablets
- Mobile devices

The navigation and page layouts adapt to smaller screen sizes.

---

## 4. Technology Stack

### Frontend

- React
- JavaScript
- React Router
- Vite
- CSS

### State Management

- React Hooks
- React Context API

### Data

- Mock JSON data
- Asynchronous data service

### Development Tools

- Visual Studio Code
- Git
- GitHub
- Vite development server

### Deployment

- Vercel

---

## 5. Project Architecture

SkillTrack follows a modular component-based architecture.

The project separates pages, reusable UI components, layout components, application state, data services and mock data.

```text
SkillTrack
│
├── public/
│   └── skilltrack-logo.png
│
├── src/
│   ├── components/
│   │   ├── courses/
│   │   ├── layout/
│   │   └── ui/
│   │
│   ├── context/
│   │   └── AppContext.jsx
│   │
│   ├── data/
│   │   └── courses.json
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Courses.jsx
│   │   ├── CourseDetails.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Roadmap.jsx
│   │   ├── Achievements.jsx
│   │   ├── Quiz.jsx
│   │   ├── Certificate.jsx
│   │   ├── Profile.jsx
│   │   └── NotFound.jsx
│   │
│   ├── services/
│   │   └── courseService.js
│   │
│   ├── styles/
│   │   └── global.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
