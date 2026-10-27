# Eventhub Frontend

<p align="center">
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-149eca?style=for-the-badge&logo=react&logoColor=white" alt="React" /></a>
  <a href="https://vite.dev/"><img src="https://img.shields.io/badge/Vite-646cff?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-06b6d4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" /></a>
  <a href="https://reactrouter.com/"><img src="https://img.shields.io/badge/React_Router-ca4245?style=for-the-badge&logo=reactrouter&logoColor=white" alt="React Router" /></a>
  <a href="https://redux-toolkit.js.org/"><img src="https://img.shields.io/badge/Redux_Toolkit-764abc?style=for-the-badge&logo=redux&logoColor=white" alt="Redux Toolkit" /></a>
  <a href="https://react-hook-form.com/"><img src="https://img.shields.io/badge/React_Hook_Form-ec5990?style=for-the-badge&logo=reacthookform&logoColor=white" alt="React Hook Form" /></a>
  <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" /></a>
</p>

Eventhub is a comprehensive Event Management Web Application built to connect event organizers, communities, and attendees. The platform supports multiple user roles including Admin, Organizer, and General Users, enabling seamless event creation, community management, ticket booking, and role-based administration.

The backend lives in a separate repository: [eventhub_backend](https://github.com/alfannurfaiz9/eventhub_backend).

## Tech Stack

| Technology | Version | Purpose |
| --- | --- | --- |
| [React](https://react.dev/) | 19.2.8 | Component-based library for building the user interface |
| [Vite](https://vite.dev/) | 8.3.0 | Build tool and development server |
| [Tailwind CSS](https://tailwindcss.com/) | 4.3.3 | Utility-first CSS framework for a responsive and consistent UI |
| [React Router](https://reactrouter.com/) | 8.4.0 | Page navigation and dynamic routing |
| [Redux Toolkit](https://redux-toolkit.js.org/) | 2.13.0 | Application state management |
| [React Redux](https://react-redux.js.org/) | 9.3.0 | Connects React components with the Redux store |
| [Redux Persist](https://github.com/rt2zz/redux-persist) | 6.0.0 | Persists selected Redux state across browser sessions |
| [React Hook Form](https://react-hook-form.com/) | 7.90.0 | Form state and validation |
| [React Icons](https://react-icons.github.io/react-icons/) | 5.7.0 | Icons for the interface and interactive elements |
| [React Toastify](https://fkhadra.github.io/react-toastify/) | 11.1.0 | Notifications and feedback messages |
| [Node.js](https://nodejs.org/) | 24 | JavaScript runtime for the development tools and build process |

## Features

**Authentication & Authorization**
- User registration and login.
- Role-based access control (Admin, Event Organizer, User).
- JWT Authentication integration with persistent sessions.

**Admin Dashboard**
- Manage users, organizers, communities, and overall system events.
- Approve/reject event requests and monitor platform activity.

**Organizer Dashboard**
- Create, update, and delete events.
- Track attendee registrations, ticketing, and event analytics.

**Community Management**
- Create and manage community profiles.
- Explore and join communities based on interests.

**Event Discovery & Booking**
- Browse and search events by category, location, and date.
- View detailed event information and register/book tickets.

## Architecture

The frontend is a single-page application, and each concern is handled by a dedicated library:

```
User -> React Router -> Page -> Components -> Redux Store -> Backend REST API
```

- **Routing** is handled by React Router, which manages page navigation, protected routes, and dynamic URL parameters.
- **State** lives in a Redux Toolkit store, and Redux Persist keeps the authentication and user session active between browser refresh/restarts.
- **Forms** are managed by React Hook Form, including validation for event creation and user profile management.
- **UI** is built with Tailwind CSS, React Icons, and React Toastify for user interaction feedback.
- **API access** goes through the backend REST API. The base URL is configured with `VITE_API_URL`.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v24 recommended) and npm
- [Git](https://git-scm.com/)
- The [backend](https://github.com/alfannurfaiz9/eventhub_backend.git) up and running

### 1. Make sure to run the backend first

[![backend](https://img.shields.io/badge/BACKEND-GO-00ADD8?logo=go&logoColor=WHITE)](https://github.com/alfannurfaiz9/eventhub_backend.git)

### 2. Clone the repository

```bash
git clone https://github.com/alfannurfaiz9/eventhub_frontend.git
cd eventhub_frontend
```

### 3. Install dependencies

```bash
npm ci
```

### 4. Configure the environment

Create a `.env` file in the project root and point it to your backend API:

```env
VITE_API_URL=http://{HOST_SERVER}:{PORT_SERVER}
```

Replace `{HOST_SERVER}` and `{PORT_SERVER}` with the values from your backend configuration.

### 5. Environment Variables

| Variable | Description |
| --- | --- |
| `VITE_API_URL` | Base URL of the backend API |

### 6. Run the application

```bash
npm run dev
```

Open the local URL displayed in the terminal to access the application.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build in the `dist/` directory |

## API Reference

Protected routes require the header `Authorization: Bearer <token>`.

## License

This project is licensed under the [MIT License](https://opensource.org/license/mit).

## Related Project

[![backend](https://img.shields.io/badge/BACKEND-GO-00ADD8?logo=go&logoColor=WHITE)](https://github.com/alfannurfaiz9/eventhub_backend.git)1