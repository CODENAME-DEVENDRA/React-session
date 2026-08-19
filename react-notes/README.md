# react-notes

The application for the [React Session](../README.md) learning repository — a collection of small, focused examples covering React from fundamentals to advanced hooks.

Built with **React 19** + **Vite**, plus **react-hook-form** and **Zod** for the form examples.

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

## Project Structure

```
src/
├── Phase-1-Foundations/
│   ├── Module-03-Fundamentals/      # components, JSX, props, events, state,
│   │                                #   conditional rendering, lists
│   └── Module-04-Intermediate/      # useEffect, forms, lifting state, context
├── Phase-2-Advance-concepts/
│   └── Module-01-Advance-concepts/  # useReducer, useRef
├── hooks/                           # per-hook deep dives
│   ├── 01-useState/                 #   string, number, boolean, array, object
│   ├── 02-useEffect/                #   data fetching
│   ├── 03-useContext/               #   advanced context
│   └── 04-useReducer/               #   reducer todo, context + reducer
├── App.jsx                          # toggle examples here
└── main.jsx                         # app entry point
```

## Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/) (via [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react), using [Oxc](https://oxc.rs))
- [react-hook-form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- [ESLint](https://eslint.org/)

---

> For the full curriculum breakdown, see the [root README](../README.md).
