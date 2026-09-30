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
| `npm run test -- --run` | Run the Vitest suite once        |

## How to Use

Most lesson examples are exported components. [`src/App.jsx`](./src/App.jsx)
imports them and selects which one to render. The current example is the Phase 3
Vitest lesson, exposed through its `Testing.UnitTesting` barrel export. To view
another example, comment out `<Testing.UnitTesting />` and uncomment the component
you want, for example:

```jsx
{/* <StateHooks.StateArray /> */}
<Testing.UnitTesting />
```

The Vitest lesson tests import `UnitTesting` through the same Phase 3 barrel.

To try the React Router lessons, change the rendered component in
[`src/main.jsx`](./src/main.jsx) from `<App />` to `<RouterBasics />` or
`<RouterNavigate />`.

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
├── Phase-3-Production-ready-react/
│   └── 01-unit-testing-vitest/      # Vitest component and test examples
├── hooks/                           # per-hook deep dives
│   ├── 01-useState/                 #   string, number, boolean, array, object
│   ├── 02-useEffect/                #   data fetching
│   ├── 03-useContext/               #   advanced context
│   └── 04-useReducer/               #   reducer todo, context + reducer
├── App.jsx                          # toggle most examples here
└── main.jsx                         # app entry; router examples can be mounted here
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
