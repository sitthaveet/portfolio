(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{13:function(t,e,i){},14:function(t,e,i){"use strict";i.r(e);var n=i(1),c=i(7),a=i.n(c),o=i(2),r=i(3),s=i(5),l=i(4),p=[{id:1,title:"Savok",description:"I partially contributed to Savok website, developed with Vue JS",link:"https://savok.co",image:i.p+"static/media/project1.f21cb82c.jpg"},{id:2,title:"Jesus Chatbot",description:"A Jesus chatbot developed with Dialogflow.",link:"https://lin.ee/yoY5xak",image:i.p+"static/media/project2.145623d2.jpg"},{id:3,title:"Dirty Hopping",description:"A react website to randomize your next dirty hopping.",link:"https://sitthaveet.github.io/dirtyhopping/",image:i.p+"static/media/project3.e1ade52f.jpg"}],j=i(0),d=function(t){Object(s.a)(i,t);var e=Object(l.a)(i);function i(){return Object(o.a)(this,i),e.apply(this,arguments)}return Object(r.a)(i,[{key:"render",value:function(){console.log("this.props",this.props);var t=this.props.project,e=t.title,i=t.image,n=t.description,c=t.link;return Object(j.jsxs)("div",{style:{display:"inline-block",width:300,margin:10},children:[Object(j.jsx)("h3",{children:e}),Object(j.jsx)("img",{src:i,alt:"profile",style:{width:200,height:120}}),Object(j.jsx)("p",{children:n}),Object(j.jsx)("a",{href:c,children:"Check it out"})]})}}]),i}(n.Component),h=function(t){Object(s.a)(i,t);var e=Object(l.a)(i);function i(){return Object(o.a)(this,i),e.apply(this,arguments)}return Object(r.a)(i,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Projects"}),Object(j.jsx)("div",{children:p.map((function(t){return Object(j.jsx)(d,{project:t},t.id)}))})]})}}]),i}(n.Component),u=[{id:1,link:"mailto:sitthavee.t@gmail.com",image:i.p+"static/media/email_icon.160a6010.png"},{id:2,link:"https://www.linkedin.com/in/sitthaveet/",image:i.p+"static/media/linkedin_icon.27cd6ff7.png"},{id:3,link:"https://twitter.com/sitthaveet",image:i.p+"static/media/twitter_icon.877261bf.png"},{id:4,link:"https://github.com/sitthaveet",image:i.p+"static/media/github_icon.ccc9e199.png"}],b=function(t){Object(s.a)(i,t);var e=Object(l.a)(i);function i(){return Object(o.a)(this,i),e.apply(this,arguments)}return Object(r.a)(i,[{key:"render",value:function(){var t=this.props.socialProfile,e=t.image,i=t.link;return Object(j.jsx)("div",{style:{display:"inline-block",width:50,margin:5},children:Object(j.jsx)("a",{href:i,children:Object(j.jsx)("img",{src:e,alt:"social media",style:{width:35,height:35}})})})}}]),i}(n.Component),O=function(t){Object(s.a)(i,t);var e=Object(l.a)(i);function i(){return Object(o.a)(this,i),e.apply(this,arguments)}return Object(r.a)(i,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Connect with me at"}),Object(j.jsx)("div",{children:u.map((function(t){return Object(j.jsx)(b,{socialProfile:t},t.id)}))})]})}}]),i}(n.Component),m=i.p+"static/media/profile.336049a0.png",v=["a software engineer","a music lover","a Christ follower","an adventure seeker"],f=function(t){Object(s.a)(i,t);var e=Object(l.a)(i);function i(){var t;Object(o.a)(this,i);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={titleIndex:0},t.animateTitles=function(){t.titleInterval=setInterval((function(){var e=(t.state.titleIndex+1)%v.length;t.setState({titleIndex:e})}),4e3),console.log("this is this.titleInterval",t.titleInterval)},t}return Object(r.a)(i,[{key:"componentDidMount",value:function(){console.log("Title component has mounted"),this.animateTitles()}},{key:"componentWillUnmount",value:function(){console.log("Title component will unmount!"),clearInterval(this.titleInterval)}},{key:"render",value:function(){var t=v[this.state.titleIndex];return Object(j.jsxs)("p",{children:["I am ",t]})}}]),i}(n.Component),g=function(t){Object(s.a)(i,t);var e=Object(l.a)(i);function i(){var t;Object(o.a)(this,i);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={displayBio:!1},t.toggleDisplayBio=function(){t.setState({displayBio:!t.state.displayBio})},t}return Object(r.a)(i,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:m,alt:"profile",className:"profile"}),Object(j.jsx)("h1",{children:"Sawaddee!"}),Object(j.jsx)("p",{children:"My name is Son."}),this.state.displayBio?Object(j.jsx)(f,{}):null,this.state.displayBio?Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"I know you would click it :p"}),Object(j.jsx)("button",{onClick:this.toggleDisplayBio,children:"Show Less"})]}):Object(j.jsx)("div",{children:Object(j.jsx)("button",{onClick:this.toggleDisplayBio,children:"Read More"})}),Object(j.jsx)("hr",{}),Object(j.jsx)(h,{}),Object(j.jsx)("hr",{}),Object(j.jsx)(O,{})]})}}]),i}(n.Component);i(13);a.a.render(Object(j.jsx)(g,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.b0b27485.chunk.js.map