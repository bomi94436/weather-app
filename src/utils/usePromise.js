import { useState, useEffect } from "react";

const usePromise = (promiseCreator, deps) => {
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const result = await promiseCreator();
        setResolved(result);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    })();
  }, deps);
  return [loading, resolved, error];
};

export default usePromise;
