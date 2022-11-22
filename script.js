  function one() {
         document.getElementById('slideimage').src="images/1.jpg";
      }
      // function two() {
      //    document.getElementById('slideimage').src="images/2.jpg";
      // }
      function three() {
         document.getElementById('slideimage').src="images/3.webp";

      }

      setInterval(one,2000);
      // setInterval(two,4000);
      setInterval(three,5000);
      

let userBox = document.querySelector('.header .header-2 .user-box');

document.querySelector('#user-btn').onclick = () =>{
   userBox.classList.toggle('active');
   navbar.classList.remove('active');
}

let navbar = document.querySelector('.header .header-2 .navbar');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   userBox.classList.remove('active');
}

window.onscroll = () =>{
   userBox.classList.remove('active');
   navbar.classList.remove('active');

   if(window.scrollY > 60){
      document.querySelector('.header .header-2').classList.add('active');
   }else{
      document.querySelector('.header .header-2').classList.remove('active');
   }
}
    