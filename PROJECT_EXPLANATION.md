# Flat Ride Engineering — Tomorrow's Project Explanation

## 1. Project introduction (say this)
"I developed a responsive multi-page company website for Flat Ride Engineering, an automotive engineering and vehicle simulation consultancy. The objective is to present the company's services, communicate its technical identity, build credibility and make it easy for potential clients to submit enquiries. I used React.js, JavaScript, HTML5 and CSS3."

## 2. Technology choices
- **HTML5:** `index.html` provides the page metadata and the root element where React mounts.
- **CSS3:** `src/styles.css` controls colours, typography, layout, responsive breakpoints, hover states and mobile navigation presentation.
- **JavaScript ES6+:** handles component logic, form state, event handlers, array mapping and navigation behaviour.
- **React:** the UI is split into reusable components and page components.
- **React Router:** maps URL paths to the six pages without full-page reloads.
- **Vite:** development server and production build tool.
- **Lucide React:** consistent SVG icons.

## 3. Folder structure
- `src/main.jsx`: application entry point; mounts React and wraps the app in `BrowserRouter`.
- `src/App.jsx`: main route configuration and shared page layout.
- `src/data.js`: central service and project data. Keeping content here avoids repeating markup.
- `src/components/`: reusable Navbar, Footer, SectionHeading, ServiceCard and EnquiryForm.
- `src/pages/`: Home and the About, Services, Projects, Careers and Contact page components.
- `src/styles.css`: global design system and responsive styling.
- `public/`: static assets such as the company logo.

## 4. Explain the React concepts used
- **Components:** Navbar, Footer, ServiceCard and pages are independent reusable UI units.
- **Props:** `ServiceCard` receives `service` and `index`; `SectionHeading` receives `eyebrow`, `title` and `text`.
- **State:** `useState` controls the mobile menu and enquiry form field values.
- **Events:** `onClick`, `onChange` and `onSubmit` respond to user actions.
- **Lists and keys:** `.map()` renders service cards and navigation links; each item has a stable `key`.
- **Conditional rendering:** the navigation class changes when the mobile menu is open; the form shows a status note after submission.
- **Effect:** `useEffect` in `ScrollToTop` moves the viewport to the top when the route changes.
- **Routing:** `Routes`, `Route`, `Link` and `NavLink` provide page navigation.

## 5. How the enquiry form works
"The form is a controlled React form. The values are stored in component state. Each input updates state through the `update` handler. HTML required and email input validation are used. On submit, the form prepares an email subject and body and opens the visitor's default email application using a mailto link."

Important: this is a frontend demonstration. It does not store submissions or send them through a server. A real production website needs a backend/API or trusted form service and the company's verified email address.

## 6. Responsive design
"The CSS uses flexible grids and media queries. On desktop the navigation is horizontal and service cards use multiple columns. At widths below 650 pixels, the navigation becomes a menu button, content grids become single-column and form fields stack vertically."

## 7. What is complete and what needs company input
Completed: six page routes, responsive layout, service content structure, reusable components, basic metadata/SEO, navigation, contact form UI and WhatsApp link structure.

Needs company approval: official logo, company introduction, verified contact details, real project case studies, technical images and final service descriptions. The sample project cards are placeholders, not claims of completed client projects. The contact email and WhatsApp number are placeholders.

## 8. Likely questions and answers

**Q: Why did you use React instead of writing every page separately in HTML?**  
A: React lets me build reusable components, manage interactive state and maintain a consistent UI across multiple pages. It reduces duplicated code and makes future updates easier.

**Q: What is React Router?**  
A: It is a routing library that maps URL paths to React page components and enables client-side navigation.

**Q: What is a component?**  
A: A component is a reusable, self-contained piece of UI. For example, the same Navbar and Footer are used across all pages.

**Q: What is the difference between props and state?**  
A: Props are inputs passed from a parent component to a child. State is data managed inside a component that can change over time and trigger a re-render.

**Q: Why use `key` in `.map()`?**  
A: A key gives React a stable identity for each list item so it can efficiently identify which items changed, were added or removed.

**Q: What does `useEffect` do here?**  
A: It runs the scroll-to-top behaviour when the route pathname changes.

**Q: Is the contact form connected to a database?**  
A: No. This version is frontend-only and opens the user's email application. Server-side submission, storage, spam protection and delivery confirmation would be added through a backend or form service.

**Q: How did you make it responsive?**  
A: I used CSS Grid, flexible widths and media queries to adapt the navigation, cards, forms and page layouts to smaller screens.

**Q: What would you improve next?**  
A: Add approved company content and imagery, connect a secure enquiry API, add form success/error handling, optimise image delivery, add analytics and validate accessibility and SEO.

## 9. 60-second demo flow
1. Start on Home and explain the hero message and service overview.
2. Open About Us and show the company introduction structure.
3. Open Services and explain the seven engineering service categories.
4. Open Projects and clarify that these are sample case-study placeholders pending approved project data.
5. Open Careers and Contact.
6. Demonstrate mobile navigation by narrowing the browser window.
7. Fill the enquiry form and explain its current mailto-based frontend behaviour.

## 10. Commands
```bash
npm install
npm run dev
npm run build
```
