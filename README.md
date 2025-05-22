# Antenatal Care (ANC) Module

A React application for managing antenatal care records in healthcare settings. This module provides a digital interface for healthcare providers to record and track information related to pregnant patients.

## Overview

The Antenatal Care Module is designed to digitize the antenatal care process, allowing healthcare providers to record and manage patient information efficiently. The application includes sections for:

- **Present Pregnancy**: Record details about the current pregnancy including complaints, LNMP, EDD, complications, etc.
- **Patient History**: Capture comprehensive patient history including previous illnesses, family history, and menstrual/contraceptive history.
- **Examination**: Document physical and general examination findings.
- **Previous Obstetric Assessment**: Track previous pregnancy outcomes and complications.

## Installation

```bash
# Clone the repository
git clone https://github.com/calebrub/anc-module.git

# Navigate to the project directory
cd anc-module

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Usage

After starting the development server, the application will be available at `http://localhost:5173/anc-module/`. The interface consists of a responsive drawer layout with tabs for different sections of the antenatal care record.

### Building for Production

```bash
# Build the application
npm run build

# Preview the production build
npm run preview
```

You can access the deployed application at: [https://calebrub.github.io/anc-module/](https://calebrub.github.io/anc-module/)

## Project Structure

```
anc-module/
├── public/             # Static assets
├── src/                # Source code
│   ├── assets/         # Application assets
│   ├── components/     # React components
│   │   ├── ANC.jsx     # Main application component
│   │   ├── examination/        # Examination components
│   │   ├── history/            # Patient history components
│   │   ├── obstetricAssessment/# Obstetric assessment components
│   │   └── presentPregnancy/   # Present pregnancy components
│   ├── App.jsx         # Root component
│   └── main.jsx        # Application entry point
├── index.html          # HTML entry point
├── package.json        # Project dependencies and scripts
└── vite.config.js      # Vite configuration
```

## Technologies Used

- **React 19**: Frontend library for building user interfaces
- **Vite 6**: Next-generation frontend tooling
- **Material UI 7**: React component library implementing Google's Material Design
- **Formik**: Form management library
- **Yup**: Schema validation library
- **ESLint**: Code linting tool

## Development

### Available Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the application for production
- `npm run lint`: Run ESLint to check code quality
- `npm run preview`: Preview the production build locally
- `npm run deploy`: Deploy the application to GitHub Pages

## License

This project is licensed under the MIT License - see the LICENSE file for details.
