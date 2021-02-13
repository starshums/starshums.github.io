(this["webpackJsonpstarshums.github.io"]=this["webpackJsonpstarshums.github.io"]||[]).push([[0],{18:function(e){e.exports=JSON.parse('[{"type":"project","title":"Lorem Landing Page","description":"A simple landing page theme. </br></br> Illustrations from unDraw","btns":[{"id":"demo","text":"Live Demo","url":"https://starshums.github.io/lorem-landing-page-template/"},{"id":"code","text":"Source Code","url":"https://github.com/starshums/lorem-landing-page-template"}],"techs":["HTML5","CSS3","Responsive Design"]},{"type":"project","title":"Project Mehrass (MERN APP)","description":"This app displays a list of words from the Moroccan dialect and their meaning, it\'s a dictionary like website. With the possibility for users to join add and update more words on the fly!","btns":[{"id":"demo","text":"Live Demo","url":"https://project-mehrass.herokuapp.com/"},{"id":"code","text":"Source Code","url":"https://github.com/starshums/p.mehrass"}],"techs":["Mongodb","Mongoose","Express","React","Redux","Nodejs","Docker","Docker Compose"]},{"type":"project","title":"Pok\xe9mon App","description":"This is a react application that shows a list of Pok\xe9mons, made by consuming a GraphQL Pok\xe9mon API.","btns":[{"id":"demo","text":"Live Demo","url":"https://shums-react-graphql-pokemon.herokuapp.com/pokemons"},{"id":"code","text":"Source Code","url":"https://github.com/starshums/react-graphql-pokemon-app"}],"techs":["Tailwind CSS","React","GraphQL","Apollo Client","Docker"]},{"type":"project","title":"Oracle JD Edwards Julian date converter for Laravel 5","description":"A very simple Laravel library that converts Oracle JD Edwards Julian date to the standard Gregorian date.","btns":[{"id":"code","text":"Source Code","url":"https://github.com/starshums/jdejulianconverter"}],"techs":["PHP","Laravel"]},{"type":"game","title":"JoJo\'s Bizarre Secret Delivery","description":"This project was my first ever game jam, I took part in the Unity Create with Code Game Jam 2020, that happened on Friday, October 23rd~Sunday, October 25th 2020. The theme was \\"Secrets\\"!","btns":[{"id":"demo","text":"Play the Game","url":"https://starshums.itch.io/jojos-bizarre-secret-delivery"},{"id":"code","text":"Source Code","url":"https://github.com/starshums/UnityGameJam2020"}],"techs":["C#","Unity","Blender"]},{"type":"game","title":"FEZBOT","description":"A 3D Platformer game I\'m working on!","btns":[{"id":"demo","text":"Play the Game","url":"https://starshums.itch.io/fezbot"}],"techs":["C#","Unity","Blender"]},{"type":"game","title":"FEZBOT RUNNER","description":"An endless runner I\'m working on! </br> Will be available on the play store very soon!","btns":[{"id":"android","html":"<a target=\'_blank\' href=\'https://play.google.com/store/apps/details?id=com.starshums.fezbotrunner&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1\'><img alt=\'Get it on Google Play\' src=\'https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png\'/></a>"}],"techs":["C#","Unity","Blender","Android"]},{"type":"game","title":"SPOOK\' a BOO!","description":"This project served as a warm up project for the Unity Create with Code Game Jam 2020. </br></br> You play as a tiny ghost, and you help him collect fear from kids around the farm.","btns":[{"id":"demo","text":"Play the Game","url":"https://starshums.itch.io/spook-a-boo"},{"id":"code","text":"Source Code","url":"https://github.com/starshums/UNITY-GameJam-WarmUp"}],"techs":["C#","Unity","Blender"]},{"type":"game","title":"Moul Djellaba Runner!","description":"This was the first mobile game I published to the playstore. </br></br> It\'s a subway surfer clone.","btns":[{"id":"android","html":"<a target=\'_blank\' href=\'https://play.google.com/store/apps/details?id=com.starshums.mooldjellabarunner&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1\'><img alt=\'Get it on Google Play\' src=\'https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png\'/></a>"}],"techs":["C#","Unity","Blender","Android"]}]')},25:function(e,t,a){},26:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a(0),r=a(17),i=a.n(r),n=(a(25),a(10)),o=(a.p,a(26),a(8)),l=a(2),d=a(7),m=function(){return Object(s.jsx)(d.b.div,{initial:{scaleX:0},animate:{scaleX:1},exit:{scaleX:0},children:Object(s.jsxs)("div",{className:"bottom",children:[Object(s.jsx)("i",{className:"fas fa-home",children:" "})," home_page;"]})})},h=function(){return Object(s.jsx)(d.b.div,{initial:{scaleX:0},animate:{scaleX:1},exit:{scaleX:0},children:Object(s.jsx)(c.Fragment,{children:Object(s.jsx)("div",{className:"bottom",children:Object(s.jsx)("div",{class:"command commndMenu",children:Object(s.jsxs)("p",{children:[" ","@"," ",Object(s.jsx)("a",{class:"n-link",href:"mailto:chemsed.dinrachidi@gmail.com",children:"chemsed.dinrachidi@gmail.com"})," "]})})})})})},j=a(18);var p=function(e){var t=e.project,a=e.projectIcon;return Object(s.jsx)(c.Fragment,{children:Object(s.jsxs)("li",{className:"project-item",children:[Object(s.jsxs)("h3",{children:[" ",Object(s.jsx)("i",{className:"fas fa-"+a})," ",t.title," "]}),Object(s.jsx)("div",{className:"project-desc",dangerouslySetInnerHTML:{__html:t.description}}),Object(s.jsx)("ul",{className:"project-techs",children:t.techs.map((function(e,t){return Object(s.jsxs)("li",{children:[" ",e," "]},t)}))}),Object(s.jsx)("div",{className:"project-btns",children:t.btns.map((function(e,t){var a="";return a="code"===e.id?"fab fa-github":"fas fa-external-link-alt","android"===e.id?Object(s.jsx)("div",{className:"google-play-btn",dangerouslySetInnerHTML:{__html:e.html}}):Object(s.jsx)(c.Fragment,{children:Object(s.jsxs)("a",{className:e.id,href:e.url,target:"_blank",children:[Object(s.jsx)("i",{className:a})," ",e.text]})},t)}))})]})})},b=function(e){var t=e.sectionTitle,a=e.icon,c=e.type,r=j.filter((function(e){return e.type===c})),i="";return i="project"===c?"folder-open":"gamepad",Object(s.jsx)(d.b.div,{initial:{scaleX:0},animate:{scaleX:1},exit:{scaleX:0},children:Object(s.jsxs)("div",{className:"bottom",children:[Object(s.jsxs)("h2",{className:"projects-section-title",children:[Object(s.jsx)("i",{className:"fas fa-"+a})," ",t]}),Object(s.jsx)("div",{className:"projects-wrapper",children:Object(s.jsx)("ul",{className:"projects",children:r.map((function(e,t){return Object(s.jsx)(p,{project:e,projectIcon:i},t)}))})})]})})},u=function(){return Object(s.jsx)(d.b.div,{initial:{scaleX:0},animate:{scaleX:1},exit:{scaleX:0},children:Object(s.jsx)(c.Fragment,{children:Object(s.jsxs)("p",{className:"bottom",children:["Software Developer and an Indie Game Developer, in love with React and GraphQL technologies, currently developing a 3D platformer game called FEZBOT made using Unity and Blender. To follow more on my game and more, please visit my itch.io page :"," ",Object(s.jsx)("a",{className:"n-link",target:"_blank",href:"https://starshums.itch.io",children:"starshums.itch.io"}),"also available on Game Jolt:"," ",Object(s.jsx)("a",{className:"n-link",target:"_blank",href:"https://gamejolt.com/@starshums",children:"gamejolt.com/@starshums"}),"~ Thank you! :) ~ \ud83d\udcbb"]})})})},g=function(){var e=Object(l.e)();return Object(s.jsxs)(c.Fragment,{children:[Object(s.jsxs)("div",{class:"top",children:[Object(s.jsxs)("p",{children:["Hello there ",Object(s.jsx)("img",{src:"https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif",width:"60px"}),",  I'm Shums!"]}),Object(s.jsx)("p",{class:"secondary-info",children:"I'm a Software Developer, Indie Game Developer."})," "]}),Object(s.jsx)("div",{className:"bottom",children:Object(s.jsx)("div",{className:"projects-wrapper",children:Object(s.jsx)("ul",{className:"home-menu",children:"/"===e.pathname?Object(s.jsxs)(c.Fragment,{children:[Object(s.jsx)("li",{children:Object(s.jsx)("span",{className:"menu-text",children:Object(s.jsxs)(o.b,{to:"/about",children:[Object(s.jsx)("i",{className:"fas fa-user"})," ABOUT ME"]})})}),Object(s.jsx)("li",{children:Object(s.jsx)("span",{className:"menu-text",children:Object(s.jsxs)(o.b,{to:"/projects",children:[Object(s.jsx)("i",{className:"fas fa-file-code"})," PROJECTS"]})})}),Object(s.jsx)("li",{children:Object(s.jsx)("span",{className:"menu-text",children:Object(s.jsxs)(o.b,{to:"/contact",children:[Object(s.jsx)("i",{className:"fas fa-at"})," CONTACT"]})})})]}):Object(s.jsx)("li",{children:Object(s.jsx)("span",{className:"menu-text",children:Object(s.jsxs)(o.b,{to:"/",children:[Object(s.jsx)("i",{className:"fas fa-hand-point-left"})," GO BACK"]})})})})})})]})};var x=function(){return Object(s.jsx)(d.a,{exitBeforeEnter:!0,children:Object(s.jsxs)(o.a,{children:[Object(s.jsx)(g,{}),Object(s.jsx)(l.a,{path:"/projects",render:function(e){return Object(s.jsx)(b,Object(n.a)(Object(n.a)({},e),{},{sectionTitle:"Personal Projects",icon:"file-alt",type:"project"}))}}),Object(s.jsx)(l.a,{path:"/projects",render:function(e){return Object(s.jsx)(b,Object(n.a)(Object(n.a)({},e),{},{sectionTitle:"Games",icon:"gamepad",type:"game"}))}}),Object(s.jsx)(l.a,{path:"/projects",render:function(e){return Object(s.jsx)(b,Object(n.a)(Object(n.a)({},e),{},{sectionTitle:"3D Modelling & Animation",icon:"cube",type:""}))}}),Object(s.jsx)(l.a,{exact:!0,path:"/contact",component:h}),Object(s.jsx)(l.a,{exact:!0,path:"/about",component:u}),Object(s.jsx)(l.a,{exact:!0,path:"/",component:m})]})})};i.a.render(Object(s.jsx)(x,{}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.d2413b0e.chunk.js.map