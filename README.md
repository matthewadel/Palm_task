
# Interactive Health Insight

A cross-platform mobile app for tracking and visualizing health insights, built with React Native.

## Setup Instructions

1. **Clone the repository:**
   ```sh
   git clone https://github.com/matthewadel/Palm_task
   cd Palm_task
   ```
2. **Install dependencies:**: use your favorite package manager to install the app deps, but I personally prefer using pnpm
   ```sh
   pnpm install
   ```
3. **iOS only:** install CocoaPods dependencies:
     ```sh
     cd ios && pod install           # Only needed on first setup
     ```
4. **Start Metro bundler:**
   ```sh
   pnpm start
   ```
5. **Run the app:**
   - **Android:**
     ```sh
     npx react-native run-android
     ```
   - **iOS:**
     ```sh
     pnpm run ios
     ```


## Tech Stack Used

- **React Native** (core framework)
- **TypeScript** (type safety)
- **Tamagui** (UI kit for React Native)
- **react-query** (data fetching and caching)
- **React Navigation** (navigation management)
- **React Native Vector Icons** (icon library)
- **React Native Reanimated** (advanced animations)
- **React Native Safe Area Context** (safe area handling)
- **React Native Size Matters** (responsive sizing)
- **@persian-tools/persian-tools** (convert arabic digits to english ones)
- **ESLint & Prettier** (code linting and formatting)
- **patch-package** (patching npm dependencies)


## Implementation Approach

This project follows the **MVVM (Model-View-ViewModel)** architectural pattern for clear separation of concerns and maintainability. Here is a breakdown of the main folders and their responsibilities:

- **src/api/** (**Model**):
  - Handles all data fetching, API requests, and data-related logic. This is the source of truth for data in the app.

- **src/hooks/** (**ViewModel**):
  - Contains custom hooks that manage business logic, state, and data transformation. Hooks connect the model (API/data) to the view, providing processed data and actions.

- **src/screens**, **src/components** (**View**):
  - Defines the main screens of the app. The screen then uses hooks to get data from the server and each screen contains of multiple components to display and interact with data.

- **src/ui/** (**View**):
  - Contains foundational UI elements (such as buttons, inputs, headings, containers, and theming) built with Tamagui for consistent styling and design.

- **src/navigation/**:
  - Manages the navigation structure of the app, including stack navigators and navigation logic.

- **src/types/**:
  - Defines TypeScript types and interfaces for entities, UI, and other shared entities to ensure type safety throughout the codebase.

- **src/assets/**:
  - Stores static assets such as images and icons used in the app.

This modular structure ensures a clean separation between data, business logic, and presentation, making the codebase scalable and easy to maintain.


## Future Improvements

- **write suitable test cases :**
- **Create mono repo for both mobile and server app together using nx :**

---

Feel free to reach out for questions or suggestions!