# EmployWise Assignment

A React application that integrates with the Reqres API to perform basic user management functions. The project covers login authentication, user list display, and management functionalities such as edit and delete.

## Technologies Used

- **Frontend Framework**: React
- **State Management**: Context API (for authentication state management)
- **HTTP Client**: Axios (for API requests)
- **CSS Framework**: Tailwind CSS (or custom CSS)
- **Routing**: React Router (for page navigation)

### File Descriptions:

- **`App.jsx`**: Main entry point of the application, where routes and context providers are defined.
- **`index.css`**: Global styles applied to the entire application.
- **`main.jsx`**: The main file where the React app is initialized and rendered in the DOM.
- **`components/`**: Includes reusable UI components, such as forms, buttons, inputs, and cards.
- **`context/`**: Contains context API files, managing authentication state and user data.
- **`hooks/`**: Custom hooks like `useLogin` for handling login logic and other reusable functions.
- **`lib/`**: Utility files for making HTTP requests (via Axios) and other helper functions.
- **`pages/`**: Contains the main page components, such as Login page, User List page, and Edit User page.

## Features

- **Login Authentication**: 
  - Users can log in using predefined credentials. On successful login, a token is stored in the local storage.
  - Redirects to the user list page (Level 2) after successful login.

- **User List**:
  - Displays a paginated list of users from the API, showing first name, last name, and avatar.
  - Users can navigate between pages of the user list using pagination.

- **Edit User**:
  - Users can edit their details (first name, last name, and email).
  - When "Edit" is clicked, a form is pre-filled with the user's data, and changes can be saved.

- **Delete User**:
  - Users can be deleted from the list. When a user is deleted, they are removed from the UI and the API.

- **Error Handling**:
  - Proper error messages are displayed for failed login attempts, invalid user data, or unsuccessful API calls.

- **Responsiveness**:
  - The UI is built to be responsive and works well across devices (mobile, tablet, desktop).

## API Endpoints Used

1. **Login**:
   - **Endpoint**: `POST /api/login`
   - **Request Body**:
     ```json
     {
       "email": "eve.holt@reqres.in",
       "password": "cityslicka"
     }
     ```
   - **Response**: Returns an authentication token used for subsequent API requests.

2. **Get Users**:
   - **Endpoint**: `GET /api/users?page=1`
   - **Response**: Returns a paginated list of users (first name, last name, and avatar).

3. **Update User**:
   - **Endpoint**: `PUT /api/users/{id}`
   - **Request Body**:
     ```json
     {
       "name": "Updated Name",
       "job": "Updated Job"
     }
     ```
   - **Response**: Returns the updated user data after successful modification.

4. **Delete User**:
   - **Endpoint**: `DELETE /api/users/{id}`
   - **Response**: Deletes the specified user from the list.


## Contact

- **GitHub**: [https://github.com/Sai-Kumar-Kanuri/EmployWise-Assignment](https://github.com/Sai-Kumar-Kanuri/EmployWise-Assignment)
- **Email**: saikumar.kanuri@example.com
