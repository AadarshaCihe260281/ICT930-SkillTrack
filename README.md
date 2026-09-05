# SkillTrack – Education & Training Platform

## 1. Project Overview

SkillTrack is an interactive platform used for educational and training purposes which uses React. The tool helps users in managing their learning experience through discovery of courses, tracking of progress in learning, career path, taking quizzes, and acquiring achievements.

The application allows viewing several interactive pages such as Home, Course Catalogue, Course Details, Dashboard, Career Path, Achievements, Quiz, Certificate, and Profile.

SkillTrack was built using concepts such as reusable components, client-side routing, state management, asynchronous requests, responsiveness, accessibility, and good user experience.

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

The application consists of React components that are reusable for ensuring consistency, maintainability, and code reuse. Examples of components include navigation, courses, buttons, progress bar, loading message, error message, and modal components.

### Client-Side Routing

React Router is used for navigating through the various views of the application without the need for regular page navigation.

### State Management

React Hooks are employed to manage state for local components, whereas the React Context API is applied to handle state across the entire application like that of the learner, courses, achievements, and themes.

### Separation of Data and Interface

The course details are saved in JSON format, whereas the `courseService.js` contains the mechanism through which the data can be loaded. This design makes the application easy to manage and sets the base to integrate the actual API instead of the mock data.

### Responsive Design
The interface incorporates responsive CSS layouts and media queries that allow SkillTrack to function properly on desktops, tablets, and smartphones. Navigation is altered into mobile navigation on mobile screens.

### User Experience

The interface design is based on a consistent card style, buttons, spacing, headings, feedback messages, and other elements. Such features as a learning streak, achievements, roadmap, quiz, and a certificate were added for motivation and engagement purposes.

### Accessibility

Accessibility was ensured through the use of the following techniques: semantics, navigation label, form label, alternative text, keyboard-accessible controls, focus state, and reduced motion.

## 6. Deployed Application URL

**Live Application:**

https://ict-930-skill-track.vercel.app/

**GitHub Repository:**

https://github.com/AadarshaCihe260281/ICT930-SkillTrack
