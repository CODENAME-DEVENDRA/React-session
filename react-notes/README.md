# react-notes

The application for the [React Session](../README.md) learning repository — a collection of small, focused examples covering React from fundamentals to advanced hooks and the wider ecosystem.

Built with **React 19** + **Vite**, plus **react-hook-form** and **Zod** for forms, **React Router** for routing, **Zustand** and **Redux Toolkit** for state management, and **TanStack Query** for server state.

## Getting Started

```bash
npm install
npm run dev
```

Then open the local URL printed by Vite (usually http://localhost:5173).

### Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the Vite dev server with HMR   |
| `npm run build`   | Build for production                 |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                           |

## How to Use

Every topic is a standalone component, all wired up in [`src/App.jsx`](./src/App.jsx)
and commented out by default. To view an example, uncomment the one you want to render:

```jsx
{/* <StateHooks.StateArray /> */}   // commented out
<Ref.DomRef />                       // active
```

The React Router examples render the whole app, so they live in
[`src/main.jsx`](./src/main.jsx) instead. Comment out `<App />` and uncomment the
router example you want to view.

## Project Structure

```
src/
├── Phase-1-Foundations/
│   ├── Module-03-Fundamentals/      # components, JSX, props, events, state,
│   │                                #   conditional rendering, lists
│   └── Module-04-Intermediate/      # useEffect, forms, lifting state, context
├── Phase-2-Advance-concepts/
│   ├── Module-01-Advance-concepts/  # useReducer, useRef, useMemo/useCallback/memo,
│   │                                #   custom hooks
│   └── Module-02-Ecosystem-and-Architecture/
│       ├── 01-react-router/         #   router basics + navigation
│       ├── 02-state-management/     #   zustand + redux toolkit
│       └── 03-react-query/          #   TanStack Query
├── hooks/                           # per-hook deep dives
│   ├── 01-useState/                 #   string, number, boolean, array, object
│   ├── 02-useEffect/                #   data fetching
│   ├── 03-useContext/               #   advanced context
│   └── 04-useReducer/               #   reducer todo, context + reducer
├── App.jsx                          # toggle most examples here
└── main.jsx                         # app entry (router examples wired up here)
```

## Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/) (via [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react), using [Oxc](https://oxc.rs))
- [React Router](https://reactrouter.com/) — routing
- [Zustand](https://zustand-demo.pmnd.rs/) & [Redux Toolkit](https://redux-toolkit.js.org/) — state management
- [TanStack Query](https://tanstack.com/query) — server state
- [react-hook-form](https://react-hook-form.com/) + [Zod](https://zod.dev/) — forms & validation
- [ESLint](https://eslint.org/)

---

> For the full curriculum breakdown, see the [root README](../README.md).
