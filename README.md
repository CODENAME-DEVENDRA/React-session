# React Session

A hands-on learning repository documenting my journey through React — from core fundamentals to advanced hooks. Each concept lives in its own small, focused example component so it can be studied and run in isolation.

Built with **React 19**, **Vite**, **react-hook-form**, and **Zod**.

## Getting Started

The app lives in the [`react-notes/`](./react-notes) directory.

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

### Hooks (deep dives)

Focused, incremental examples for each core hook:
- `01-useState` — string, number, boolean, array, and object state
- `02-useEffect` — data fetching
- `03-useContext` — advanced context usage
- `04-useReducer` — reducer-driven todo, context + reducer pattern

## Project Structure

```
react-notes/
├── src/
│   ├── Phase-1-Foundations/
│   │   ├── Module-03-Fundamentals/      # components, JSX, props, events, state,
│   │   │                                #   conditional rendering, lists
│   │   └── Module-04-Intermediate/      # useEffect, forms, lifting state, context
│   ├── Phase-2-Advance-concepts/
│   │   └── Module-01-Advance-concepts/  # useReducer, useRef
│   ├── hooks/            # per-hook deep dives
│   ├── App.jsx           # toggle examples here
│   └── main.jsx
└── package.json
```

## Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [react-hook-form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- [ESLint](https://eslint.org/)
