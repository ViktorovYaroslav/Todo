<script>
   import { createEventDispatcher } from 'svelte'

   const dispatch = createEventDispatcher();

   export let title
   export let done

   function handleDoneChange(e){
      dispatch('doneChange', e.target.checked)
   }

   function handleRemoveClick(){
      dispatch('remove')
   }

</script>

<div class="todo-list__item list-item">
   <div class="list-item__content content">
      <input class="list-item__checkbox form-check-input" type="checkbox" aria-label="checkbox" checked={done} on:input={handleDoneChange}>
      <p class="list-item__text {done ? 'done' : ''}">{title}</p>
      <button class="btn btn-success list-item__done btn-sm" type="button" title="make done" on:click={handleRemoveClick} disabled={!done ? 'disabled' : ''}>Done</button>
   </div>
</div>

<style>
.todo-list__item{
   border-radius: 10px;
   box-shadow: 0 0 10px rgb(238, 238, 238);
   padding: 0 12px;
}
.todo-list__item:not(:last-child){
   margin-bottom: 12px;
}
.list-item__content{
   display: flex;
   align-items: center;
   padding: 12px 0;
}
.list-item__content > *{
   margin: 0;
}
.list-item__checkbox{
   display: inline-block;
   min-width: 18px;
}
.list-item__text {
   flex: 1 1 100%;
   padding: 0 12px;
}
.list-item__text.done{
   text-decoration: line-through;
}
.list-item__text::first-letter {
   text-transform: uppercase;
}
</style>