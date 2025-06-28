import { useState } from 'react';

import { handleInsights as handleInsightsApi } from '@/api/requests';

export function useHandleInsights() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [result, setResult] = useState<any>(null);

  const handleInsights = async ({
    notes,
    mood,
    sleep,
  }: {
    notes: string;
    mood: number;
    sleep: number;
  }) => {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch(handleInsightsApi, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ notes, mood, sleep }),
      });
      if (!res.ok) throw new Error('Failed to submit insights');
      const data = await res.json();
      setResult(data);
      setLoading(false);
      return data;
    } catch (err: any) {
      setError(err);
      setLoading(false);
      return null;
    }
  };

  return {
    handleInsights,
    result,
    error,
    loading,
  };
}
