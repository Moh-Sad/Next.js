# Day 1: Next.js Learning Journey

## Overview
This repository documents my first day of learning Next.js. I explored the fundamental concepts of Next.js, understood why it's used, what makes it a preferred framework, and learned about rendering in Next.js. Finally, I implemented a simple "Hello World" example to get hands-on experience.

## Key Learnings

### What is Next.js?
Next.js is a React framework that enables server-side rendering (SSR), static site generation (SSG), and client-side rendering (CSR). It provides an excellent developer experience with features like fast refresh, file-based routing, and API routes.

### Why Use Next.js?
- **Performance Optimization**: Automatic code splitting, image optimization, and prefetching.
- **SEO Benefits**: Server-side rendering improves search engine visibility.
- **Hybrid Rendering**: Supports SSR, SSG, and CSR in the same application.
- **Developer Experience**: Built-in routing, API routes, and TypeScript support.
- **Scalability**: Suitable for small to large-scale applications.

### Rendering in Next.js
Next.js supports multiple rendering methods:
1. **Server-Side Rendering (SSR)**: Pages are rendered on each request.
2. **Static Site Generation (SSG)**: Pages are rendered at build time.
3. **Client-Side Rendering (CSR)**: Pages are rendered in the browser.

## Getting Started

### Installation
To create a new Next.js project, run:
```bash
npx create-next-app@latest
```

### Running the Development Server
```bash
npm run dev
```

### Hello World Example
In `pages/index.js`, I implemented a simple "Hello World" component:
```jsx
export default function Home() {
  return <h1>Hello World!</h1>;
}
```

## Next Steps
- Explore pages and layouts

## Resources
- [Next.js Official Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)