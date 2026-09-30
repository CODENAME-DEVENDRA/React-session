# React Session

A hands-on learning repository documenting my journey through React — from core fundamentals to advanced hooks and the wider ecosystem. Each concept lives in its own small, focused example component so it can be studied and run in isolation.

Built with **React 19** and **Vite**, and covering the modern ecosystem: **react-hook-form** + **Zod** for forms, **React Router** for routing, **Zustand** and **Redux Toolkit** for state management, and **TanStack Query** for server state.

The repository has three parts: JavaScript foundation exercises in
[`Phase-1-Foundations/`](./Phase-1-Foundations), the [`react-notes/`](./react-notes)
learning app, and hands-on [projects](#projects) that apply the concepts in real builds.

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
| `npm run test -- --run` | Run the Vitest suite once        |

## How to Use

The active example is the Phase 3 Vitest lesson, exposed as
`Testing.UnitTesting` through its module barrel. To view another React example,
open [`src/App.jsx`](./react-notes/src/App.jsx), comment out
`<Testing.UnitTesting />`, and uncomment the component you want to render.

```jsx
{/* <StateHooks.StateArray /> */}
<Testing.UnitTesting />
```

The Vitest lesson tests use the same Phase 3 barrel export.

To try the React Router lessons, open
[`src/main.jsx`](./react-notes/src/main.jsx) and replace `<App />` inside
`<StrictMode>` with `<RouterBasics />` or `<RouterNavigate />`.

The JavaScript exercises are organized by topic under
[`Phase-1-Foundations/`](./Phase-1-Foundations): ES6 syntax, destructuring and
spread/rest, array methods, and promises/async-await. Each module includes
examples and practice files where applicable.

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

### Phase 3 — Production-Ready React

- **Unit Testing with Vitest** — component tests for initial state, user interaction, and reset behavior

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
  state), and **TanStack Query** (server state). Start its mock API and app in
  separate terminals after installing dependencies:

  ```bash
  cd project-1-task-tracker
  npm install
  npm run server
  ```

  ```bash
  cd project-1-task-tracker
  npm run dev
  ```

- **[`project-2-ecommerce-storefront/`](./project-2-ecommerce-storefront)** — an
  ecommerce storefront built with **React 19 + TypeScript**, **Vite**, **MUI**,
  **Redux Toolkit**, and **React Router**. Start it with:

  ```bash
  cd project-2-ecommerce-storefront
  npm install
  npm run dev
  ```

## Project Structure

```
.
├── Phase-1-Foundations/               # JavaScript setup and language exercises
├── react-notes/
│   ├── src/
│   │   ├── Phase-1-Foundations/       # React fundamentals and intermediate topics
│   │   ├── Phase-2-Advance-concepts/  # advanced React and ecosystem topics
│   │   ├── Phase-3-Production-ready-react/ # testing with Vitest
│   │   ├── hooks/                    # per-hook deep dives
│   │   ├── App.jsx                   # select the active example
│   │   └── main.jsx                  # app entry; router examples can be mounted here
│   └── package.json
├── project-1-task-tracker/            # CRUD task tracker
└── project-2-ecommerce-storefront/    # ecommerce storefront
```

## Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/) — routing
- [Zustand](https://zustand-demo.pmnd.rs/) & [Redux Toolkit](https://redux-toolkit.js.org/) — state management
- [TanStack Query](https://tanstack.com/query) — server state
- [react-hook-form](https://react-hook-form.com/) + [Zod](https://zod.dev/) — forms & validation
- [ESLint](https://eslint.org/)
