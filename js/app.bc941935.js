(function(e){function n(n){for(var i,a,r=n[0],c=n[1],u=n[2],d=0,f=[];d<r.length;d++)a=r[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&f.push(s[a][0]),s[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);l&&l(n);while(f.length)f.shift()();return o.push.apply(o,u||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],i=!0,r=1;r<t.length;r++){var c=t[r];0!==s[c]&&(i=!1)}i&&(o.splice(n--,1),e=a(a.s=t[0]))}return e}var i={},s={app:0},o=[];function a(n){if(i[n])return i[n].exports;var t=i[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=i,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)a.d(t,i,function(n){return e[n]}.bind(null,i));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=n,r=r.slice();for(var u=0;u<r.length;u++)n(r[u]);var l=c;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},1567:function(e,n,t){},"336a":function(e,n,t){"use strict";t("1567")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var i=t("7a23");function s(e,n,t,s,o,a){var r=Object(i["h"])("Generator");return Object(i["f"])(),Object(i["c"])(r)}var o={class:"container"},a={class:"col-md-6"},r=Object(i["e"])("label",{for:"inputSubject",class:"form-label"},"Subject",-1),c=["value"],u={class:"col-md-6"},l=Object(i["e"])("label",{for:"inputLevel",class:"form-label"},"Level",-1),d=["value"],f={class:"mb-3"},p={for:"exampleFormControlTextarea1",class:"form-label"},b=Object(i["e"])("div",{class:"col-12"},[Object(i["e"])("button",{class:"btn btn-primary"},"Generate")],-1);function g(e,n,t,s,g,m){return Object(i["f"])(),Object(i["d"])("div",o,[Object(i["e"])("form",{onSubmit:n[5]||(n[5]=Object(i["m"])((function(){return m.generateReport&&m.generateReport.apply(m,arguments)}),["prevent"])),class:"row g-3"},[Object(i["e"])("div",a,[r,Object(i["l"])(Object(i["e"])("select",{"onUpdate:modelValue":n[0]||(n[0]=function(e){return g.subject=e}),onChange:n[1]||(n[1]=function(){return m.generateReport&&m.generateReport.apply(m,arguments)}),id:"inputSubject",class:"form-select"},[(Object(i["f"])(!0),Object(i["d"])(i["a"],null,Object(i["g"])(g.subjectOptions,(function(e){return Object(i["f"])(),Object(i["d"])("option",{value:e,key:e},Object(i["i"])(e),9,c)})),128))],544),[[i["j"],g.subject]])]),Object(i["e"])("div",u,[l,Object(i["l"])(Object(i["e"])("select",{"onUpdate:modelValue":n[2]||(n[2]=function(e){return g.level=e}),onChange:n[3]||(n[3]=function(){return m.generateReport&&m.generateReport.apply(m,arguments)}),id:"inputLevel",class:"form-select"},[(Object(i["f"])(!0),Object(i["d"])(i["a"],null,Object(i["g"])(g.levelOptions,(function(e){return Object(i["f"])(),Object(i["d"])("option",{value:e,key:e},Object(i["i"])(e),9,d)})),128))],544),[[i["j"],g.level]])]),Object(i["e"])("div",f,[Object(i["e"])("label",p,"Report for "+Object(i["i"])(g.subject)+" - "+Object(i["i"])(g.level),1),Object(i["l"])(Object(i["e"])("textarea",{class:"form-control",id:"exampleFormControlTextarea1",rows:"3","onUpdate:modelValue":n[4]||(n[4]=function(e){return g.report=e})},null,512),[[i["k"],g.report]])]),b],32)])}t("d3b7"),t("159b"),t("07ac");var m=t("a9ca"),h={name:"Generator",props:{msg:String},data:function(){return{subjectOptions:["Business","Math"],levelOptions:["Remedial Level (Below Expectations)","Level 1","Level 2","Level 3","Level 4"],level:"",subject:"",report:""}},methods:{generateReport:function(){if(this.subject&&this.level){var e=m[this.subject][this.level],n="";Object.values(e).forEach((function(e){n+=e[Math.floor(Math.random()*e.length)]+" "})),this.report=n}else this.report=""}}},y=t("d959"),v=t.n(y);const S=v()(h,[["render",g]]);var w=S,j={name:"App",components:{Generator:w}};t("336a");const O=v()(j,[["render",s]]);var k=O;t("2dd8"),t("f9e3");Object(i["b"])(k).mount("#app")},a9ca:function(e){e.exports=JSON.parse('{"Business":{"Remedial Level (Below Expectations)":{"STR":["Student has not sufficiently demonstrated understanding of marketing, ethics, and social responsibility in business studies.","Student has not sufficiently demonstrated understanding of accounting, ethics, and social responsibility in business studies.","Student has not sufficiently shown understanding of information technology, ethics, and social responsibility in business.","Student has not sufficiently analyzed innovation, ethics, and social responsibility in entrepreneurship.","Student has not sufficiently demonstrated understanding of a country\'s ability to participate in international business.","Student has not sufficiently shown understanding of management\'s role in developing ethics and social responsibility.","Student has not sufficiently demonstrated understanding of business fundamentals and the functions of a business."],"IMP":["Student is encouraged to ask questions to clarify understanding of business concepts.","Student is encouraged to communicate business ideas.","Student is encouraged to begin improving problem-solving skills by adopting new strategies.","Student is encouraged to use innovative approaches to solve problems.","Student is encouraged to develop fundamental information technology skills to improve communication.","Student is encouraged to begin using appropriate software applications.","Student is encouraged to begin researching using print and web sources."],"NXT":["Student will benefit by beginning to use a variety of information technology application software.","Student will benefit by beginning to connect business ethics to current controversial business issues.","Student will benefit by beginning to select appropriate software applications to communicate business concepts.","Student will benefit from seeking assistance to understand business concepts, theories, and/or methodologies.","Student will benefit from identifying co-curricular opportunities to help develop enterprising skills.","Student will benefit from using financial statements to communicate principles and practices in accounting."]},"Level 1":{"STR":["Student shows limited understanding of the importance and role of marketing, ethics, and social responsibility in business.","Student shows limited understanding of the importance and role of accounting, ethics, and social responsibility in business.","Student shows limited understanding of the role of information technology, ethics, and social responsibility in business.","Student analyzes innovation, ethics, and social responsibility in entrepreneurship with limited effectiveness.","Student demonstrates limited understanding of a country\'s ability to participate in international business.","Student shows limited understanding of the role of management, ethics, and social responsibility within an organization.","Student demonstrates limited understanding of business fundamentals and the functions of a business."],"IMP":["Student is encouraged to ask questions to clarify understanding of business concepts.","Student is encouraged to communicate business ideas with more clarity.","Student is encouraged to improve problem-solving skills by adopting new strategies.","Student is encouraged to use innovative approaches to problem-solving.","Student is encouraged to develop necessary information technology skills to communicate with clarity.","Student is encouraged to use a variety of software applications to improve communication.","Student is encouraged to use print and web sources when researching."],"NXT":["Student will benefit from using a variety of information technology application software.","Student will benefit from identifying current controversial business issues.","Student will benefit from selecting appropriate software applications to communicate in business studies.","Student will benefit from reviewing business concepts, theories, and/or methodologies.","Student will benefit from identifying a variety of co-curricular opportunities to help develop enterprising skills.","Student will benefit from using the appropriate financial statements to communicate principles and practices in accounting."]},"Level 2":{"STR":["Student shows some understanding of the importance and role of marketing, ethics, and social responsibility in business.","Student shows some understanding of the importance and role of accounting, ethics, and social responsibility in business.","Student shows some understanding of information and communication technology, ethics, and social responsibility in business.","Student analyzes innovation, ethics, and social responsibility in entrepreneurship with some effectiveness.","Student shows some understanding of a country\'s ability to participate in international business.","Student demonstrates some understanding of the role of management, ethics, and social responsibility within an organization.","Student demonstrates some understanding of business fundamentals and the functions of a business."],"IMP":["Student is encouraged to ask clarifying questions to further understand business concepts.","Student is encouraged to communicate business ideas with more clarity and effectiveness.","Student is encouraged to improve problem-solving skills by adopting new strategies and sharing them with peers.","Student is encouraged to use a variety of innovative approaches to solve problems.","Student is encouraged to develop information technology skills to communicate with more clarity.","Student is encouraged to use a variety of software applications to communicate effectively.","Student is encouraged to use a variety of print and web sources when researching"],"NXT":["Student will benefit from using a variety of information technology application software effectively.","Student will benefit from connecting business ethics to current controversial business issues.","Student will benefit from selecting a variety of software applications to communicate in business studies.","Student will benefit from demonstrating an understanding of business concepts, theories, and/or methodologies.","Student will benefit from proposing co-curricular opportunities to help develop enterprising skills.","Student will benefit from accurately using financial statements to communicate principles and practices in accounting."]},"Level 3":{"STR":["Student shows considerable understanding of the role of marketing, ethics, and social responsibility in business.","Student shows considerable understanding of the role of accounting, ethics, and social responsibility in business.","Student shows considerable understanding of the role of information technology, ethics, and social responsibility in business.","Student analyzes innovation, ethics, and social responsibility in entrepreneurship with considerable effectiveness.","Student shows considerable understanding of a country\'s ability to participate in international business.","Student shows considerable understanding of management\'s role in developing ethics and social responsibility.","Student demonstrates considerable understanding of business fundamentals and the functions of a business."],"IMP":["Student is encouraged to ask detailed questions to ensure understanding of business concepts.","Student is encouraged to communicate business ideas with considerable effectiveness.","Student is encouraged to improve problem-solving skills by refining strategies and sharing them with peers.","Student is encouraged to use and share a variety of innovative approaches to solve problems.","Student is encouraged to develop more sophisticated information technology skills to communicate business concepts.","Student is encouraged to integrate a variety of software applications to communicate in business studies.","Student is encouraged to use primary and secondary print and web sources."],"NXT":["Student will benefit from using a variety of information technology application software more effectively.","Student will benefit from examining business ethics and making connections to current controversial business issues.","Student will benefit from integrating a variety of software applications to communicate in business studies.","Student will benefit from extending understanding of business concepts, theories, and/or methodologies.","Student will benefit from implementing co-curricular opportunities to help develop enterprising skills.","Student will benefit from consistently using appropriate financial statements to communicate principles/practices in accounting"]},"Level 4":{"STR":["Student shows thorough understanding of the role of marketing, ethics, and social responsibility in business.","Student shows thorough understanding of the role of accounting, ethics, and social responsibility in business.","Student shows thorough understanding of the role of information technology, ethics, and social responsibility in business.","Student thoroughly analyzes innovation, ethics, and social responsibility in entrepreneurship.","Student shows thorough understanding of a country\'s ability to participate in international business.","Student demonstrates thorough understanding of the role of management, ethics, and social responsibility within an organization.","Student demonstrates thorough understanding of business fundamentals and the functions of a business."],"IMP":["Student is encouraged to ask detailed questions to extend understanding of business concepts.","Student is encouraged to communicate business ideas with precision and effectiveness.","Student is encouraged to improve problem-solving skills by expanding his/her repertoire of strategies.","Student is encouraged to extend and share his/her innovative approaches to solving problems.","Student is encouraged to master information technology skills to further enhance communication.","Student is encouraged to master the integration of software applications.","Student is encouraged to extend research by using a variety of primary and secondary print and web sources."],"NXT":["Student will benefit from using a variety of information technology application software more efficiently and effectively.","Student will benefit from examining and discussing business ethics in current controversial business issues.","Student will benefit from extending appropriate software applications beyond the course.","Student will benefit from applying business concepts, theories, and/or methodologies to other contexts.","Student will benefit from organizing a co-curricular event to consolidate enterprising skills.","Next steps include continuing to use appropriate financial statements to communicate principles/practices in accounting."]}}}')}});
//# sourceMappingURL=app.bc941935.js.map