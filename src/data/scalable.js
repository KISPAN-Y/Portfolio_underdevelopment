export const reactTips = [
    {
        id: 1,
        title: "Group by Feature:",
        description: "Organize files by feature (e.g., users/, products/), not by type, to keep related code together.",
    },
    {
        id: 2,
        title: "Create a Public API:",
        description: "Use index.js in feature folders to control what other parts of the app can import, reducing coupling.",
    },
    {
        id: 3,
        title: "Lift State Wisely:",
        description: "Keep state as local as possible. Only use global state (Context/Redux/Zustand) for app-wide data like user auth.",
    },
    {
        id: 4,
        title: "Centralize API Logic:",
        description: "Use TanStack Query or RTK Query to handle all data fetching, caching, and state in a dedicated layer.",
    },
    {
        id: 5,
        title: "Build a UI Library:",
        description: "Create a collection of reusable, dumb components (Button, Modal) in a shared/ui folder for consistency.",
    },
    {
        id: 6,
        title: "Use Absolute Imports:",
        description: "Configure your project to allow clean imports from the src directory instead of long relative paths (../../..).",
    },
    {
        id: 7,
        title: "Enforce Code Style:",
        description: "Use ESLint and Prettier automatically to maintain consistent code formatting and catch errors.",
    },
    {
        id: 8,
        title: "Code Split by Route:",
        description: "Lazily load page components using React.lazy() and Suspense to reduce your initial bundle size.",
    },
    {
        id: 9,
        title: "Use TypeScript:",
        description: "Add type safety to catch errors early, simplify refactoring, and improve developer experience.",
    },
    {
        id: 10,
        title: "Test User Flows:",
        description: "Focus integration tests on critical user journeys with React Testing Library, not on achieving 100% coverage.",
    }
]
