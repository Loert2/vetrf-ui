import { useEffect, RefObject, MutableRefObject } from 'react';

const MOUSEDOWN = 'mousedown';
const TOUCHSTART = 'touchstart';

type HandledEvents = [typeof MOUSEDOWN, typeof TOUCHSTART];
type HandledEventsType = HandledEvents[number];
type PossibleEvent = {
   [Type in HandledEventsType]: HTMLElementEventMap[Type];
}[HandledEventsType];
type Handler = (event: PossibleEvent) => void;

const events: HandledEvents = [MOUSEDOWN, TOUCHSTART];

const useOnClickOutside = (
   ref: MutableRefObject<HTMLElement | undefined> | RefObject<HTMLElement>,
   handler: Handler
): void => {
   useEffect(() => {
      const listener = (event: PossibleEvent) => {
         if (!ref.current || ref.current.contains(event.target as Node)) {
            return;
         }

         handler(event);
      };

      events.forEach((event) => {
         document.addEventListener(event, listener);
      });

      return () => {
         events.forEach((event) => {
            document.removeEventListener(event, listener);
         });
      };
   }, [ref, handler]);
};

export default useOnClickOutside;
