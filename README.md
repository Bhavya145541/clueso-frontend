1. Project Setup

Created a React application using create-react-app.

Opened the project in VS Code.

Installed required dependencies like axios for API calls.

Verified the app runs successfully on http://localhost:3000.

2. Folder Structure Planning

Organized the project inside the src folder:

components/ → UI components (Dashboard)

services/ → API and authentication logic

Removed unused default files like test files and logos to keep the project clean.

3. Authentication Service Creation

Created src/services/authService.js.

Added a login function that sends email and password to the backend.

Stored the JWT token returned from the backend in localStorage.

4. Login Flow Implementation

Updated App.js to:

Call the login API

Save token on successful login

Maintain login state using React useState

Conditionally rendered the Dashboard after login.

5. Dashboard Component Development

Created Dashboard.js inside components/.

Used useEffect to fetch logged-in user details.

Read token from localStorage.

Sent token in the Authorization header as Bearer <token>.

Displayed:

Welcome message

User email

Logout button

6. Protected API Integration

Connected Dashboard to backend protected route /api/auth/me.

Used Axios with headers to fetch authenticated user data.

Handled loading state while fetching user details.

7. Error Fixing & Debugging

Fixed file name case-sensitivity issues (authService.js).

Corrected incorrect import paths.

Resolved Failed to fetch errors by verifying backend URL and token.

Ensured backend was running before frontend API calls.

8. Logout Functionality

Implemented logout by:

Removing token from localStorage

Resetting login state

Redirecting back to login screen

9. Final UI Verification

Verified:

Login works correctly

Dashboard loads user data

Protected routes are accessible only with token

Logout clears session

Confirmed smooth frontend-backend integration.

10. Git Version Control

Initialized Git repository.

Added project files using git add ..

Committed changes with meaningful message.

Configured GitHub remote repository.

Pushed code to GitHub successfully.

11. Documentation

Added a clean and clear README.md explaining:

Project purpose

Features

Tech stack

Setup instructions

Prepared the project for submission and review.

Final Outcome

A working Clueso.io Frontend Clone with:

JWT-based authentication

Protected dashboard

Clean React structure

Proper Git version control

Ready for internship/assignment submission
