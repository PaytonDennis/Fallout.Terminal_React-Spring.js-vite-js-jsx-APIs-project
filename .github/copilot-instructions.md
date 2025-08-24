# Copilot Instructions for React + Spring Boot Project

## Project Overview
- **Frontend:** React (Vite, TypeScript) in `frontend/`
- **Backend:** Spring Boot (Java) in `backend/`
- **API:** REST endpoint at `/api/message` returns a message from backend Java logic

## Key Conventions

### Frontend (React/Vite)
- Main entry: `frontend/src/App.tsx`
- API calls: Use `fetch('http://localhost:8080/api/message')` to get backend data
- Assets: Place images/videos in `frontend/src/assets/`
- Styling: Use inline styles or `App.css`/`index.css`
- Start dev server: `npm run dev` in `frontend/`
- TypeScript config: `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`
- ESLint: Configured via `eslint.config.js` (see `README.md` for expansion)

### Backend (Spring Boot)
- Main class: `BackendApplication.java`
- API controller: `ApiController.java` (handles `/api/message`)
- OOP logic: `oopPractice.java` (static methods for message logic)
- Start backend: `./mvnw spring-boot:run` in `backend/`
- CORS: Configured to allow frontend requests
- Properties: `application.properties` for Spring config

## Data Flow
- Frontend fetches message from backend `/api/message` endpoint
- Backend returns concatenated string from `oopPractice.getMainMessage()` and `oopPractice.displayMessage()`

## Build & Run
- **Frontend:**
  - Install deps: `npm install`
  - Start: `npm run dev`
- **Backend:**
  - Build: `./mvnw clean package`
  - Run: `./mvnw spring-boot:run`

## Testing
- **Backend:** Java tests in `backend/src/test/java/`
- **Frontend:** Add tests as needed (not present by default)

## Troubleshooting
- Ensure backend runs on port 8080 for frontend API calls
- If CORS errors, check backend CORS config
- Java class and file names must match
- For asset issues, check import paths and Vite asset handling

## Custom UI/UX
- Navbar and background images are implemented in `App.tsx`
- Animated overlays (GIFs, videos) handled in `Message.tsx`

## Agent Guidance
- Follow file/folder naming conventions
- Use TypeScript for new frontend code
- Use static methods for backend message logic
- Keep API endpoints RESTful and under `/api/`
- Update this file if project conventions change
