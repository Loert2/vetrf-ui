import { useState } from 'react';

const useClose = (initialState: boolean): [boolean, () => void] => {
   const [value, setValue] = useState(initialState);
   const close = () => setValue(() => false);
   return [value, close];
};

export default useClose;
