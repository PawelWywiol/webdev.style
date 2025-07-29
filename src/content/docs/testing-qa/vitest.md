---
title: Vitest Testing Framework
description: Set up Vitest for unit testing in JavaScript and TypeScript projects, including configuration, writing tests, and running them.
category: Testing, QA
---

# Basic Vitest setup

## Install Vitest and related packages

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom @vitejs/plugin-react
```

## Create `vitest.config.ts`

```ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // simulate browser environment
    globals: true, // enable global test APIs like describe, it, expect
    setupFiles: "./vitest.setup.ts",
  },
});
```

## Create `vitest.setup.ts`

```ts
import "@testing-library/jest-dom";
```

## Write a simple test

```ts
import { render, screen } from '@testing-library/react'

function App() {
  return <h1>Hello Vitest + React Testing Library!</h1>
}

describe('App component', () => {
  it('renders a greeting message', () => {
    render(<App />)
    expect(screen.getByText('Hello Vitest + React Testing Library!')).toBeInTheDocument()
  })
})
```

## Add test script to `package.json`

```json
{
  "scripts": {
    "test": "vitest"
  }
}
```
