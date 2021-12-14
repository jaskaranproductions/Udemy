const navbar = () => {
return `
<div class="sale-nav">
    <div class="sale-contant">
        <div class="sale-info">
            <h2> <span class="bold-info"> Sale ends today |</span> Expand your potential through learning.
                Courses start at just
                ₹525.</h2>
            <h1 class="timer bold-info"></h1>
        </div>
        <div class="remove-sale">
            <img width="17px" src="assets/cross.png" alt="" srcset="">
        </div>
    </div>
</div>
<div class="main-nav">
    <div class="logo">
        <a href="index.html"> <img id="logo-img" src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt=""
                srcset=""></a>
    </div>
    <div class="categories">
        <a href="#">Categories</a>
        <div class="cat-menu">
            <div class="main-cat"></div>
            <div class="second-cat"></div>
            <div class="third-cat"></div>
        </div>
    </div>
    <div class="search">
        <img class="icon" src="assets/search.png" alt="">
        <input type="text" placeholder="search">
    </div>
    <div class="udemy-bus">
        <a href="#">Udemy Business</a>
    </div>
    <div class="teach-on">
        <a href="#">Teach on Udemy</a>
    </div>
    <div class="cart">
        <a href="#"> <img class="icon" src="assets/shopping-cart.png" alt=""> </a>
    </div>
    <div class="sign-log">
        <a href="#"> <button> Log in </button></a>
        <a href="#"> <button> Sign up </button></a>
    </div>
    <div class="dark-mode">
        <div class="mods">
            <img src="assets/night.png" alt="" srcset="">
            <img src="assets/light.png" alt="" srcset="">
        </div>
    </div>
</div>`;
};

export default navbar;