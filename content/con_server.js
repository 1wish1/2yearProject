let Toggle_Box_click = document.querySelector(".togglebox");
let Nav_container = document.querySelector("nav");
let Toggle_Home = document.querySelector(".tag_Home");
let Toggle_Schedule = document.querySelector(".tag_schedule");
let Toggle_Practice = document.querySelector(".tag_Practice");
let Toggle_Achievement = document.querySelector(".tag_Achievement");
let Toggle_Blog = document.querySelector(".tag_blog");
let Toggle_Setting = document.querySelector(".tag_settings");

let header_box = document.querySelector("header");
let schedules_box = document.querySelector(".schedules");
let Quiz_box = document.querySelector(".Quiz");
let Achievement_box = document.querySelector(".Achievement");
let Blog_box = document.querySelector(".Blog");

Toggle_Box_click.addEventListener('click', ()=> {
    Toggle_Box_click.classList.toggle('active');
    Nav_container.classList.toggle('active');

}) 

Toggle_Home.addEventListener('click', ()=> {
    header_box.classList.remove("active");
    schedules_box.classList.add("active");
    Quiz_box.classList.add("active");
    Achievement_box.classList.add("active");
    Blog_box.classList.add("active");
    setTimeout(function() {
        document.querySelector('.heads').style.display = 'block';
        document.querySelector('.Achievement').style.display = 'none';
        document.querySelector('.schedules').style.display = 'none';
        document.querySelector('.Quiz').style.display = 'none';
        document.querySelector('.Blog').style.display = 'none';
    
    }, 400);
    
   

}) 
Toggle_Schedule.addEventListener('click', ()=> {
    header_box.classList.add("active");
    schedules_box.classList.remove("active");
    Quiz_box.classList.add("active");
    Achievement_box.classList.add("active");
    Blog_box.classList.add("active");
    setTimeout(function() {
        document.querySelector('.schedules').style.display = 'block';
        document.querySelector('.Achievement').style.display = 'none';
        document.querySelector('.heads').style.display = 'none';
        document.querySelector('.Quiz').style.display = 'none';
        document.querySelector('.Blog').style.display = 'none';
    
    }, 400);
    
}) 
Toggle_Practice.addEventListener('click', ()=> {
    header_box.classList.add("active");
    schedules_box.classList.add("active");
    Quiz_box.classList.remove("active");
    Achievement_box.classList.add("active");
    Blog_box.classList.add("active");
    setTimeout(function() {
        document.querySelector('.Quiz').style.display = 'block';
        document.querySelector('.Achievement').style.display = 'none';
        document.querySelector('.heads').style.display = 'none';
        document.querySelector('.schedules').style.display = 'none';
        document.querySelector('.Blog').style.display = 'none';
    
    }, 400);
    

}) 
Toggle_Achievement.addEventListener('click', ()=> {
    header_box.classList.add("active");
    schedules_box.classList.add("active");
    Quiz_box.classList.add("active");
    Achievement_box.classList.remove("active");
    Blog_box.classList.add("active");
    setTimeout(function() {
        document.querySelector('.Achievement').style.display = 'block';
        document.querySelector('.Quiz').style.display = 'none';
        document.querySelector('.heads').style.display = 'none';
        document.querySelector('.schedules').style.display = 'none';
        document.querySelector('.Blog').style.display = 'none';
    }, 400);
}) 
Toggle_Blog.addEventListener('click', ()=> {
    header_box.classList.add("active");
    schedules_box.classList.add("active");
    Quiz_box.classList.add("active");
    Achievement_box.classList.add("active");
    Blog_box.classList.remove("active");
    setTimeout(function() {
        document.querySelector('.Blog').style.display = 'block';
        document.querySelector('.Quiz').style.display = 'none';
        document.querySelector('.heads').style.display = 'none';
        document.querySelector('.schedules').style.display = 'none';
        document.querySelector('.Achievement').style.display = 'none';
    }, 400);
    
}) 



