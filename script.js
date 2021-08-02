var scrollpos = window.scrollY; // window scroll position
var wh = window.innerHeight - 100; // as soon as element touches bottom with offset event starts
var about = document.querySelector(".about"); //element
var intro = document.querySelector(".intro"); //element
var bulb = document.querySelector(".project-container");
var proj_img = document.querySelectorAll(".proj_img");
var proj_info = document.querySelectorAll(".project-description");
var tech=document.querySelectorAll(".skill");
var contact=document.querySelector(".contact_container");
setInterval(myfunc, 100);

function myfunc() {
    if (scrollpos > (about.getBoundingClientRect().top - wh) &&
        scrollpos < (bulb.getBoundingClientRect().top - wh+110)) {
        about.classList.remove('remove_left_anime');
        intro.classList.remove('remove_right_anime');
        about.classList.add("left_anime");
        intro.classList.add('right_anime');
    }

    if(scrollpos > (bulb.getBoundingClientRect().top - wh+60)){
        about.classList.remove('left_anime');
        about.classList.add('remove_left_anime');
        intro.classList.remove('right_anime');
        intro.classList.add('remove_right_anime');
    }

    if(scrollpos > (bulb.getBoundingClientRect().top - wh+280) &&
        scrollpos <= (tech[0].getBoundingClientRect().top - wh+130)){

        bulb.classList.remove("remove_bulb_anime");
        bulb.classList.add("bulb_anime");
        proj_img.forEach(img=>{
            img.classList.remove('remove_left_anime_project');
            img.classList.add('left_anime_project');
        })
        proj_info.forEach(info=>{
            info.classList.remove("remove_right_anime_project");
            info.classList.add("right_anime_project");
        })

        let count=1;
        tech.forEach(t=>{
            if(count%2==1){
                t.classList.remove('left_anime_slide');
                t.classList.add('remove_left_anime_slide');
            }
            else{
                t.classList.remove('right_anime_slide');
                t.classList.add('remove_right_anime_slide');
            }
            count+=1;
        })
    }

    if(scrollpos > (tech[0].getBoundingClientRect().top - wh+129)){
        // console.log(tech[0].getBoundingClientRect().top,wh,tech[0].getBoundingClientRect().top-wh+130);
        bulb.classList.remove('bulb_anime');
        bulb.classList.add("remove_bulb_anime");
        proj_img.forEach(img=>{
            img.classList.remove('left_anime_project');
            img.classList.add('remove_left_anime_project');
        })
        proj_info.forEach(info=>{
            info.classList.remove('right_anime_project');
            info.classList.add("remove_right_anime_project");
        })
    }

    if(scrollpos > (tech[0].getBoundingClientRect().top - wh+130)&&
    scrollpos <= (contact.getBoundingClientRect().top - wh+250)){
        console.log(tech[0].getBoundingClientRect().top,wh,tech[0].getBoundingClientRect().top-wh+130)
        let count=1;
        tech.forEach(t=>{
            if(count%2==1){
                t.classList.remove('remove_left_anime_slide');
                t.classList.add('left_anime_slide');
            }
            else{
                t.classList.remove('remove_right_anime_slide');
                t.classList.add('right_anime_slide');
            }
            count+=1;
        })
    }

    if(scrollpos > (contact.getBoundingClientRect().top - wh+250)){
        console.log('he',contact.getBoundingClientRect().top - wh+250);
        let count=1;
        tech.forEach(t=>{
            console.log(count);
            if(count%2==1){
                t.classList.remove('left_anime_slide');
                t.classList.add('remove_left_anime_slide');
            }
            else{
                t.classList.remove('right_anime_slide');
                t.classList.add('remove_right_anime_slide');
            }
            count+=1;
        })
    }
}