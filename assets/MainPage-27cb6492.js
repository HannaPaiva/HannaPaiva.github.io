import{_ as p,o as n,c as a,a as f,r as d,b as o,w as r,d as t,p as h,e as v,f as $}from"./index-7cb77124.js";const x={name:"SpinLoader",props:{on:Boolean}},S={class:"place-center"},b={key:0,class:"spinner-1"};function k(e,i,s,l,_,u){return n(),a("div",S,[s.on?(n(),a("div",b)):f("",!0)])}const y=p(x,[["render",k],["__scopeId","data-v-5bdc2b1e"]]);const I={name:"App",components:{SpinLoader:y},data(){return{load:!0}}},L=e=>(h("data-v-6e282e92"),e=e(),v(),e),g=L(()=>$("h1",null,"this is Home",-1));function B(e,i,s,l,_,u){const m=d("SpinLoader"),c=d("router-link");return n(),a("div",null,[o(m,{on:_.load},null,8,["on"]),g,o(c,{to:"/home"},{default:r(()=>[t("Home")]),_:1}),t(" | "),o(c,{to:"/about"},{default:r(()=>[t("About")]),_:1})])}const V=p(I,[["render",B],["__scopeId","data-v-6e282e92"]]);export{V as default};
