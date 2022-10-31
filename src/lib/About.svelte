<script>
   import { onMount } from 'svelte';

   onMount(() => {
      const sections = document.querySelectorAll('.about__section');

      const observer = new IntersectionObserver(entries => {
         entries.forEach(entry => {
            entry.target.classList.toggle('_show', entry.isIntersecting)
         })
      })

      sections.forEach(section => {
         observer.observe(section)
      })
   })

</script>

   <section class="about" id="about">
      <header class="about__header">
         <h2 class="about__title">About</h2>
      </header>
      <div class="about__first first about__section _show">
         <div class="first__image _ibg about-image">
            <img src="./images/todolist.webp" alt="notepad" width="600" height="399">
         </div>
         <article class="first__text">
            <h3>ToDO - is the new solution for your productivity.</h3>  
            <ul class="list-group list-group-flush">
               <li class="list-group-item">
                  <p>✅ Convenience</p>
               </li>
               <li class="list-group-item">
                  <p>✅ Speed</p>
               </li>
               <li class="list-group-item">
                  <p>✅ Simplicity</p>
               </li>
            </ul>
         </article>
      </div>

      <div class="about__write write about__section">
         <h3>Write what you need todo</h3>
         
         <div class="write__image _ibg about-image">
            <img src="./images/write.webp" alt="instruction-write" width="600" height="400">
         </div>
      </div>
      <div class="about__add add about__section">
         <div class="add__image _ibg about-image">
            <img src="./images/add.webp" alt="instruction-add" width="600" height="400">
         </div>
         <h3>Add to your list</h3>
      </div>
      <div class="about__mark-it mark-it about__section">
         <h3>Mark the task when done it</h3>
         
         <div class="mark__image _ibg about-image">
            <img src="./images/checked.webp" alt="instruction-checked" width="600" height="400">
         </div>
      </div>
      <div class="about__finish finish about__section">
         <div class="finish__image _ibg about-image">
            <img src="./images/done.webp" alt="instruction-done" width="600" height="400">
         </div>
         <h3>Finish the task!</h3>
      </div>
      
   </section>
   
<style>
.about {
   margin: 40px 0;
}
.about > *:not(:last-child){
   margin-bottom: 28px;
}
.about__header {
   text-align: center;

}
.about__section {
   display: flex;
   justify-content: space-between;
   align-items: center;
   flex-wrap: wrap;
   gap: 28px;
}
.about__section > *{
   flex: 1 1;
}
.about-image {
   padding-bottom: 31%;
   border-radius: 10px;
   overflow: hidden;
   box-shadow: 0 0 10px rgb(238 238 238);
}
.first__text > *:not(:last-child){
   margin-bottom: 20px;
}
.about__section > h3 {
   text-align: center;
}
.about__section > *:first-child{
   transition: .7s all ease-out;
   transform: translateX(-80px);
   filter: opacity(0);
}
.about__section > *:last-child{
   transition: .7s all ease-out;
   transform: translateX(80px);
   filter: opacity(0);
}

.about__section._show > *:first-child,
.about__section._show > *:last-child{
   transform: translateX(0);
   filter: opacity(1);
}

@media (max-width: 580px){
   .about__section > *{
      flex: 1 1 100%;
   }
   .about__section:nth-child(odd) > *:first-child{
      order: 1;
   }
   .about-image{
      padding-bottom: 50%;
   }
}

</style>