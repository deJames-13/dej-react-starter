import { useCallback, useState } from 'react';

export default function useToggle(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  const toggleValue = useCallback((val) => {
    return () => {
      setValue((currentValue) => (typeof val === 'boolean' ? val : !currentValue));
    };
  }, []);

  return [value, toggleValue];
}
