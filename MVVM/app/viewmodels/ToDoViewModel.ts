
import {useNavigation} from '@react-navigation/native';
import { I_ToDoViewModel } from '../interfaces/I_ToDoViewModel';
import { useState } from 'react';

export const useToDoViewModel = (): I_ToDoViewModel => {

  const [_hasAThingBeenDone, setHasAThingBeenDone] = useState<boolean>(false);
  const doAThing = () => {
    setHasAThingBeenDone(true)
    console.log("You're doing a thing!!");
  };

  return {
    doAThing,
    hasAThingBeenDone: _hasAThingBeenDone,
  };
};
