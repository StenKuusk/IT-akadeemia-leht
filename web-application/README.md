# Project Title: IT Academy Web Application

## Overview
This web application is designed for the IT Academy, featuring a login system, event calendar, class schedules, and additional functionalities to enhance user experience and management capabilities.

## Features
- **Login System**: Secure authentication for administrators with form validation.
- **Event Calendar**: Manage events with functionalities to add, delete, and update events, as well as filter by target group.
- **Class Schedules**: Display schedules for different groups, teachers, and rooms, including booking consultation times.
- **Dashboard**: Main interface for administrators to access various management features.
- **Additional Features**: Information about fields of study, internships, competitions, and contact details.

## Project Structure
```
web-application
├── src
│   ├── components
│   │   ├── Calendar.tsx
│   │   ├── ClassSchedule.tsx
│   │   ├── Login.tsx
│   │   └── OtherFeatures.tsx
│   ├── pages
│   │   ├── Home.tsx
│   │   ├── LoginPage.tsx
│   │   └── Dashboard.tsx
│   ├── services
│   │   ├── authService.ts
│   │   └── eventService.ts
│   ├── styles
│   │   └── main.css
│   ├── utils
│   │   └── helpers.ts
│   └── index.tsx
├── public
│   ├── index.html
│   └── favicon.ico
├── package.json
├── tsconfig.json
└── README.md
```

## Setup Instructions
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies using npm:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```
5. Open your browser and go to `http://localhost:3000` to view the application.

## Technologies Used
- React for building the user interface.
- TypeScript for type safety and improved development experience.
- CSS for styling the application.
- Node.js and npm for package management.

## Contribution
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for details.