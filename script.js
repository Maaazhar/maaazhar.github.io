$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    const typedScript = ["Web Development.", "Front-End Development.", "ReactJS Development.", "MERN Stack Development.", "Web Design." ]; 
    var typed = new Typed(".typing", {
        strings: typedScript,
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: typedScript,
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    //Skills
    const skills = [
        [
            "Front-end",
            ["", "HTML", 2019],
            ["", "CSS", 2019],
            ["", "Bootstrap", 2019],
            ["", "Material", 2020],
            ["", "JavaScript", 2019],
            ["", "ES6", 2019],
            ["", "ReactJs", 2020],
            ["", "React-Hook", 2020],
            ["", "Redux", 2020],
            ["", "React-Router", 2020],
            ["", "NextJs", 2020],
            ["", "TypeScrip", 2020]
        ],
        [
            "Back-end",
            ["", "JavaScript", 2019],
            ["", "NodeJs (CRUD)", 2020],
            ["", "ExpressJs", 2020],
            ["", "MongoDB", 2020]
        ],
        [
            "Tools",
            ["", "VS code", 2019],
            ["", "Git", 2020], 
            ["", "Chrome Dev tool", 2020], 
            ["", "Code Blocks", 2017],
            ["", "Dev C++", 2017],
            ["", "Figma", 2020],
            ["", "PhotoShop", 2019]
        ],
        [
            "Platform",
            ["", "GitHub", 2020], 
            ["", "Firebase", 2020], 
            ["", "Netlify", 2020],
            ["", "Vercel", 2022]
        ],
        [
            "Programming Language",
            ["", "c", 2017], 
            ["", "C++", 2018], 
            ["", "JavaScript", 2019],
            ["", "Python", 2020]
        ]
    ]

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});