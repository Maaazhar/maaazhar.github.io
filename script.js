$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    const typedScript = ["Web Development.", "Front-End Development.", "ReactJS Development.", "MERN Stack Development.", "Web Design."];
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


    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {

    //Skills
    const skills = [
        {
            "category": "Front-End",
            "skillList": [
                ["images/skill-svg/html-5-logo.svg", "HTML", 2019],
                ["images/skill-svg/html-5-logo.svg", "CSS", 2019],
                ["images/skill-svg/html-5-logo.svg", "Bootstrap", 2019],
                ["images/skill-svg/html-5-logo.svg", "Material", 2020],
                ["images/skill-svg/html-5-logo.svg", "JavaScript", 2019],
                ["images/skill-svg/html-5-logo.svg", "ES6", 2019],
                ["images/skill-svg/html-5-logo.svg", "ReactJs", 2020],
                ["images/skill-svg/html-5-logo.svg", "React-Hook", 2020],
                ["images/skill-svg/html-5-logo.svg", "Redux", 2020],
                ["images/skill-svg/html-5-logo.svg", "React-Router", 2020],
                ["images/skill-svg/html-5-logo.svg", "NextJs", 2020],
                ["images/skill-svg/html-5-logo.svg", "TypeScrip", 2020]
            ]
        },
        {
            "category": "Back-End",
            "skillList": [
                ["images/skill-svg/html-5-logo.svg", "JavaScript", 2019],
                ["images/skill-svg/html-5-logo.svg", "NodeJs (CRUD)", 2020],
                ["images/skill-svg/html-5-logo.svg", "ExpressJs", 2020],
                ["images/skill-svg/html-5-logo.svg", "MongoDB", 2020]
            ]
        },
        {
            "category": "Tools",
            "skillList": [
                ["images/skill-svg/html-5-logo.svg", "VS code", 2019],
                ["images/skill-svg/html-5-logo.svg", "Git", 2020],
                ["images/skill-svg/html-5-logo.svg", "Chrome Dev tool", 2020],
                ["images/skill-svg/html-5-logo.svg", "Code Blocks", 2017],
                ["images/skill-svg/html-5-logo.svg", "Dev C++", 2017],
                ["images/skill-svg/html-5-logo.svg", "Figma", 2020],
                ["images/skill-svg/html-5-logo.svg", "PhotoShop", 2019]
            ]
        },
        {
            "category": "Platform",
            "skillList": [
                ["images/skill-svg/html-5-logo.svg", "GitHub", 2020],
                ["images/skill-svg/html-5-logo.svg", "Firebase", 2020],
                ["images/skill-svg/html-5-logo.svg", "Netlify", 2020],
                ["images/skill-svg/html-5-logo.svg", "Vercel", 2022]
            ]
        },
        {
            "category": "Programming Language",
            "skillList": [
                ["images/skill-svg/html-5-logo.svg", "c", 2017],
                ["images/skill-svg/html-5-logo.svg", "C++", 2018],
                ["images/skill-svg/html-5-logo.svg", "JavaScript", 2019],
                ["images/skill-svg/html-5-logo.svg", "Python", 2020]
            ]
        }
    ];

    const currentYear = new Date().getFullYear();
    const skillsContent = document.querySelector(".skillsContent");
    const skillList = document.querySelector(".skill");

    skills.map(d => { skillsContent.insertAdjacentHTML('afterbegin' `
            <div class="skillCategory">
                <div class="skillCategoryTitle">${d.category}</div>
                    ${d.skillList.map(s => { skillList.insertAdjacentHTML('afterbegin', `
                            <div class="skillItem">
                                <div class="skillImg">
                                 <svg data-src="${s[0]}" width="30px" fill="#faebd7"></svg>
                                </div>
                                <div class="skillName">${s[1]}</div>
                                <div class="skillAge">${currentYear - s[2]} Years of<br>Experience </div>
                            </div>
                        `)
        })}
            </div>
      `)
    })
});