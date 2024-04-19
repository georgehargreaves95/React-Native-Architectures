import { useEffect } from 'react';
import { I_ToDoViewController } from '../interfaces/I_ToDoViewController';
import {useToDoViewModel} from '../viewmodels/ToDoViewModel';

export const useToDoViewController = (): I_ToDoViewController => {

  const viewModel = useToDoViewModel();

  useEffect(() => {
    console.log('Has a Thing been done? :', viewModel.hasAThingBeenDone)
  }, [viewModel.hasAThingBeenDone])

  const onClickAThing = () => {
    console.log("You've clicked on a thing!!");
    viewModel.doAThing();
  };

  return {
    onClickAThing
  };
};