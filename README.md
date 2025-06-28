
# Interactive Health Insight

A cross-platform mobile app for tracking and visualizing health insights, built with React Native.

## Setup Instructions

1. **Clone the repository:**
   ```sh
   git clone https://github.com/matthewadel/Palm_task
   cd Palm_task
   ```
2. **Install dependencies:**
   ```sh
   pnpm install
   ```
3. **iOS only:**
   - Install CocoaPods dependencies:
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
- **Express** (for backend implementation)
- **Metro** (JavaScript bundler)

## Implementation Approach

- Modularized UI components for reusability and maintainability (see `src/components/`).
- Used custom hooks (in `src/hooks/`) to encapsulate data fetching and business logic.
- Centralized navigation using a main stack navigator for clear screen transitions.
- write re-usable and customizable UI compoenents using Tamagui


## Future Improvements

- **write suitable test cases :**
- **Create mono repo for both mobile and server app using nx :**

---

Feel free to reach out for questions or suggestions!