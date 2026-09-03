# SkillTrack – Education & Training Platform

## 1. Project Overview

SkillTrack is a responsive education and training platform developed using React. The system is designed to help learners manage their learning journey by discovering courses, tracking learning progress, following a career roadmap, completing quizzes, and earning achievements.

The application provides multiple interactive views including a home page, course catalogue, course details, dashboard, career roadmap, achievements, quiz, certificate, and profile.

SkillTrack was developed with a focus on reusable components, client-side navigation, state management, asynchronous data loading, responsive design, accessibility, and an engaging user experience.

## 2. Technology Stack

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
- JSON mock data
- Asynchronous data service

### Development and Version Control
- Node.js
- npm
- Git
- GitHub

### Deployment
- Vercel

## 3. Installation Instructions

### Prerequisites

The following software is required:

- Node.js
- npm
- Git

### Clone the Repository

```bash
git clone https://github.com/AadarshaCihe260281/ICT930-SkillTrack.git
```

### Navigate to the Project

```bash
cd ICT930-SkillTrack
```

### Install Dependencies

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

Open the local URL displayed in the terminal.

### Build the Application

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

## 4. Key Features

- Responsive education and training platform
- Multi-page client-side navigation using React Router
- Course catalogue
- Course search and filtering
- Individual course details
- Course enrolment and progress tracking
- Learning dashboard
- Weekly learning activity
- Seven-day learning streak
- Frontend Developer career roadmap
- Achievement and badge system
- Frontend knowledge quiz
- Quiz result feedback
- Course completion certificate
- User profile and career goals
- Light and dark theme toggle
- Loading and error states
- Form handling and validation
- Responsive mobile navigation
- Accessibility considerations
- Reusable React components

## 5. Design Decisions

### Component-Based Architecture

The application is organised into reusable React components to improve consistency, maintainability, and code reuse. Components such as navigation, course cards, buttons, progress bars, loading messages, error messages, and modals are reused throughout the application.

### Client-Side Routing

React Router is used to provide navigation between the different views of the application without requiring traditional full-page navigation.

### State Management

React Hooks are used for local component state, while the React Context API is used for shared application state such as learner information, course progress, achievements, and theme preferences.

### Separation of Data and Interface

Course information is stored separately in JSON data, while `courseService.js` provides the data-loading functionality. This separation makes the application easier to maintain and provides a foundation for replacing the mock data with a real API in the future.

### Responsive Design

The interface uses responsive CSS layouts and media queries so that SkillTrack can be used on desktop, tablet, and mobile devices. The navigation also changes to a mobile-friendly menu on smaller screens.

### User Experience

The design uses consistent cards, buttons, spacing, headings, progress indicators, and feedback messages. Features such as the learning streak, achievements, roadmap, quiz, and certificate were included to make the learning experience more engaging and motivating.

### Accessibility

Basic accessibility practices were incorporated through semantic elements, accessible navigation labels, form labels, alternative text, keyboard-friendly controls, focus states, and reduced-motion support.

## 6. Deployed Application URL

**Live Application:**

[ADD DEPLOYED APPLICATION URL HERE]

**GitHub Repository:**

https://github.com/AadarshaCihe260281/ICT930-SkillTrack
