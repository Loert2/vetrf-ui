import { useState, useCallback } from 'react';

const useToggle = (initialValue: boolean): [boolean, () => void, () => void] => {
   const [value, setValue] = useState(initialValue);
   const toggler = useCallback(() => setValue((value) => !value), []);
   const turnOff = useCallback(() => setValue(() => initialValue), [initialValue]);
   return [value, toggler, turnOff];
};

export default useToggle;
