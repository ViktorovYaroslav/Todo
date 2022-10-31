<script>
   import { todoItems }  from './store/store';
   import { flip }       from 'svelte/animate';
   import { crossfade }  from 'svelte/transition';
   import { cubicIn }    from 'svelte/easing';
   import { typewriter } from './animations/typewriter';

   import Header   from './lib/Header.svelte'
   import Footer   from './lib/Footer.svelte'
   import TodoItem from './lib/TodoItem.svelte'
   import AddTodo  from './lib/AddTodo.svelte';
   import About    from './lib/About.svelte';

   const [send, receive] = crossfade({
      duration: 300,

      fallback(node, params){
         const style = getComputedStyle(node);
         const transform = style.transform === 'none' ? '' : style.transform;

         return {
            duration: 300,
            easing: cubicIn,
            css: (t) => `
               transform: ${transform};
               opacity: ${t};
            `,
         }
      }
   });

   function handleAddClick(e){
      todoItems.add(e.detail);
   }

   function handleDoneChange(id, done){
      todoItems.setDone(id, done);
   }

   function handleRemove(id){
      todoItems.remove(id);
   }

</script>

<div class="_wrapper">
   <Header/>
   <main class="main">
      <div class="container">
         <div class="todo">

            <h1 class="title-h1 " in:typewriter>ToDO - your productivity friend</h1>

            <AddTodo on:add={handleAddClick} />

            {#if !$todoItems.length}
               <p class="todo__empty">List is empty...</p>
            {/if}

            <div class="todo__lists" id="mylist">
            
            <div class="todo__lists-column">
               <div class="todo__list todo-list">
                  {#if $todoItems.length}
                     <p class="todo__empty">Active:</p>
                  {/if}
                  <ol class="todo-list__ol">
                     {#each $todoItems.filter(item => !item.done) as { id, text, done }, i (id) }
                     <li in:receive={{key: id}} out:send={{key: id}} animate:flip={{duration: 300,}}>
                        <TodoItem 
                           title={`${i + 1}. ${text}`} 
                           {done}
                           on:doneChange={(event) => handleDoneChange(id, event.detail)}
                           on:remove={e => handleRemove(id)} 
                        />
                     </li>
                     {/each}
                  </ol>
               </div>
            </div>

            <div class="todo__lists-column">
               <div class="todo__list todo-list">
                  {#if $todoItems.length}
                     <p class="todo__empty">Done:</p>
                  {/if}
                  <ol class="todo-list__ol">
                     {#each $todoItems.filter(item => item.done) as { id, text, done }, i (id) }
                     <li in:receive={{key: id}} out:send={{key: id}} animate:flip={{duration: 300,}}>
                        <TodoItem 
                           title={`${i + 1}. ${text}`} 
                           {done}
                           on:doneChange={(event) => handleDoneChange(id, event.detail)}
                           on:remove={e => handleRemove(id)} 
                        />
                     </li>
                     {/each}
                  </ol>
               </div>
            </div>

         </div>
      </div>
         <About />
      </div>
      
   </main>
   <Footer/>
</div>

<style>
.todo{
   min-height: 100vh;
}
.title-h1{
   text-align: center;
   margin: 40px 0;
}
.todo-list__ol{
   margin-top: 40px;
}
.todo-list__ol > *:not(:last-child){
   margin-bottom: 12px;
}
.todo__empty{
   text-align: center;
   margin: 28px 0;
}
.todo__lists{
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
   margin: -6px;
}
.todo__lists-column{
   padding: 6px;
   flex: 1;
}
@media (max-width: 767px){
   .todo__lists-column{
      flex: 1 1 100%;
   }
}
</style>
