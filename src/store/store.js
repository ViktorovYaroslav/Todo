import { writable }   from 'svelte-local-storage-store'
import { v4 as uuid } from 'uuid';

function createTodoStore(){
   const { subscribe, set, update } = writable('todoItemsList',[]);

   return {
      subscribe,
      
      add: (text) => {
         if (text){
            update( items => {
                  return [...items, {
                     id: uuid(),
                     text,
                     done: false,
                  }]
            })
         }
         console.log(subscribe);
      },
      setDone: (id, done) => {
         update((items) => {
            return items.map((item) => {
               if (item.id === id){
                  return {
                     ...item,
                     done
                  }
               } else {
                  return item;
               }
            })
         })
      },
      remove: (id) => {
         update(items => {
            return items.filter(item => {
               if (item.done){
                  return item.id !== id;
               } else {
                  return item;
               }
            })
         })
      },
   }
}

export const todoItems = createTodoStore();