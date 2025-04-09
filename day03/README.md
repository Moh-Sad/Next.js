# Day 3: Next.js Learning - Data Fetching & TypeScript

##  Overview

Today I explored advanced data handling in Next.js with TypeScript integration, focusing on different fetching strategies and type safety.

##  Key Concepts Learned

### 1. Data Fetching Methods
- **Static Data Fetching**: `fetch` with `{ cache: 'force-cache' }`
- **Dynamic Data Fetching**: `fetch` with `{ cache: 'no-store' }` or `revalidate` option
- **Incremental Static Regeneration (ISR)**: `fetch` with `{ next: { revalidate: 60 } }` (revalidates every 60 seconds)

### 2. TypeScript Integration
- Created custom type definitions in `types.d.ts`
- Implemented type-safe API responses
- Used `@ts-expect-error` for intentional type exceptions

### 3. Dynamic Metadata Generation
- Implemented dynamic metadata based on fetched data
- Created type-safe metadata functions

### 4. Suspense for Data Fetching
- Implemented loading states with React Suspense
- Created error boundaries for failed fetches

##  Code Examples

### Type Definitions (`types.d.ts`)
```typescript
interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface User {
  id: number;
  name: string;
  email: string;
}
```

### Dynamic Data Fetching (`app/posts/[id]/page.tsx`)
```typescript
export default async function PostPage({ params }: { params: { id: string } }) {
  const post: Post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`, {
    cache: 'no-store'
  }).then(res => res.json());

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
}
```

### Dynamic Metadata Generation
```typescript
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const post: Post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    .then(res => res.json());

  return {
    title: post.title,
    description: post.body.substring(0, 100),
  };
}
```

### Suspense Implementation
```typescript
import { Suspense } from 'react';

export default function PostsPage() {
  return (
    <div>
      <h1>Posts</h1>
      <Suspense fallback={<p>Loading posts...</p>}>
        <PostList />
      </Suspense>
    </div>
  );
}

async function PostList() {
  const posts: Post[] = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 60 }
  }).then(res => res.json());

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

### TypeScript Expect Error
```typescript
// @ts-expect-error - We know this API might return null
const userData: User = await getUserData();
```

## 📝 Key Takeaways

1. **Fetching Strategies**:
   - Static → Great for SEO and performance
   - Dynamic → Essential for real-time data
   - ISR → Best of both worlds

2. **TypeScript Benefits**:
   - Catch errors during development
   - Better code documentation
   - Improved developer experience

3. **Suspense**:
   - Provides better UX for loading states
   - Works seamlessly with Next.js

4. **Dynamic Metadata**:
   - Crucial for SEO with dynamic content
   - Can be type-safe with TypeScript

##  Next Steps

-  Learn about Server Actions
-  Explore client-side data fetching
-  Implement authentication flows
-  Practice more advanced TypeScript patterns

##  Resources Used

- [Next.js Data Fetching Docs](https://nextjs.org/docs/app/building-your-application/data-fetching)
- [TypeScript with Next.js](https://nextjs.org/docs/app/building-your-application/configuring/typescript)
- [React Suspense Docs](https://react.dev/reference/react/Suspense)