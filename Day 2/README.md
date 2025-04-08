# Day 2: Next.js Learning Journey

## Overview
On my second day with Next.js, I explored several core concepts including routing, styling, metadata handling, and error boundaries. Here's what I learned:

## Key Concepts

### 1. Pages and Routing
- Next.js uses file-system based routing
- Files inside `app` directory automatically become routes
- Example structure:
  ```
  app/
    about/page.js → /about
    blog/[slug]/page.js → /blog/1, /blog/2, etc.
  ```

### 2. Layouts
- Shared UI between multiple pages
- Persist state across navigation
- Can be nested
- Example layout structure:
  ```jsx
  export default function RootLayout({ children }) {
    return (
      <html>
        <body>
          <nav>Main Navigation</nav>
          {children}
        </body>
      </html>
    )
  }
  ```

### 3. Navigation with `next/link`
- Client-side navigation for better performance
- Prefetching by default
- Basic usage:
  ```jsx
  import Link from 'next/link'
  
  <Link href="/about">About</Link>
  ```

## Styling Approaches

### 1. CSS Modules (`*.module.css`)
- Scoped styles by default
- Usage example:
  ```css
  /* styles.module.css */
  .container {
    padding: 1rem;
  }
  ```
  ```jsx
  import styles from './styles.module.css'
  
  <div className={styles.container}>Content</div>
  ```

### 2. Global CSS
- Applied to all components
- Must be imported in `app/layout.js`
- Example:
  ```css
  /* globals.css */
  body {
    margin: 0;
  }
  ```

## Metadata and Head

### 1. Static Metadata
```jsx
export const metadata = {
  title: 'My Page',
  description: 'Page description',
}
```

### 2. Dynamic Metadata
```jsx
export async function generateMetadata({ params }) {
  return {
    title: `Product ${params.id}`,
  }
}
```

## Loading and Error Handling

### 1. Loading States
- Automatic Suspense boundaries
- Create `loading.js` file:
  ```jsx
  export default function Loading() {
    return <p>Loading...</p>
  }
  ```

### 2. Error Handling
- Error boundaries with `error.js`
- Example:
  ```jsx
  'use client'
  
  export default function Error({ error, reset }) {
    return (
      <div>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </div>
    )
  }
  ```

## Key Differences Learned

| Concept | Local (CSS Modules) | Global |
|---------|---------------------|--------|
| Scope | Component-level | Application-wide |
| Naming | No need for unique class names | Requires careful naming |
| Usage | Import in component | Import in root layout |

## Next Steps
- Learn about data fetching
- Explore Dynamic Routes
- Metadata

## Resources
- [Next.js Routing Docs](https://nextjs.org/docs/app/building-your-application/routing)
- [CSS Modules Docs](https://nextjs.org/docs/basic-features/built-in-css-support)