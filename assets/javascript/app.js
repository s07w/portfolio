$(document).ready(function () {
    //functions for materialize
    $(".dropdown-trigger").dropdown({
        alignment: 'left',
        coverTrigger: false,
        inDuration: 200,
        outDuration: 400
    });
    //populating content
    function populateIntro() {
        var introTitle = $("<p id='intro-headText'><span class='yellow-text'>Hello</span>!</p>");
        var introContent = $("<p id='intro-text'>My name is <span class='yellow-text'>Sam</span>. <br>I'm a full stack web developer. <br>Welcome to my portfolio!</p>");
        var introDiv = $("<div class='content'></div>");
        introDiv.attr("value", 1);
        introDiv.append(introTitle).append(introContent);
        return introDiv;
    }

    function populateAbout() {
        var aboutTitle = $("<p id='about-headText'><span class='yellow-text'>About Me</span></p>");
        var aboutContent = $("<p id='about-text'>I'm an aspiring web developer and currently live on the West Side of Cleveland. I have a Master's in Professional & Technical communication, and it has afforded me the ability to be intensely detail-oriented while never losing sight of the big picture. I'm currently enrolled in a coding class at Case Western Reserve University and am excited to expand these skills and take them in a new, forward-looking direction. I'm a lifelong Browns fan. Hopefully that demonstrates some tenacity, if not some blind optimism. But it's all about striking a balance, isn't it?</p>")
        var aboutDiv = $("<div class='content'></div>");
        aboutDiv.attr("value", 2);
        aboutDiv.append(aboutTitle).append(aboutContent);
        return aboutDiv;
    }

    function populateContact() {
        var contactTitle = $("<p id='contact-headText' class='yellow-text'>Contact</p>");
        var contactContent1 = $("<p class='contact-text' class='left-align'>Social Media: </p>");
        var contactContent2 = $("<p class='contact-text' class='left-align' style='padding-bottom: 5%'>Email: <br><span class='yellow-text'><a href='mailto:wagnerjsamuel@gmail.com'>wagnerjsamuel@gmail.com</a></span></p>")
        var imgrow = $("<div class='row'></div>");
        var githubImgDiv = $("<div class='col s6'><a href='https://github.com/s07w' target='_blank'><img class='responsive-img ourImage' src='assets/images/githublogo.jpg'></a></div>");
        var linkedinImgDiv = $("<div class='col s6'><a href='https://www.linkedin.com/in/samuel-wagner-8b884761/' target='_blank'><img class='responsive-img ourImage' src='assets/images/linked.jpg'></a></div>");
        imgrow.append(githubImgDiv).append(linkedinImgDiv);
        var contactDiv = $("<div class='content'></div>");
        contactDiv.attr("value", 5);
        contactDiv.append(contactTitle).append(contactContent1).append(imgrow).append(contactContent2);
        return contactDiv;
    }

    function populatePortfolio() {
        var portfolioTitle = $("<p id='portfolio-headText' class='yellow-text'>Portfolio</p>");
        //make cards from materialize card
        var projcard1 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/pf1.png'><span style='font-size:1.40em;' class='card-title white-text yellow'>Word Guess</span></div><div class='card-content'><p class='card-textcontent'>A Javascript-based Hangman game, with a 90's hacker theme.</p></div><a style='font-size:1.40em;padding:10px;' class='yellow-text' href='https://s07w.github.io/WordGuessGame/' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/s07w/WordGuessGame' target='_blank'>GitHub</a></p></div></div>");
        var projcard2 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/pf2.png'><span style='font-size:1.40em;' class='card-title white-text yellow'>Psychic Game App</span></div><div class='card-content'><p class='card-textcontent'>A letter guessing game against the HAL 4000 computer.</p></div><a style='font-size:1.40em;padding:10px;' class='yellow-text' href='https://s07w.github.io/PsychicGame/' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/s07w/PsychicGame/' target='_blank'>GitHub</a></p></div></div>");
        var projcard3 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/pf3.png'><span style='font-size:1.40em;' class='card-title white-text yellow'>Music Trivia Game</span></div><div class='card-content'><p class='card-textcontent'>A Javascript-based pop music trivia game.</p></div><a style='font-size:1.40em;padding:10px;' class='yellow-text' href='https://s07w.github.io/triviagame/' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/s07w/triviagame' target='_blank'>GitHub</a></p></div></div>");
        var projcard4 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/pf4.jpg'><span style='font-size:1.40em;' class='card-title white-text yellow'>Giftastic Web App</span></div><div class='card-content'><p class='card-textcontent'>Uses GIPHY API to generate button categories which then generate gifs</p></div><a style='font-size:1.40em;padding:10px;' class='yellow-text' href='https://s07w.github.io/giftastic/' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/s07w/giftastic' target='_blank'>GitHub</a></p></div></div>");
        var projcard5 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/pf5.png'><span style='font-size:1.40em;' class='card-title white-text yellow'>Liri App</span></div><div class='card-content'><p class='card-textcontent'>A JS Node app that takes four commands to access different APIs</p></div><a style='font-size:1.40em;padding:10px;' class='yellow-text' href='https://s07w.github.io/liri/' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/s07w/liri' target='_blank'>GitHub</a></p></div></div>");
        var projcard6 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/pf6.jpeg'><span style='font-size:1.40em;' class='card-title white-text yellow'>Constructor Wordsearch</span></div><div class='card-content'><p class='card-textcontent'>A JS Node word search game using JS constructors and Inquire npm</p></div><a style='font-size:1.40em;padding:10px;' class='yellow-text' href='https://s07w.github.io/constructor-wordguess/' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/s07w/constructor-wordguess/' target='_blank'>GitHub</a></p></div></div>");
        var projcard7 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/pf7.jpg'><span style='font-size:1.40em;' class='card-title white-text yellow'>Bamazon App</span></div><div class='card-content'><p class='card-textcontent'>A JS Node app using MySQL and npm packages</p></div><a style='font-size:1.40em;padding:10px;' class='yellow-text' href='https://s07w.github.io/bamazon/' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/s07w/bamazon/' target='_blank'>GitHub</a></p></div></div>");
        var projcard8 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/pf8.png'><span style='font-size:1.40em;' class='card-title white-text yellow'>Eat Da Burger</span></div><div class='card-content'><p class='card-textcontent'>An app that uses Handlebars and ORM to devour burgers</p></div><a style='font-size:1.40em;padding:10px;' class='yellow-text' href='https://s07w.github.io/eatdaburger/' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/s07w/eatdaburger/' target='_blank'>GitHub</a></p></div></div>");



        var cardrow = $("<div class='row'></div>");
        cardrow.append(projcard1).append(projcard2).append(projcard3);
        var cardrow2 = $("<div class='row'></div>");
        cardrow2.append(projcard4).append(projcard5).append(projcard6);
        var cardrow3 = $("<div class='row'></div");
        cardrow3.append(projcard7).append(projcard8);
        var portfolioDiv = $("<div class='content'></div>");
        portfolioDiv.attr("value", 3);
        portfolioDiv.append(portfolioTitle).append(cardrow);
        portfolioDiv.append(cardrow2);
        portfolioDiv.append(cardrow3);
        return portfolioDiv;
    }

    function populateSkills() {
        var skillsTitle = $("<p id='skills-headText'><span class='yellow-text'>SKILLS</span></p>");
        var skillsContent = $("<p id='skills-text'>■ CSS3 ■ HTML5 ■ Javascript<p><p id='skills-text'>■ JQuery<br>■ JSNode ■ React ■ Express<br><p><p id='skills-text'>■ MongoDB ■ MySQL</p>")
        var skillsDiv = $("<div class='content'></div>");
        skillsDiv.attr("value", 4);
        skillsDiv.append(skillsTitle).append(skillsContent);
        return skillsDiv;
    }

    function changeDiv(cValue, valueNew, newDiv) {
        if (cValue != valueNew) {
            $("div[value=" + cValue + "]").fadeOut(1000, function () {
                newDiv.fadeIn(500);
            });
        }
    }
    var currentValue = 1;
    var intro = populateIntro();
    var about = populateAbout();
    var portfolio = populatePortfolio();
    var contact = populateContact();
    var skills= populateSkills();
    $("#attachDiv").append(intro).append(about).append(portfolio).append(contact).append(skills);
    //when user first loads page, only show intro

    about.hide();
    portfolio.hide();
    contact.hide();
    skills.hide();
    //click functions
    $("#homePage").click(function () {
        changeDiv(currentValue, 1, intro);
        currentValue = 1;
    })
    $("#topTitle").click(function () {
        $("#homePage").trigger('click');
    })
    $("#aboutPage").click(function () {
        changeDiv(currentValue, 2, about);
        currentValue = 2;
    })
    $("#portfolioPage").click(function () {
        changeDiv(currentValue, 3, portfolio);
        currentValue = 3;
    })
    $("#skillsPage").click(function() {
        changeDiv(currentValue, 4, skills);
        currentValue = 4;
    })
    $("#contactPage").click(function () {
        changeDiv(currentValue, 5, contact);
        currentValue = 5;
    })

})