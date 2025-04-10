# Day 5: Next.js Learning - Components Architecture & WikiRocket Project

## Project Overview: WikiRocket

Built a Wikipedia-style search application that demonstrates:
- Client-side data fetching
- Component composition
- Error boundaries
- Loading states
- Server vs Client component patterns

## Component Types Identified

### 1. Server Components
- **SearchLayout.tsx**: Static layout wrapper
- **Metadata**: Dynamic metadata generation
- **StaticContent**: Non-interactive content

### 2. Client Components
- **SearchBar.tsx** (`'use client'`): Handles user input
- **ResultsList.tsx** (`'use client'`): Interactive results display
- **HistoryTracker.tsx**: Maintains search history in state

## Project Structure

```
wiki-rocket/
├── app/
│   ├── layout.tsx
│   ├── page.tsx            # Main page (server)
│   ├── loading.tsx         # Automatic suspense boundary
│   └── error.tsx           # Error boundary
├── components/
│   ├── client/             # Client components
│   │   ├── SearchBar.tsx
│   │   └── ResultsList.tsx
│   └── server/             # Server components
│       └── SearchLayout.tsx
└── lib/
    └── api.ts              # Fetch utilities
```

## Key Implementations

### 1. Client-Side Search (SearchBar.tsx)
```tsx
'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const handleSearch = () => {
    router.push(`/?search=${encodeURIComponent(query)}`)
  }

  return (
    <div className="search-container">
      <input 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Wikipedia..."
      />
      <button onClick={handleSearch}>Launch</button>
    </div>
  )
}
```

### 2. Loading State (app/loading.tsx)
```tsx
export default function Loading() {
  return (
    <div className="loading-rocket">
      <RocketAnimation />
      <p>Preparing your knowledge launch...</p>
    </div>
  )
}
```

### 3. Error Handling (app/error.tsx)
```tsx
'use client'

export default function ErrorBoundary({
  error,
  reset
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div className="error-container">
      <h2>Launch Failure!</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Retry Launch</button>
    </div>
  )
}
```

## Component Type Identification Guide

| Characteristic          | Server Component       | Client Component          |
|-------------------------|------------------------|---------------------------|
| Interactivity           | No                     | Yes                       |
| Hooks                   | No                     | Yes (useState, useEffect) |
| Browser APIs            | No                     | Yes                       |
| Data Fetching           | Async/Await            | Fetch/XHR                 |
| Rendering               | Server                 | Client                    |
| Bundle Size Impact      | Low                    | Higher                    |
| Example Use Cases       | Layouts, Static content| Forms, Interactive UI     |

##  Lessons Learned

1. **Performance Benefits**: Server components reduce bundle size by keeping interactive logic client-side only
2. **Error Boundaries**: Component-level error handling prevents full app crashes
3. **Loading States**: Built-in Suspense boundaries provide smooth transitions
4. **Type Safety**: TypeScript helps identify component misuse during development
5. **Architecture**: Logical separation improves maintainability

##  How to Run WikiRocket

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Visit `http://localhost:3000` and test the search functionality

##  Next Steps

- Implement search history persistence
- Add debounce to search input
- Create shareable search result links
- Add offline support with service workers