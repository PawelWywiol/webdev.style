---
title: How Browsers Work
description: A comprehensive guide to understanding browser internals, including the rendering pipeline, JavaScript execution, and performance optimization.
category: Web Standards, Best Practices
---

# How Browsers Work (From a JavaScript Developer's Perspective)

## 1. Browser Main Flow

URL → Network → HTML Parser → DOM → CSS Parser → CSSOM → Render Tree → Layout → Paint → Composite → Screen

## 2. Critical Components for JS Developers

### a. HTML Parser

- Parses HTML into the **DOM tree**
- Pauses on `<script>` tags unless they have `async` or `defer`

### b. CSS Parser

- Parses CSS into the **CSSOM**
- Combined with the DOM to create the **Render Tree**

### c. JavaScript Engine

- Parses, compiles, and executes JavaScript
- Common engines:
  - Chrome: V8
  - Firefox: SpiderMonkey
- Blocks DOM construction on standard `<script>` tags (synchronous scripts)
- JavaScript engine includes:
  - **Call Stack**
  - **Heap**
  - **Web APIs** (e.g., DOM, setTimeout, fetch)
  - **Event Loop** and **Callback Queues**

## 3. Main Thread vs Background Threads

### Main Thread

Handles:

- DOM and CSSOM manipulation
- JavaScript execution
- Layout and Paint steps

### Background Threads

- Network requests
- File access
- Web Workers (run in parallel, no access to DOM)

## 4. Async JavaScript and the Event Loop

JavaScript is single-threaded but handles async operations using the **event loop**.

### Microtasks Queue

- `Promise.then`, `queueMicrotask`
- Higher priority than macrotasks

### Macrotasks Queue

- `setTimeout`, `setInterval`, DOM events

**Event Loop Behavior**:

- Executes all microtasks after each synchronous block
- Then picks one macrotask and repeats the cycle

## 5. Rendering Pipeline

JavaScript that modifies DOM or styles can trigger:

1. **Recalculate Style**
2. **Layout (Reflow)** – computes positions and sizes
3. **Paint** – draws pixels
4. **Composite** – combines layers for the screen

Unoptimized JS can cause:

- Layout thrashing
- Frame drops and visual jank

## 6. Reactivity in Modern Frameworks

Modern JS frameworks like React, Vue, and Svelte:

- Use **Virtual DOM** for diffing and batching updates
- Optimize DOM writes to reduce layout/repaint costs
- Use **hydration** during server-side rendering (SSR)

Understanding rendering helps in tuning performance of components.

## 7. Bundling and Script Execution

### Script Loading Strategies

- `async`: Loads and executes as soon as downloaded (not in order)
- `defer`: Loads in parallel, executes in order after DOM parsing

### Tooling

- **Transpilation**: Babel (e.g., ES6 → ES5)
- **Bundling**: Webpack, Vite, Rollup
- **Minification**: UglifyJS, Terser

## 8. Security Features in Browsers

- **Same-Origin Policy (SOP)**: Restricts access across domains
- **CORS**: Enables controlled cross-origin requests
- **Content Security Policy (CSP)**: Restricts allowed sources of scripts/styles/assets

## 9. DevTools and Performance Monitoring

Browser Developer Tools provide:

- DOM inspection
- Network request tracking
- JavaScript debugging
- Performance profiling (main thread, memory, paint timing)
- Lighthouse for performance and accessibility audits

## 10. JavaScript Performance Optimization Tips

- Minimize direct DOM manipulations
- Use `requestAnimationFrame` for animations
- Debounce or throttle expensive operations (e.g., scroll/resize handlers)
- Avoid layout thrashing (e.g., repeated reads and writes to DOM properties like `offsetHeight`)
- Offload CPU-heavy work to **Web Workers**
- Use lazy loading for images and code splitting
