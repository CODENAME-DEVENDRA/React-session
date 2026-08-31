# React Session

A hands-on learning repository documenting my journey through React — from core fundamentals to advanced hooks and the wider ecosystem. Each concept lives in its own small, focused example component so it can be studied and run in isolation.

Built with **React 19** and **Vite**, and covering the modern ecosystem: **react-hook-form** + **Zod** for forms, **React Router** for routing, **Zustand** and **Redux Toolkit** for state management, and **TanStack Query** for server state.

The repository is organized into two parts: the [`react-notes/`](./react-notes)
learning app (documented below) and hands-on [projects](#projects) that apply the
concepts in a real build.

## Getting Started

The notes app lives in the [`react-notes/`](./react-notes) directory.

```bash
cd react-notes
npm install
npm run dev
```

Then open the local URL printed by Vite (usually http://localhost:5173).

### Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the Vite dev server            |
| `npm run build`   | Build for production                 |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                           |

## How to Use

Each topic is a standalone component. To view an example, open
[`src/App.jsx`](./react-notes/src/App.jsx) and uncomment the component you want
to render — every example is wired up there and commented out by default.

```jsx
{/* <StateHooks.StateArray /> */}   // commented out
<Ref.DomRef />                       // active
```

The React Router examples are the exception: they render the whole app, so they
are wired up in [`src/main.jsx`](./react-notes/src/main.jsx) instead. Comment out
`<App />` and uncomment the router example you want to view.

## Curriculum

Examples are grouped by learning phase, with dedicated hook deep-dives under `src/hooks/`.

### Phase 1 — Foundations

**Module 03 · Fundamentals**
- **Components** — declaring components, exports, composition
- **JSX & Elements** — JSX basics, fragments, styling
- **Props** — passing/receiving props, the `children` prop, prop drilling
- **Events** — `onClick`, the event object, `onChange` inputs, passing handlers
- **State** — `useState` basics
- **Conditional Rendering** — ternary, logical `&&`, early return, multiple conditions
- **Rendering Lists** — keys

**Module 04 · Intermediate**
- **useEffect** — effect basics
- **Forms** — controlled vs. uncontrolled, form handling, validation, `react-hook-form` + Zod
- **Lifting State Up**
- **Context API** — understanding context

### Phase 2 — Advanced Concepts

**Module 01 · Advanced Concepts**
- **useReducer** — counter reducer example
- **useRef** — DOM refs, persisting values across renders
- **useMemo / useCallback / memo** — memoizing values, callbacks, and components
- **Custom Hooks** — `useFetch`, `useLocalStorage`, `useDebounce`

**Module 02 · Ecosystem & Architecture**
- **React Router** — router basics (nested routes, layouts, dynamic params) and navigation (`useNavigate`, active links, protected routes, 404s)
- **State Management** — global state with [Zustand](https://zustand-demo.pmnd.rs/) and [Redux Toolkit](https://redux-toolkit.js.org/) (counter example built in both)
- **React Query** — server-state fetching, caching, and loading/error states with [TanStack Query](https://tanstack.com/query)

### Hooks (deep dives)

Focused, incremental examples for each core hook:
- `01-useState` — string, number, boolean, array, and object state
- `02-useEffect` — data fetching
- `03-useContext` — advanced context usage
- `04-useReducer` — reducer-driven todo, context + reducer pattern

## Projects

Beyond the bite-sized examples, the repo includes standalone projects that put the
concepts together in a real build.

- **[`project-1-task-tracker/`](./project-1-task-tracker)** — a task tracker built
  with **React 19 + TypeScript**, **Vite**, **Tailwind CSS**, **Zustand** (client
  state), and **TanStack Query** (server state). Run it the same way:

  ```bash
  cd project-1-task-tracker
  npm install
  npm run dev
  ```

## Project Structure

```
react-notes/
├── src/
│   ├── Phase-1-Foundations/
│   │   ├── Module-03-Fundamentals/      # components, JSX, props, events, state,
│   │   │                                #   conditional rendering, lists
│   │   └── Module-04-Intermediate/      # useEffect, forms, lifting state, context
│   ├── Phase-2-Advance-concepts/
│   │   ├── Module-01-Advance-concepts/  # useReducer, useRef, useMemo/useCallback/memo,
│   │   │                                #   custom hooks
│   │   └── Module-02-Ecosystem-and-Architecture/
│   │                                    # react-router, state management
│   │                                    #   (zustand + redux toolkit), react query
│   ├── hooks/            # per-hook deep dives
│   ├── App.jsx           # toggle most examples here
│   └── main.jsx          # app entry (router examples wired up here)
└── package.json
```

## Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/) — routing
- [Zustand](https://zustand-demo.pmnd.rs/) & [Redux Toolkit](https://redux-toolkit.js.org/) — state management
- [TanStack Query](https://tanstack.com/query) — server state
- [react-hook-form](https://react-hook-form.com/) + [Zod](https://zod.dev/) — forms & validation
- [ESLint](https://eslint.org/)
