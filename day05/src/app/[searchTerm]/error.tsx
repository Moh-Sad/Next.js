'use client';

import { useEffect } from 'react';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
	console.error(error);
  }, [error]);

return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
        <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
        <button
            onClick={() => reset()}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
            Try again
        </button>
    </div>
);
}
