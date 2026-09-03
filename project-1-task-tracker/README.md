# Task Tracker

A small CRUD task tracker built with React + TypeScript + Vite. Tasks are served by a mock REST API (json-server) and fetched/mutated with TanStack Query.

## Tech stack

- **React 19** + **TypeScript** + **Vite**
- **TanStack Query** (`@tanstack/react-query`) — server state, caching, and refetching
- **json-server** — mock REST API backed by `db.json`
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **shadcn/ui** (Radix primitives) — `card`, `input`, `button`, `checkbox`
- **zustand** — client state (available for future use)

## Prerequisites

- Node.js 18+ and npm

## Getting started

Install dependencies:

```bash
npm install
```

This project needs **two processes running at the same time** — the mock API and the Vite dev server. Use two terminals:

```bash
# Terminal 1 — mock API on http://localhost:4000
npm run server

# Terminal 2 — app on http://localhost:5173
npm run dev
```

Then open http://localhost:5173.

## Environment variables

The API base URL is read from a Vite env var. Copy the example file and adjust if needed:

```bash
cp .env.example .env
```

```
VITE_BASE_API_URL=http://localhost:4000
```

> Only variables prefixed with `VITE_` are exposed to the client. If unset, the app falls back to `http://localhost:4000`.

## Available scripts

| Script            | Description                                          |
| ----------------- | ---------------------------------------------------- |
| `npm run dev`     | Start the Vite dev server                            |
| `npm run server`  | Start json-server (mock API) on port 4000            |
| `npm run build`   | Type-check and build for production                  |
| `npm run preview` | Preview the production build                         |
| `npm run lint`    | Run ESLint                                           |

## Mock API

`db.json` holds the data. json-server exposes a REST endpoint for each top-level key:

- `GET    /tasks` — list tasks
- `POST   /tasks` — create a task (`{ text, completed }`)

A task has the shape:

```ts
type Task = {
  id: string;
  text: string;
  completed: boolean;
};
```

## Project structure

```
src/
  api/taskApi.ts            # fetch wrapper + fetchTasks / createTask
  hooks/useTasks.ts         # useTasks (query) + useCreateTask (mutation)
  features/tasks/
    AddTaskForm.tsx         # form to add a task
  components/ui/            # shadcn/ui components (button, card, input, checkbox)
  lib/utils.ts             # cn() class-name helper
  types.ts                  # Task type
  App.tsx                   # page layout
  main.tsx                  # QueryClientProvider + app root
```

## Notes

- Vite is configured to **ignore `db.json`** in its file watcher (`server.watch.ignored` in `vite.config.ts`). Without this, every write by json-server on create/update/delete would trigger a full page reload in dev.
