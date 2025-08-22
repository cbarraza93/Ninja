# PL-300 Power BI Data Analyst Learning App

A comprehensive mobile and web application designed to help users prepare for the Microsoft PL-300 Data Analyst with Power BI certification exam.

## Overview

The PL-300 Learning App provides a structured learning path that covers all aspects of the Microsoft PL-300 certification exam, from data preparation and modeling to visualization, analysis, and Power BI management. The application is optimized for both mobile devices and web browsers, ensuring a seamless learning experience across various platforms.

## Features

### Learning Modules

- **Data Preparation (25-30% of exam)**: Interactive lessons on connecting to data sources, cleaning and transforming data
- **Data Modeling (25-30% of exam)**: Comprehensive tutorials on designing data models and creating DAX calculations
- **Data Visualization (25-30% of exam)**: Visual selection guides and formatting tutorials for effective data presentation
- **Power BI Management (15-20% of exam)**: Step-by-step guides for creating and managing workspaces and security

### Practice Exam System

- **Exam Simulation**: Timed exams that mirror the actual exam format
- **Detailed Explanations**: Comprehensive explanations for both correct and incorrect answers
- **Performance Analytics**: Detailed score reports with breakdown by exam domain
- **Custom Practice Sessions**: Topic-specific practice focusing on particular exam domains

### Interactive Learning Tools

- **Hands-on Labs**: Virtual Power BI environment for practicing without installing software
- **Video Tutorials**: Short, focused video lessons on specific topics
- **Interactive Flashcards**: DAX function flashcards with syntax and examples
- **Community Forum**: Question and answer section moderated by experts

### Progress Tracking

- **Learning Path Progression**: Visual progress dashboard showing completion status
- **Gamification Elements**: Achievement badges and experience points for learning activities
- **Personalized Study Plan**: AI-powered study recommendations based on performance

### Mobile Optimization

- **Responsive Design**: Fluid layout that adapts to any screen size
- **Offline Functionality**: Study without connectivity
- **Touch-Optimized Interface**: Designed for mobile interaction

## Technical Details

### Platform Support

- **Mobile**: iOS 14.0+ and Android 8.0+
- **Web**: Chrome, Firefox, Safari, Edge (latest versions)

### Technology Stack

- **Frontend**: React Native (mobile) and React.js (web)
- **State Management**: Redux with Redux Thunk
- **UI Components**: React Native Paper
- **Navigation**: React Navigation

## Getting Started

### Prerequisites

- Node.js 14.0 or later
- npm or yarn
- Expo CLI

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/cbarraza93/Ninja.git
   cd Ninja
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Follow the instructions in the terminal to open the app on your device or emulator.

## Project Structure

```
/
├── assets/               # App assets (images, fonts)
├── src/
│   ├── components/       # Reusable UI components
│   ├── navigation/       # Navigation configuration
│   ├── screens/          # App screens
│   ├── store/            # Redux store and reducers
│   │   └── reducers/     # Redux reducers
│   └── theme.ts          # App theme and styling
├── App.tsx               # Main app component
├── app.json              # Expo configuration
└── package.json          # Project dependencies
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Microsoft for providing the PL-300 certification exam and documentation
- The React Native and Expo communities for their excellent tools and resources

## Contact

For any questions or feedback, please contact NinjaTech AI at contact@ninjatech.ai.