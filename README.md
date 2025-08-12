# FF8 Speedrunning Tools
The code for https://tools.ff8.wiki, built in React.

This is a suite of browser-based tools to assist with speedrunning the game, Final Fantasy VIII.

## Structure
```
/
├── .github/                      // Github workflows
├── public/
├── src/
│   ├── components/               // For shared, reusable components (e.g., Navbar, Footer)
│   ├── features/
│   │   ├── final-party-manip/    // Code for Final Party Manip
│   │   ├── fish-fins/            // Code for Fish Fin Manip
│   │   ├── fish-fins-kai/        // Code for Kaivel's Fish Fin Manip
│   │   ├── encounter-calculator/ // Code for Encounter Calculator
│   │   ├── cards/                // Code for the Card RNG Manip
│   │   └── caraway-code/         // Code for Caraway Code
│   ├── pages/                    // Top-level pages that wrap feature components
│   │   ├── FinalPartyManipPage.jsx
│   │   ├── FishFinsPage.jsx
│   │   ├── FishFinsKaiPage.jsx
│   │   ├── EncounterCalculatorPage.jsx
│   │   ├── CardsPage.jsx
│   │   └── CarawayCodePage.jsx
│   ├── App.jsx                   // Main application component with routing
│   └── index.css
└── package.json
```

### Key Structural Concepts
- `src/features`: Each subfolder here represents one of the tools, containing all the components and logic specific to that tool. This encapsulation prevents code from becoming a tangled mess as the suite expands.
- `src/pages`: This directory contains the top-level components for each route. A page component is simple; its main job is to render a single feature component.
- `src/components`: This is for components that are used across multiple features, such as a consistent navigation bar, a modal dialog, or a universal button style.
- `App.jsx`: This file serves as the central nervous system of the application. 

This structure allows each tool to be worked on independently, and when a new tool is ready, we simply add its feature folder, create a new page component to wrap it, and add a new route in App.jsx.