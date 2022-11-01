<script>
   let burgerMenuCheked = false;

   const handleBudrgerMenuBtn = () => {
      burgerMenuCheked = !burgerMenuCheked;
      document.body.classList.toggle('_lock');
   }
   const closeBurgerMenu = (e) => {
      burgerMenuCheked = !burgerMenuCheked;
      document.body.classList.remove('_lock');
   }
</script>

<header class="header bg-primary text-light">
   <div class="_container-big header__container">
      <a href="/" class="header__logo logo">ToDO</a>
      <nav class="header__nav navigation bg-primary {burgerMenuCheked ? '_active' : ''}">
         <ul class="navigation__list" on:click={closeBurgerMenu} on:keypress>
            <li class="navigation__item">
               <a href="#mylist" class="navigation__link">My list</a>
            </li>
            <li class="navigation__item">
               <a href="#about" class="navigation__link">About</a>
            </li>
         </ul>
      </nav>
      <button class="navigation__btn" type="button" title="burger button" on:click={handleBudrgerMenuBtn}>
         <span></span>
      </button>
   </div>
</header>

<style>
.header {
   padding: 12px 0;
}
.header a{
   color: inherit;
   text-decoration: none;
}
.header__container{
   display: flex;
   justify-content: space-between;
   align-items: center;
   flex-wrap: wrap;
}
.navigation__list {
   display: flex;
   align-items: center;
   margin: -8px;
}
.navigation__item {
   padding: 8px;
}
.navigation__link {
   position: relative;
}
.navigation__link::before{
   content: '';
   background: #fff;
   height: 1px;
   position: absolute;
   left: 0;
   right: 0;
   bottom: -4px;
   transform: scaleX(0);
   transition: .2s all ease-out;
}
.navigation__link:hover::before{
   transform: scaleX(1);
}
.navigation__btn {
   position: relative;
   z-index: 1000;
   display: none;
   background: transparent;
   border: 0;
   width: 48px;
   height: 48px;
   padding: 0;
   margin: 0;
   
}
.navigation__btn::after,
.navigation__btn::before {
   content: '';
}
.navigation__btn span,
.navigation__btn::after,
.navigation__btn::before {
   display: block;
   background: #fff;
   width: 80%;
   height: 2px;
   margin: 8px auto;
}

@media (max-width: 580px){
   .navigation__btn {
      display: block;
   }
   .navigation{
      position: fixed;
      left: 0;
      top: 0;
      z-index: 50;
      transform: translateX(101%);
      width: 100vw;
      height: 100vh;
      transition: .3s all ease-out;
      filter: opacity(0);
      padding: 20px;
   }
   .navigation._active{
      transform: translateX(0);
      filter: opacity(1);
   }
   .navigation__list{
      margin-top: 60px;
      display: block;
      text-align: center;
   }
}
</style>