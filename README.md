# Task Management Front End

## Overview

The Task Management Front End is a responsive web application, part of a portfolio to demonstrate my capabilities in full-stack development, focusing on React and Redux. This application is designed to help users efficiently manage their daily tasks, showcasing a modern approach to web development with an emphasis on user experience, efficient state management, and dynamic client-side routing.

## Key Features

- **Responsive Design**: Ensures compatibility with a wide range of devices, adapting to different screen sizes for optimal user experience.
- **User Authentication**: (Planned/Implemented) Secure user login to protect and individualize task lists.
- **Task Management**: Create, edit, and delete tasks, offering users complete control and organization of their to-do list.
- **Task Prioritization**: Users can organize tasks by priority, aiding in personal productivity and time management.
- **Search Functionality**: A search feature to quickly locate specific tasks.
- **Dynamic Navigation**: Implemented with React Router for seamless navigation and a single-page application feel.
- **Efficient API Communication**: Utilizes Axios for streamlined HTTP requests, handling communication with the backend server.
- **Modular Styling**: Employing styled-components for scoped and maintainable CSS in JS.

## Technical Stack

- **Frontend**: Developed with React for its component-based architecture, allowing for reusable UI components.
- **State Management**: Redux used for managing global state across the application, ensuring consistent and predictable behavior.
- **Routing**: React Router for enabling dynamic client-side routing, enhancing the single-page application experience.
- **API Integration**: Axios for efficient API calls, chosen for its promise-based structure and ease of handling request/response.
- **Styling**: Styled-components for its ability to couple styling with components, promoting a modular and scalable structure.
- **Version Control**: Git for tracking changes and GitHub for repository hosting, demonstrating best practices in code versioning and collaboration.

## Getting Started

To get a local copy up and running, follow these simple steps:

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://npmjs.com/)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/JustinProgrammer87/Task-Management-Front-End.git

   ```

2. Navigate to the project's root directory:

   ```sh
   cd Task-Management-Front-End

    ```
3. Install NPM packages:

   ```sh
   npm install

    ```

4. Start the development server:

   ```sh
   npm start
   
    ```
The application will open in your default browser at http://localhost:3000.

Development Process and Challenges

    State Management: Opted for Redux to handle complex state logic that extends beyond local component states, ensuring a centralized and more manageable state across the application.
    API Communication: Chose Axios over native fetch for its wider browser compatibility and automatic JSON data transformation.
    Responsive Design: Emphasized responsive layouts to cater to users on various devices, enhancing accessibility and user engagement.
    Component Styling: Styled-components were selected for their ability to encapsulate styles at a component level, reducing the risk of style conflicts and promoting a more organized codebase.

Built With

    React - A JavaScript library for building user interfaces.
    Redux - A predictable state container for JavaScript apps.
    Styled-components - Visual primitives for the component age.

Contributing

We welcome contributions to the Task Management Front End project. If you're interested in contributing, please follow these steps:

1. Fork the project. 
2. Create your feature branch (git checkout -b feature/AmazingFeature). 
3. Commit your changes (git commit -m 'Add some AmazingFeature'). 
4. Push to the branch (git push origin feature/AmazingFeature). 5. Open a pull request.

License

Distributed under the MIT License. See LICENSE for more information.

For any questions or feedback, please reach out to JustinJohnsonprogrammer@outlook.com
