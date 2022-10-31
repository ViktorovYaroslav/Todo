<script>
   import { createEventDispatcher } from 'svelte'

   const dispatch = createEventDispatcher();

   let addTodoValue = '';

   function handleAddClick(){
      dispatch('add', addTodoValue)
      addTodoValue = '';
   }

</script>

<div class="todo__form-add form-add" >
   <form class="form-add__form form" on:submit|preventDefault={handleAddClick}>
      <input type="text" bind:value={addTodoValue} class="form-control border border-primary add-case__value" placeholder="Add case" aria-label="Add case" aria-describedby="button-addon2">
      <button class="btn btn-primary form-add__btn" type="submit" id="button-addon2">Add to list</button>
   </form>
</div>

<style>
.todo__form-add{
   padding: 20px 0;
}
.form{
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 10px;
}
.form-add__btn{
   white-space: nowrap;
}
</style>