import { useState } from 'react';

const useClose = (): [boolean, () => void] => {
   const [value, setValue] = useState(true);
   const close = () => setValue(() => false);
   return [value, close];
};

export default useClose;
