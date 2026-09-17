import { useEffect, useState } from "react";

export interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export function useFetch<T>(
  load: () => Promise<T>,
  deps: React.DependencyList = [],
): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  useEffect(() => {
    let active = true; // Flag to track if the component is still mounted

    setState({ data: null, loading: true, error: null });

    load()
      .then((data) => active && setState({ data, loading: false, error: null }))
      .catch(
        (error) => active && setState({ data: null, loading: false, error }),
      );

    return () => {
      active = false;
    };
  }, deps);

  return state;
}
