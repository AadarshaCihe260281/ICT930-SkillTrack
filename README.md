# SkillTrack – Education & Training Platform

SkillTrack is a responsive React frontend application designed for the CIHE Assignment 2: Frontend Design project.

## Technology stack
- React
- Vite
- React Router
- Context API
- JavaScript
- CSS
- Mock JSON data
- Git/GitHub

## Core features
- Multi-page client-side routing
- Reusable component architecture
- Local and shared state
- Mock JSON with asynchronous loading
- Loading and error states
- Course search and filters
- Course enrolment and lesson progress
- Personal learning dashboard
- Career learning roadmap
- Achievement/badge system
- Weekly learning activity and streak UI
- Frontend knowledge quiz with validation and scoring
- Completion certificate
- Profile form with validation
- Light/dark mode
- Responsive desktop/tablet/mobile design
- Accessibility-focused semantic HTML, labels, ARIA and reduced-motion support
- Animated SkillTrack logo in the navbar

## Installation
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Suggested Git branches
- `member1`: layout, navigation, home, roadmap
- `member2`: course data, course pages, search, filters, async loading
- `member3`: Context API, dashboard, progress, achievements, quiz, certificate, profile

## Assessment mapping
| Requirement | Implementation |
|---|---|
| Client-side routing | React Router |
| Reusable components | Layout, Navbar, CourseCard, ProgressBar, Modal, etc. |
| Local/shared state | useState + Context API |
| Mock/API data | `src/data/courses.json` |
| Async loading | `courseService.js` |
| Loading/error states | Loading + ErrorMessage |
| Forms/validation | Profile + quiz |
| Dynamic interaction | Search, filters, enrolment, lessons, roadmap, badges, quiz, theme |
| Responsive design | CSS media queries |
| Accessibility | Semantic HTML, labels, ARIA, focus styles, reduced motion |

## Branding
The navbar uses `public/skilltrack-logo.png` with a subtle blink/glow animation. The animation respects the user's `prefers-reduced-motion` accessibility preference.

## Important submission note
The application is an assessment project foundation. Your team must personalise it and document your genuine work. GitHub commit history, screenshots, reflection, APA references and the Team Contribution Statement must reflect your team's actual contributions.
