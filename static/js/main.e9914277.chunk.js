(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(30)},28:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),n=a(15),i=a.n(n),s=a(32),l=a(34),o=a(33),p=a(5),u=a.n(p),m=a(6),_=a(7),h=a(8),d=a(12),f=a(9),E=a(13),v=a(31),b=function(e){return r.a.createElement("div",{className:"recipe__list__div"},r.a.createElement("ul",{className:"recipe__list__grid"},0===e.CurrentRecipeList.length&&r.a.createElement("h4",{className:"recipe__list__enter__message"},"Enter a search term to view recipes..."),e.CurrentRecipeList.length>0&&e.CurrentRecipeList.map(function(e){return r.a.createElement("div",{className:"recipe__list__map__through",key:e.question_id},r.a.createElement("div",null,r.a.createElement("li",{className:"recipe__list__title"},e.title.length>22?e.title.slice(0,22)+"...":e.title)),r.a.createElement("div",null,r.a.createElement("img",{className:"recipe__list__img",src:e.image_url,alt:e.title+" img"})),r.a.createElement("div",null,r.a.createElement("p",{className:"recipe__list__rank"},"Recipe Rank: ",Math.floor(e.social_rank)," / 100")),r.a.createElement("div",null,r.a.createElement("button",{className:"recipe__list__buttons"},r.a.createElement(v.a,{className:"recipe__list__link",to:{pathname:"/recipe/".concat(e.recipe_id),state:{recipe:e.title}}},"View Recipe"))))})))},g=function(e){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:e.FetchRecipes,className:"form"},r.a.createElement("input",{type:"text",name:"recipe",placeholder:"Enter a search term..."}),r.a.createElement("button",{class:"form__button"},"Find Recipes")))},w=(a(28),function(e){function t(){var e,a;Object(_.a)(this,t);for(var c=arguments.length,r=new Array(c),n=0;n<c;n++)r[n]=arguments[n];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={currentRecipeList:[]},a.fetchRecipes=function(){var e=Object(m.a)(u.a.mark(function e(t){var c,r,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c=t.target.elements.recipe.value,"7ce87499e0323106b2d0ce31162933f5",e.next=5,fetch("https://www.food2fork.com/api/search?key=".concat("7ce87499e0323106b2d0ce31162933f5","&q=").concat(c,"&count=28"));case 5:return r=e.sent,e.next=8,r.json();case 8:n=e.sent,a.setState({currentRecipeList:n.recipes});case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(E.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"app__component"},r.a.createElement("h1",{className:"main__h1"},"Recipe Search"),r.a.createElement(g,{FetchRecipes:this.fetchRecipes})),r.a.createElement(b,{CurrentRecipeList:this.state.currentRecipeList}))}}]),t}(c.Component)),R=function(e){function t(){var e,a;Object(_.a)(this,t);for(var c=arguments.length,r=new Array(c),n=0;n<c;n++)r[n]=arguments[n];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={currentRecipe:[]},a.componentDidMount=Object(m.a)(u.a.mark(function e(){var t,c,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.location.state.recipe,"7ce87499e0323106b2d0ce31162933f5",e.next=4,fetch("https://www.food2fork.com/api/search?key=".concat("7ce87499e0323106b2d0ce31162933f5","&q=").concat(t));case 4:return c=e.sent,e.next=7,c.json();case 7:r=e.sent,a.setState({currentRecipe:r.recipes[0]});case 9:case"end":return e.stop()}},e)})),a}return Object(E.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"recipe__page__div"},r.a.createElement("div",{className:"recipe__page__title"},this.state.currentRecipe.title),r.a.createElement("div",{className:"recipe__page__publisher"},"Published by ",this.state.currentRecipe.publisher),r.a.createElement("div",{className:"recipe__page__image__url"},r.a.createElement("img",{src:this.state.currentRecipe.image_url,alt:this.state.currentRecipe.title})),r.a.createElement("div",{className:"recipe__page__rank"},"Recipe Rank: ",this.state.currentRecipe.social_rank),r.a.createElement("div",{className:"recipe__page__source__url"},r.a.createElement("a",{href:this.state.currentRecipe.source_url},"Click here to learn more about this recipe")))}}]),t}(c.Component),k=function(){return r.a.createElement(s.a,{basename:"/recipe-app"},r.a.createElement(l.a,null,r.a.createElement(o.a,{path:"/",component:w,exact:!0}),r.a.createElement(o.a,{path:"/recipe/:id",component:R})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.e9914277.chunk.js.map