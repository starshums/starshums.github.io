$(document).ready(function() {
    console.log( "ready!" );
    // ABOUT ME
    $("#about-me").click(function (e) {
        e.preventDefault();

        $("#commands").html("<div class='command'> > Salam and welcome to my little cozy place on the internet, my name is shums, i'm a 24 years developper, <br> currently working a fulltime job as an IT Technicien at the <a class='n-link' href='http://snrt.ma'> Public Moroccan Broadcasting Company</a> <br> in Rabat, Morocco, I like to stay up to date with the latest new technologies, I am serious, optimistic, open-minded <br> </div><div class='command4'><a class='n-link' href=''>> go back</a></div>");
    });

    // CONTACT ME
    $("#contact-me").click(function (e) {
        e.preventDefault();
        $("#commands").html("<div class='command'> > email me : <a class='n-link' href='mailto:chemsed.dinrachidi@gmail.com'>chemsed.dinrachidi@gmail.com</a> </div> <div class='command2'><a class='n-link' href=''>> go back</a></div>");
    });

    // SKILLS
    $("#skills").click(function (e) {
        e.preventDefault();
        $("#commands").html("<div class='command'> > soon... </div> <div class='command2'><a class='n-link' href=''>> go back</a></div>");
    });

    // PROJECTS
    $("#projects").click(function (e) {
        e.preventDefault();
        $("#commands").html("<div class='command'> > soon... </div> <div class='command2'><a class='n-link' href=''>> go back</a></div>");
    });
});