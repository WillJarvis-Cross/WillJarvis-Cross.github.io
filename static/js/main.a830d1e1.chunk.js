(this.webpackJsonpreactniceresume=this.webpackJsonpreactniceresume||[]).push([[0],{22:function(e,t,s){},25:function(e,t,s){},36:function(e,t,s){"use strict";s.r(t);var a=s(2),c=s(15),i=s.n(c),r=(s(22),s(6)),n=s(7),l=s(9),o=s(8),j=s(13),d=s(16),h=s.n(d),b=(s(25),s(17)),m=s(4),u=s.n(m),O=s(1),p=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(n.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.linkedin,t=this.props.data.github,s=this.props.data.name,a=this.props.data.description;return Object(O.jsxs)("header",{id:"home",children:[Object(O.jsx)(b.a,{color:"#ffffff",type:"cobweb",bg:!0}),Object(O.jsxs)("nav",{id:"nav-wrap",children:[Object(O.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(O.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(O.jsxs)("ul",{id:"nav",className:"nav",children:[Object(O.jsx)("li",{className:"current",children:Object(O.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Projects"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(O.jsx)("div",{className:"row banner",children:Object(O.jsxs)("div",{className:"banner-text",children:[Object(O.jsx)(u.a,{bottom:!0,children:Object(O.jsx)("h1",{className:"responsive-headline",children:s})}),Object(O.jsx)(u.a,{bottom:!0,duration:1200,children:Object(O.jsxs)("h3",{children:[a,"."]})}),Object(O.jsx)("hr",{}),Object(O.jsx)(u.a,{bottom:!0,duration:2e3,children:Object(O.jsxs)("ul",{className:"social",children:[Object(O.jsxs)("a",{href:e,rel:"noreferrer",target:"_blank",className:"button btn project-btn",children:[Object(O.jsx)("i",{className:"fa fa-linkedin-square"}),"LinkedIn"]}),Object(O.jsxs)("a",{href:t,rel:"noreferrer",target:"_blank",className:"button btn github-btn",children:[Object(O.jsx)("i",{className:"fa fa-github"}),"Github"]})]})})]})}),Object(O.jsx)("p",{className:"scrolldown",children:Object(O.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(O.jsx)("i",{className:"icon-down-circle"})})})]})}}]),s}(a.Component),x=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(n.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.social.map((function(e){return Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:e.url,children:Object(O.jsx)("i",{className:e.className})})},e.name)}));return Object(O.jsx)("footer",{children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)(u.a,{bottom:!0,children:Object(O.jsx)("div",{className:"twelve columns",children:Object(O.jsx)("ul",{className:"social-links",children:e})})}),Object(O.jsx)("div",{id:"go-top",children:Object(O.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(O.jsx)("i",{className:"icon-up-open"})})})]})})}}]),s}(a.Component),f=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(n.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,t="images/"+this.props.data.image,s=Object(O.jsxs)("p",{children:["Hi! I am a fourth year undergraduate student at the University of Toronto, and I am completing a double major in ",Object(O.jsx)("em",{children:"computer science"})," and ",Object(O.jsx)("em",{children:"astronomy and astrophysics"})," as well as a minor in ",Object(O.jsx)("em",{children:"mathematics"}),". Currently I work for Super (previously Snapcommerce), a commerce company dedicated to cater towards those left behind by credit companies. Outside of my studies, I enjoy learning about the intricacies of our Universe and staying physically active by playing various sports with friends."]}),a=this.props.data.address.city,c=this.props.data.address.province,i=this.props.data.phone,r=this.props.data.email;return Object(O.jsx)("section",{id:"about",children:Object(O.jsx)(u.a,{duration:1e3,children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"three columns",children:Object(O.jsx)("img",{className:"profile-pic",src:t,alt:"Profile Pic"})}),Object(O.jsxs)("div",{className:"nine columns main-col",children:[Object(O.jsx)("h2",{children:"About Me"}),Object(O.jsx)("p",{children:s}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsxs)("div",{className:"columns contact-details",children:[Object(O.jsx)("h2",{children:"Contact Details"}),Object(O.jsxs)("p",{className:"address",children:[Object(O.jsx)("span",{children:e}),Object(O.jsx)("br",{}),Object(O.jsxs)("span",{children:[a,", ",c]}),Object(O.jsx)("br",{}),Object(O.jsx)("span",{children:i}),Object(O.jsx)("br",{}),Object(O.jsx)("span",{children:r})]})]}),Object(O.jsx)("div",{className:"columns download",children:Object(O.jsx)("p",{children:Object(O.jsxs)("a",{href:"Resume.pdf",target:"_blank",className:"button",children:[Object(O.jsx)("i",{className:"fa fa-book"}),"Resume"]})})})]})]})]})})})}}]),s}(a.Component),v=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(n.a)(s,[{key:"getRandomColor",value:function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"render",value:function(){var e=this;if(!this.props.data)return null;var t=this.props.data.education.map((function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:e.school}),Object(O.jsxs)("p",{className:"info",children:[e.degree," ",Object(O.jsx)("span",{children:"\u2022"}),Object(O.jsx)("em",{className:"date",children:e.graduated})]}),Object(O.jsx)("p",{children:e.description})]},e.school)})),s=this.props.data.work.map((function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:Object(O.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",color:"#000000",children:Object(O.jsx)("u",{children:e.company})})}),Object(O.jsxs)("p",{className:"info",children:[e.title,Object(O.jsx)("span",{children:"\u2022"})," ",Object(O.jsx)("em",{className:"date",children:e.years})]}),Object(O.jsx)("p",{children:e.description})]},e.company)})),a=this.props.data.skills.map((function(t){var s=e.getRandomColor(),a="bar-expand "+t.name.toLowerCase(),c=t.level;return Object(O.jsxs)("li",{children:[Object(O.jsx)("span",{style:{width:c,backgroundColor:s},className:a}),Object(O.jsx)("em",{children:t.name})]},t.name)}));return Object(O.jsxs)("section",{id:"resume",children:[Object(O.jsx)(u.a,{left:!0,duration:1300,children:Object(O.jsxs)("div",{className:"row education",children:[Object(O.jsx)("div",{className:"three columns header-col",children:Object(O.jsx)("h1",{children:Object(O.jsx)("span",{children:"Education"})})}),Object(O.jsx)("div",{className:"nine columns main-col",children:Object(O.jsx)("div",{className:"row item",children:Object(O.jsx)("div",{className:"twelve columns",children:t})})})]})}),Object(O.jsx)(u.a,{left:!0,duration:1300,children:Object(O.jsxs)("div",{className:"row work",children:[Object(O.jsx)("div",{className:"three columns header-col",children:Object(O.jsx)("h1",{children:Object(O.jsx)("span",{children:"Work"})})}),Object(O.jsx)("div",{className:"nine columns main-col",children:s})]})}),Object(O.jsx)(u.a,{left:!0,duration:1300,children:Object(O.jsxs)("div",{className:"row skill",children:[Object(O.jsx)("div",{className:"three columns header-col",children:Object(O.jsx)("h1",{children:Object(O.jsx)("span",{children:"Skills"})})}),Object(O.jsx)("div",{className:"nine columns main-col",children:Object(O.jsx)("div",{className:"bars",children:Object(O.jsx)("ul",{className:"skills",children:a})})})]})})]})}}]),s}(a.Component),g=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(n.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;this.props.data.name,this.props.data.address.city,this.props.data.phone;return Object(O.jsxs)("section",{id:"contact",children:[Object(O.jsx)(m.Fade,{bottom:!0,duration:1e3,children:Object(O.jsxs)("div",{className:"row section-head",children:[Object(O.jsx)("div",{className:"two columns header-col",children:Object(O.jsx)("h1",{children:Object(O.jsx)("span",{children:"Get In Touch."})})}),Object(O.jsx)("div",{className:"ten columns",children:Object(O.jsxs)("p",{className:"lead",children:["Please feel free to contact me through ",Object(O.jsx)("a",{href:"https://www.linkedin.com/in/williamjarviscross-1378361b6/",target:"_blank",rel:"noreferrer",children:"LinkedIn"})," or email at ",Object(O.jsx)("a",{href:"mailto:wjarviscross@gmail.com",children:"wjarviscross@gmail.com"})]})})]})}),!1]})}}]),s}(a.Component),N=0,w=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).state={isOpen:!1,currImg:0},a}return Object(n.a)(s,[{key:"render",value:function(){var e=this;if(!this.props.data)return null;var t=this.props.data.projects;return console.log(t[this.state.currImg].image),Object(O.jsxs)("section",{id:"portfolio",children:[this.state.isOpen&&Object(O.jsxs)("div",{className:"popup-modal",onClick:function(){e.setState({isOpen:!1,currImg:0})},children:[Object(O.jsx)("i",{className:"fa fa-4x pull-right close fa-times"}),Object(O.jsxs)("div",{class:"box-layout",children:[Object(O.jsx)("div",{class:"dimension-label","aria-live":"polite","aria-label":"Current box width",children:Object(O.jsx)("span",{"data-element":"width-label"})}),Object(O.jsx)("div",{}),Object(O.jsxs)("figure",{class:"box-demo box","data-element":"parent-box",children:[0===this.state.currImg?Object(O.jsx)("iframe",{class:"youtubeLink",src:"https://www.youtube.com/embed/m7pxE1DswGo",title:"Pokemon Game Demo",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}):Object(O.jsx)("img",{src:"./images/portfolio/"+t[this.state.currImg].image,alt:t[this.state.currImg].title}),Object(O.jsx)("figcaption",{contenteditable:!0,children:t[this.state.currImg].description}),Object(O.jsxs)("a",{href:t[this.state.currImg].github,rel:"noreferrer",target:"_blank",children:[Object(O.jsx)("i",{className:"fa fa-3x fa-github"})," Check it out!"]})]}),Object(O.jsx)("div",{class:"dimension-label","aria-live":"polite","aria-label":"Current box height","data-orientation":"vertical",children:Object(O.jsx)("span",{"data-element":"height-label"})})]})]}),Object(O.jsx)(u.a,{left:!0,duration:1e3,distance:"40px",children:Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"twelve columns collapsed",children:[Object(O.jsx)("h1",{children:"Check Out Some of My Favourite Projects."}),Object(O.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-halves s-bgrid-thirds cf",children:t.map((function(t,s){return Object(O.jsx)("div",{className:"columns portfolio-item",children:Object(O.jsxs)("div",{className:"item-wrap",children:[Object(O.jsx)("img",{src:"./images/portfolio/"+t.image,alt:t.title,onClick:function(){window.screen.width>=1280&&e.setState({isOpen:!0,currImg:s})}}),Object(O.jsx)("div",{style:{textAlign:"center"},children:t.title})]})},N++)}))})]})})})]})}}]),s}(a.Component),y=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).state={foo:"bar",resumeData:{}},j.a.initialize("UA-110570651-1"),j.a.pageview(window.location.pathname),a}return Object(n.a)(s,[{key:"getResumeData",value:function(){h.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,s){console.log(s),alert(s)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(p,{data:this.state.resumeData.main}),Object(O.jsx)(f,{data:this.state.resumeData.main}),Object(O.jsx)(v,{data:this.state.resumeData.resume}),Object(O.jsx)(w,{data:this.state.resumeData.portfolio}),Object(O.jsx)(g,{data:this.state.resumeData.main}),Object(O.jsx)(x,{data:this.state.resumeData.main})]})}}]),s}(a.Component),k=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,37)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;s(e),a(e),c(e),i(e),r(e)}))};i.a.render(Object(O.jsx)(y,{}),document.getElementById("root")),k()}},[[36,1,2]]]);
//# sourceMappingURL=main.a830d1e1.chunk.js.map