(function(B,a){typeof exports=="object"&&typeof module<"u"?a(exports,require("vue"),require("@vueuse/core")):typeof define=="function"&&define.amd?define(["exports","vue","@vueuse/core"],a):(B=typeof globalThis<"u"?globalThis:B||self,a(B["vue-d3-network-graph"]={},B.Vue,B.VueUseCore))})(this,function(B,a,G){"use strict";const F=e=>!!e&&typeof e!="number"&&typeof e!="string";function Ie(e,n){const r=a.ref(void 0),t=a.reactive({x:0,y:0}),i=u=>{let d,m=0;return u instanceof MouseEvent?(d=u.clientX,m=u.clientY):u instanceof TouchEvent&&(d=u.touches[0].clientX,m=u.touches[0].clientY),{x:d||0,y:m||0}},l=(u,d)=>n.value?(()=>{r.value=d,f(u,e.value.nodes()[d])})():void 0,f=(u,d)=>{let m=0,g=0;if(u&&d&&(d!=null&&d.x)&&(d!=null&&d.y)){const w=i(u);m=w.x?w.x-d.x:d.x,g=w.y?w.y-d.y:d.y}t.x=m,t.y=g},s=()=>{if(r.value!==void 0){const u=e.value.nodes()[r.value];u.fx=null,u.fy=null,x()}},x=()=>{r.value=void 0,e.value.alpha(.1),e.value.restart(),f()};return{dragStart:l,dragEnd:s,move:u=>{const d=i(u);r.value!=null&&e.value.nodes()[r.value]&&(e.value.restart(),e.value.alpha(.5),e.value.nodes()[r.value].fx=d.x-t.x,e.value.nodes()[r.value].fy=d.y-t.y)}}}const J="arrow-start",q="arrow-end";function Pe(e,n,r){const t=f=>r.value&&f.twoWay?`url(#${J})`:void 0,i=f=>r.value?`url(#${q})`:void 0,l=a.computed(()=>({arrowStart:{id:J,refX:-(n.value/2-e.value),refY:0,viewBox:`0 -${5*e.value} ${10*e.value} ${10*e.value}`,orient:"auto",markerWidth:10+e.value,markerHeight:10+e.value,"stroke-width":"1","marker-units":"userSpaceOnUse"},arrowEnd:{id:q,refX:n.value/2+(10-e.value),refY:0,viewBox:`0 -${5*e.value} ${10*e.value} ${10*e.value}`,orient:"auto",markerWidth:10+e.value,markerHeight:10+e.value,"marker-units":"userSpaceOnUse"}}));return{getMarkerEnd:i,getMarkerStart:t,markers:l}}function Ye(e){const n=+this._x.call(null,e),r=+this._y.call(null,e);return ee(this.cover(n,r),n,r,e)}function ee(e,n,r,t){if(isNaN(n)||isNaN(r))return e;var i,l=e._root,f={data:t},s=e._x0,x=e._y0,o=e._x1,u=e._y1,d,m,g,w,y,h,v,_;if(!l)return e._root=f,e;for(;l.length;)if((y=n>=(d=(s+o)/2))?s=d:o=d,(h=r>=(m=(x+u)/2))?x=m:u=m,i=l,!(l=l[v=h<<1|y]))return i[v]=f,e;if(g=+e._x.call(null,l.data),w=+e._y.call(null,l.data),n===g&&r===w)return f.next=l,i?i[v]=f:e._root=f,e;do i=i?i[v]=new Array(4):e._root=new Array(4),(y=n>=(d=(s+o)/2))?s=d:o=d,(h=r>=(m=(x+u)/2))?x=m:u=m;while((v=h<<1|y)===(_=(w>=m)<<1|g>=d));return i[_]=l,i[v]=f,e}function Xe(e){var n,r,t=e.length,i,l,f=new Array(t),s=new Array(t),x=1/0,o=1/0,u=-1/0,d=-1/0;for(r=0;r<t;++r)isNaN(i=+this._x.call(null,n=e[r]))||isNaN(l=+this._y.call(null,n))||(f[r]=i,s[r]=l,i<x&&(x=i),i>u&&(u=i),l<o&&(o=l),l>d&&(d=l));if(x>u||o>d)return this;for(this.cover(x,o).cover(u,d),r=0;r<t;++r)ee(this,f[r],s[r],e[r]);return this}function We(e,n){if(isNaN(e=+e)||isNaN(n=+n))return this;var r=this._x0,t=this._y0,i=this._x1,l=this._y1;if(isNaN(r))i=(r=Math.floor(e))+1,l=(t=Math.floor(n))+1;else{for(var f=i-r||1,s=this._root,x,o;r>e||e>=i||t>n||n>=l;)switch(o=(n<t)<<1|e<r,x=new Array(4),x[o]=s,s=x,f*=2,o){case 0:i=r+f,l=t+f;break;case 1:r=i-f,l=t+f;break;case 2:i=r+f,t=l-f;break;case 3:r=i-f,t=l-f;break}this._root&&this._root.length&&(this._root=s)}return this._x0=r,this._y0=t,this._x1=i,this._y1=l,this}function Ve(){var e=[];return this.visit(function(n){if(!n.length)do e.push(n.data);while(n=n.next)}),e}function He(e){return arguments.length?this.cover(+e[0][0],+e[0][1]).cover(+e[1][0],+e[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function S(e,n,r,t,i){this.node=e,this.x0=n,this.y0=r,this.x1=t,this.y1=i}function Ue(e,n,r){var t,i=this._x0,l=this._y0,f,s,x,o,u=this._x1,d=this._y1,m=[],g=this._root,w,y;for(g&&m.push(new S(g,i,l,u,d)),r==null?r=1/0:(i=e-r,l=n-r,u=e+r,d=n+r,r*=r);w=m.pop();)if(!(!(g=w.node)||(f=w.x0)>u||(s=w.y0)>d||(x=w.x1)<i||(o=w.y1)<l))if(g.length){var h=(f+x)/2,v=(s+o)/2;m.push(new S(g[3],h,v,x,o),new S(g[2],f,v,h,o),new S(g[1],h,s,x,v),new S(g[0],f,s,h,v)),(y=(n>=v)<<1|e>=h)&&(w=m[m.length-1],m[m.length-1]=m[m.length-1-y],m[m.length-1-y]=w)}else{var _=e-+this._x.call(null,g.data),p=n-+this._y.call(null,g.data),c=_*_+p*p;if(c<r){var N=Math.sqrt(r=c);i=e-N,l=n-N,u=e+N,d=n+N,t=g.data}}return t}function je(e){if(isNaN(u=+this._x.call(null,e))||isNaN(d=+this._y.call(null,e)))return this;var n,r=this._root,t,i,l,f=this._x0,s=this._y0,x=this._x1,o=this._y1,u,d,m,g,w,y,h,v;if(!r)return this;if(r.length)for(;;){if((w=u>=(m=(f+x)/2))?f=m:x=m,(y=d>=(g=(s+o)/2))?s=g:o=g,n=r,!(r=r[h=y<<1|w]))return this;if(!r.length)break;(n[h+1&3]||n[h+2&3]||n[h+3&3])&&(t=n,v=h)}for(;r.data!==e;)if(i=r,!(r=r.next))return this;return(l=r.next)&&delete r.next,i?(l?i.next=l:delete i.next,this):n?(l?n[h]=l:delete n[h],(r=n[0]||n[1]||n[2]||n[3])&&r===(n[3]||n[2]||n[1]||n[0])&&!r.length&&(t?t[v]=r:this._root=r),this):(this._root=l,this)}function Ge(e){for(var n=0,r=e.length;n<r;++n)this.remove(e[n]);return this}function Oe(){return this._root}function Ke(){var e=0;return this.visit(function(n){if(!n.length)do++e;while(n=n.next)}),e}function Qe(e){var n=[],r,t=this._root,i,l,f,s,x;for(t&&n.push(new S(t,this._x0,this._y0,this._x1,this._y1));r=n.pop();)if(!e(t=r.node,l=r.x0,f=r.y0,s=r.x1,x=r.y1)&&t.length){var o=(l+s)/2,u=(f+x)/2;(i=t[3])&&n.push(new S(i,o,u,s,x)),(i=t[2])&&n.push(new S(i,l,u,o,x)),(i=t[1])&&n.push(new S(i,o,f,s,u)),(i=t[0])&&n.push(new S(i,l,f,o,u))}return this}function Ze(e){var n=[],r=[],t;for(this._root&&n.push(new S(this._root,this._x0,this._y0,this._x1,this._y1));t=n.pop();){var i=t.node;if(i.length){var l,f=t.x0,s=t.y0,x=t.x1,o=t.y1,u=(f+x)/2,d=(s+o)/2;(l=i[0])&&n.push(new S(l,f,s,u,d)),(l=i[1])&&n.push(new S(l,u,s,x,d)),(l=i[2])&&n.push(new S(l,f,d,u,o)),(l=i[3])&&n.push(new S(l,u,d,x,o))}r.push(t)}for(;t=r.pop();)e(t.node,t.x0,t.y0,t.x1,t.y1);return this}function Je(e){return e[0]}function qe(e){return arguments.length?(this._x=e,this):this._x}function et(e){return e[1]}function tt(e){return arguments.length?(this._y=e,this):this._y}function O(e,n,r){var t=new K(n??Je,r??et,NaN,NaN,NaN,NaN);return e==null?t:t.addAll(e)}function K(e,n,r,t,i,l){this._x=e,this._y=n,this._x0=r,this._y0=t,this._x1=i,this._y1=l,this._root=void 0}function te(e){for(var n={data:e.data},r=n;e=e.next;)r=r.next={data:e.data};return n}var R=O.prototype=K.prototype;R.copy=function(){var e=new K(this._x,this._y,this._x0,this._y0,this._x1,this._y1),n=this._root,r,t;if(!n)return e;if(!n.length)return e._root=te(n),e;for(r=[{source:n,target:e._root=new Array(4)}];n=r.pop();)for(var i=0;i<4;++i)(t=n.source[i])&&(t.length?r.push({source:t,target:n.target[i]=new Array(4)}):n.target[i]=te(t));return e},R.add=Ye,R.addAll=Xe,R.cover=We,R.data=Ve,R.extent=He,R.find=Ue,R.remove=je,R.removeAll=Ge,R.root=Oe,R.size=Ke,R.visit=Qe,R.visitAfter=Ze,R.x=qe,R.y=tt;function b(e){return function(){return e}}function L(e){return(e()-.5)*1e-6}function nt(e){return e.x+e.vx}function rt(e){return e.y+e.vy}function it(e){var n,r,t,i=1,l=1;typeof e!="function"&&(e=b(e==null?1:+e));function f(){for(var o,u=n.length,d,m,g,w,y,h,v=0;v<l;++v)for(d=O(n,nt,rt).visitAfter(s),o=0;o<u;++o)m=n[o],y=r[m.index],h=y*y,g=m.x+m.vx,w=m.y+m.vy,d.visit(_);function _(p,c,N,k,A){var E=p.data,T=p.r,M=y+T;if(E){if(E.index>m.index){var z=g-E.x-E.vx,D=w-E.y-E.vy,C=z*z+D*D;C<M*M&&(z===0&&(z=L(t),C+=z*z),D===0&&(D=L(t),C+=D*D),C=(M-(C=Math.sqrt(C)))/C*i,m.vx+=(z*=C)*(M=(T*=T)/(h+T)),m.vy+=(D*=C)*M,E.vx-=z*(M=1-M),E.vy-=D*M)}return}return c>g+M||k<g-M||N>w+M||A<w-M}}function s(o){if(o.data)return o.r=r[o.data.index];for(var u=o.r=0;u<4;++u)o[u]&&o[u].r>o.r&&(o.r=o[u].r)}function x(){if(n){var o,u=n.length,d;for(r=new Array(u),o=0;o<u;++o)d=n[o],r[d.index]=+e(d,o,n)}}return f.initialize=function(o,u){n=o,t=u,x()},f.iterations=function(o){return arguments.length?(l=+o,f):l},f.strength=function(o){return arguments.length?(i=+o,f):i},f.radius=function(o){return arguments.length?(e=typeof o=="function"?o:b(+o),x(),f):e},f}function ot(e){return e.index}function ne(e,n){var r=e.get(n);if(!r)throw new Error("node not found: "+n);return r}function at(e){var n=ot,r=d,t,i=b(30),l,f,s,x,o,u=1;e==null&&(e=[]);function d(h){return 1/Math.min(s[h.source.index],s[h.target.index])}function m(h){for(var v=0,_=e.length;v<u;++v)for(var p=0,c,N,k,A,E,T,M;p<_;++p)c=e[p],N=c.source,k=c.target,A=k.x+k.vx-N.x-N.vx||L(o),E=k.y+k.vy-N.y-N.vy||L(o),T=Math.sqrt(A*A+E*E),T=(T-l[p])/T*h*t[p],A*=T,E*=T,k.vx-=A*(M=x[p]),k.vy-=E*M,N.vx+=A*(M=1-M),N.vy+=E*M}function g(){if(f){var h,v=f.length,_=e.length,p=new Map(f.map((N,k)=>[n(N,k,f),N])),c;for(h=0,s=new Array(v);h<_;++h)c=e[h],c.index=h,typeof c.source!="object"&&(c.source=ne(p,c.source)),typeof c.target!="object"&&(c.target=ne(p,c.target)),s[c.source.index]=(s[c.source.index]||0)+1,s[c.target.index]=(s[c.target.index]||0)+1;for(h=0,x=new Array(_);h<_;++h)c=e[h],x[h]=s[c.source.index]/(s[c.source.index]+s[c.target.index]);t=new Array(_),w(),l=new Array(_),y()}}function w(){if(f)for(var h=0,v=e.length;h<v;++h)t[h]=+r(e[h],h,e)}function y(){if(f)for(var h=0,v=e.length;h<v;++h)l[h]=+i(e[h],h,e)}return m.initialize=function(h,v){f=h,o=v,g()},m.links=function(h){return arguments.length?(e=h,g(),m):e},m.id=function(h){return arguments.length?(n=h,m):n},m.iterations=function(h){return arguments.length?(u=+h,m):u},m.strength=function(h){return arguments.length?(r=typeof h=="function"?h:b(+h),w(),m):r},m.distance=function(h){return arguments.length?(i=typeof h=="function"?h:b(+h),y(),m):i},m}var lt={value:()=>{}};function re(){for(var e=0,n=arguments.length,r={},t;e<n;++e){if(!(t=arguments[e]+"")||t in r||/[\s.]/.test(t))throw new Error("illegal type: "+t);r[t]=[]}return new V(r)}function V(e){this._=e}function st(e,n){return e.trim().split(/^|\s+/).map(function(r){var t="",i=r.indexOf(".");if(i>=0&&(t=r.slice(i+1),r=r.slice(0,i)),r&&!n.hasOwnProperty(r))throw new Error("unknown type: "+r);return{type:r,name:t}})}V.prototype=re.prototype={constructor:V,on:function(e,n){var r=this._,t=st(e+"",r),i,l=-1,f=t.length;if(arguments.length<2){for(;++l<f;)if((i=(e=t[l]).type)&&(i=ft(r[i],e.name)))return i;return}if(n!=null&&typeof n!="function")throw new Error("invalid callback: "+n);for(;++l<f;)if(i=(e=t[l]).type)r[i]=ie(r[i],e.name,n);else if(n==null)for(i in r)r[i]=ie(r[i],e.name,null);return this},copy:function(){var e={},n=this._;for(var r in n)e[r]=n[r].slice();return new V(e)},call:function(e,n){if((i=arguments.length-2)>0)for(var r=new Array(i),t=0,i,l;t<i;++t)r[t]=arguments[t+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(l=this._[e],t=0,i=l.length;t<i;++t)l[t].value.apply(n,r)},apply:function(e,n,r){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var t=this._[e],i=0,l=t.length;i<l;++i)t[i].value.apply(n,r)}};function ft(e,n){for(var r=0,t=e.length,i;r<t;++r)if((i=e[r]).name===n)return i.value}function ie(e,n,r){for(var t=0,i=e.length;t<i;++t)if(e[t].name===n){e[t]=lt,e=e.slice(0,t).concat(e.slice(t+1));break}return r!=null&&e.push({name:n,value:r}),e}var I=0,P=0,Y=0,oe=1e3,H,X,U=0,$=0,j=0,W=typeof performance=="object"&&performance.now?performance:Date,ae=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function le(){return $||(ae(ct),$=W.now()+j)}function ct(){$=0}function Q(){this._call=this._time=this._next=null}Q.prototype=se.prototype={constructor:Q,restart:function(e,n,r){if(typeof e!="function")throw new TypeError("callback is not a function");r=(r==null?le():+r)+(n==null?0:+n),!this._next&&X!==this&&(X?X._next=this:H=this,X=this),this._call=e,this._time=r,Z()},stop:function(){this._call&&(this._call=null,this._time=1/0,Z())}};function se(e,n,r){var t=new Q;return t.restart(e,n,r),t}function ut(){le(),++I;for(var e=H,n;e;)(n=$-e._time)>=0&&e._call.call(void 0,n),e=e._next;--I}function fe(){$=(U=W.now())+j,I=P=0;try{ut()}finally{I=0,gt(),$=0}}function ht(){var e=W.now(),n=e-U;n>oe&&(j-=n,U=e)}function gt(){for(var e,n=H,r,t=1/0;n;)n._call?(t>n._time&&(t=n._time),e=n,n=n._next):(r=n._next,n._next=null,n=e?e._next=r:H=r);X=e,Z(t)}function Z(e){if(!I){P&&(P=clearTimeout(P));var n=e-$;n>24?(e<1/0&&(P=setTimeout(fe,e-W.now()-j)),Y&&(Y=clearInterval(Y))):(Y||(U=W.now(),Y=setInterval(ht,oe)),I=1,ae(fe))}}const yt=1664525,dt=1013904223,ce=4294967296;function vt(){let e=1;return()=>(e=(yt*e+dt)%ce)/ce}function xt(e){return e.x}function _t(e){return e.y}var mt=10,wt=Math.PI*(3-Math.sqrt(5));function ue(e){var n,r=1,t=.001,i=1-Math.pow(t,1/300),l=0,f=.6,s=new Map,x=se(d),o=re("tick","end"),u=vt();e==null&&(e=[]);function d(){m(),o.call("tick",n),r<t&&(x.stop(),o.call("end",n))}function m(y){var h,v=e.length,_;y===void 0&&(y=1);for(var p=0;p<y;++p)for(r+=(l-r)*i,s.forEach(function(c){c(r)}),h=0;h<v;++h)_=e[h],_.fx==null?_.x+=_.vx*=f:(_.x=_.fx,_.vx=0),_.fy==null?_.y+=_.vy*=f:(_.y=_.fy,_.vy=0);return n}function g(){for(var y=0,h=e.length,v;y<h;++y){if(v=e[y],v.index=y,v.fx!=null&&(v.x=v.fx),v.fy!=null&&(v.y=v.fy),isNaN(v.x)||isNaN(v.y)){var _=mt*Math.sqrt(.5+y),p=y*wt;v.x=_*Math.cos(p),v.y=_*Math.sin(p)}(isNaN(v.vx)||isNaN(v.vy))&&(v.vx=v.vy=0)}}function w(y){return y.initialize&&y.initialize(e,u),y}return g(),n={tick:m,restart:function(){return x.restart(d),n},stop:function(){return x.stop(),n},nodes:function(y){return arguments.length?(e=y,g(),s.forEach(w),n):e},alpha:function(y){return arguments.length?(r=+y,n):r},alphaMin:function(y){return arguments.length?(t=+y,n):t},alphaDecay:function(y){return arguments.length?(i=+y,n):+i},alphaTarget:function(y){return arguments.length?(l=+y,n):l},velocityDecay:function(y){return arguments.length?(f=1-y,n):1-f},randomSource:function(y){return arguments.length?(u=y,s.forEach(w),n):u},force:function(y,h){return arguments.length>1?(h==null?s.delete(y):s.set(y,w(h)),n):s.get(y)},find:function(y,h,v){var _=0,p=e.length,c,N,k,A,E;for(v==null?v=1/0:v*=v,_=0;_<p;++_)A=e[_],c=y-A.x,N=h-A.y,k=c*c+N*N,k<v&&(E=A,v=k);return E},on:function(y,h){return arguments.length>1?(o.on(y,h),n):o.on(y)}}}function pt(){var e,n,r,t,i=b(-30),l,f=1,s=1/0,x=.81;function o(g){var w,y=e.length,h=O(e,xt,_t).visitAfter(d);for(t=g,w=0;w<y;++w)n=e[w],h.visit(m)}function u(){if(e){var g,w=e.length,y;for(l=new Array(w),g=0;g<w;++g)y=e[g],l[y.index]=+i(y,g,e)}}function d(g){var w=0,y,h,v=0,_,p,c;if(g.length){for(_=p=c=0;c<4;++c)(y=g[c])&&(h=Math.abs(y.value))&&(w+=y.value,v+=h,_+=h*y.x,p+=h*y.y);g.x=_/v,g.y=p/v}else{y=g,y.x=y.data.x,y.y=y.data.y;do w+=l[y.data.index];while(y=y.next)}g.value=w}function m(g,w,y,h){if(!g.value)return!0;var v=g.x-n.x,_=g.y-n.y,p=h-w,c=v*v+_*_;if(p*p/x<c)return c<s&&(v===0&&(v=L(r),c+=v*v),_===0&&(_=L(r),c+=_*_),c<f&&(c=Math.sqrt(f*c)),n.vx+=v*g.value*t/c,n.vy+=_*g.value*t/c),!0;if(g.length||c>=s)return;(g.data!==n||g.next)&&(v===0&&(v=L(r),c+=v*v),_===0&&(_=L(r),c+=_*_),c<f&&(c=Math.sqrt(f*c)));do g.data!==n&&(p=l[g.data.index]*t/c,n.vx+=v*p,n.vy+=_*p);while(g=g.next)}return o.initialize=function(g,w){e=g,r=w,u()},o.strength=function(g){return arguments.length?(i=typeof g=="function"?g:b(+g),u(),o):i},o.distanceMin=function(g){return arguments.length?(f=g*g,o):Math.sqrt(f)},o.distanceMax=function(g){return arguments.length?(s=g*g,o):Math.sqrt(s)},o.theta=function(g){return arguments.length?(x=g*g,o):Math.sqrt(x)},o}function kt(e){var n=b(.1),r,t,i;typeof e!="function"&&(e=b(e==null?0:+e));function l(s){for(var x=0,o=r.length,u;x<o;++x)u=r[x],u.vx+=(i[x]-u.x)*t[x]*s}function f(){if(r){var s,x=r.length;for(t=new Array(x),i=new Array(x),s=0;s<x;++s)t[s]=isNaN(i[s]=+e(r[s],s,r))?0:+n(r[s],s,r)}}return l.initialize=function(s){r=s,f()},l.strength=function(s){return arguments.length?(n=typeof s=="function"?s:b(+s),f(),l):n},l.x=function(s){return arguments.length?(e=typeof s=="function"?s:b(+s),f(),l):e},l}function Nt(e){var n=b(.1),r,t,i;typeof e!="function"&&(e=b(e==null?0:+e));function l(s){for(var x=0,o=r.length,u;x<o;++x)u=r[x],u.vy+=(i[x]-u.y)*t[x]*s}function f(){if(r){var s,x=r.length;for(t=new Array(x),i=new Array(x),s=0;s<x;++s)t[s]=isNaN(i[s]=+e(r[s],s,r))?0:+n(r[s],s,r)}}return l.initialize=function(s){r=s,f()},l.strength=function(s){return arguments.length?(n=typeof s=="function"?s:b(+s),f(),l):n},l.y=function(s){return arguments.length?(e=typeof s=="function"?s:b(+s),f(),l):e},l}function Et(e){const n=o=>o||e.value,r=o=>o.width||e.value,t=o=>o.height||o.size||e.value,i=o=>o.color?"fill: "+o.color:"",l=(o,u,d)=>u||d?["node","pinned"]:["node"];return{getNode:o=>({id:o.id,key:o.id,viewBox:o.innerSVG,width:r(o),height:t(o),name:o.name,style:i(o),title:o.name,cssClass:l(o.cssClass,void 0,void 0),r:o.innerSVG?void 0:n(o.size)/2}),getClass:l,getSize:n,getX:(o,u)=>(o||0)-(u||0)/2,getY:(o,u)=>(o||0)-(u||0)/2}}const he="arrow-start",ge="arrow-end";function Mt(e,n,r){const t=o=>o.color?{stroke:o.color}:{},i=o=>["link"],l=o=>r.value&&o.twoWay?`url(#${he})`:void 0,f=o=>r.value?`url(#${ge})`:void 0,s=a.computed(()=>({arrowStart:{id:he,refX:-(n.value/2-e.value),refY:0,viewBox:`0 -${5*e.value} ${10*e.value} ${10*e.value}`,orient:"auto",markerWidth:10+e.value,markerHeight:10+e.value,"stroke-width":"1","marker-units":"userSpaceOnUse"},arrowEnd:{id:ge,refX:n.value/2+(10-e.value),refY:0,viewBox:`0 -${5*e.value} ${10*e.value} ${10*e.value}`,orient:"auto",markerWidth:10+e.value,markerHeight:10+e.value,"marker-units":"userSpaceOnUse"}}));return{getClass:i,getStyle:t,getMarkerEnd:f,getMarkerStart:l,getSimulationLink:o=>({source:o.source,target:o.target,id:o.id,key:o.id,name:o.name,class:i(o.id),style:t(o),"stroke-width":e.value,"marker-end":f(),"marker-start":l(o)}),markers:s}}const At="X",St="Y",Rt="charge",bt="link",Tt="collide",ye=.01,de=.1,Ct=Math.log(ye)/Math.log(1-de);function ve(e,n,r,t){const{getNode:i}=Et(t.nodeSize),{getSimulationLink:l}=Mt(t.linkWidth,t.nodeSize,t.directed),f=a.reactive({nodes:[],links:[]}),s=()=>{console.debug("useSimulation.init"),f.nodes=e.value.map(d=>i(d)),f.links=n.value.map(d=>l(d)),x()},x=async()=>{console.debug("useSimulation.refresh"),u.value.stop(),u.value=o(),t.static.value?u.value.tick(Ct):u.value.restart()},o=()=>{const d=ue().alphaMin(ye).alphaDecay(de).nodes(f.nodes);return d.force(At,kt(r.value.width/2).strength(t.forceXStrength.value)),d.force(St,Nt(r.value.height/2).strength(t.forceYStrength.value)),d.force(Rt,pt().strength(t.forcManyBodyStrength.value)),d.force(Tt,it(t.forceCollideStrength.value)),d.force(bt,at(f.links).id(m=>{if(!("id"in m))throw new Error("Node id is undefined");return m.id})),d},u=a.ref(ue());return G.watchDebounced([()=>e.value.length,()=>n.value.length,r,t.nodeSize,t.linkWidth,t.forcManyBodyStrength,t.forceXStrength,t.forceYStrength,t.forceCollideStrength,t.directed],async()=>s(),{debounce:100,maxWait:1e3}),G.watchDebounced(t.static,async()=>x(),{deep:!0,debounce:100,maxWait:1e3}),{simulation:u,graph:f}}const zt=.1,Dt=.1,Bt=-300,Lt=25,Ft=12,$t=2,It=45,Pt=e=>{const n=a.computed(()=>{var t,i,l,f,s,x,o,u,d,m,g,w,y,h,v,_,p,c,N,k,A,E,T,M,z,D,C,xe,_e,me,we,pe,ke,Ne,Ee,Me,Ae,Se,Re,be,Te,Ce,ze,De,Be,Le,Fe,$e;return{node:{stroke:((l=(i=(t=e.value)==null?void 0:t.nodes)==null?void 0:i.colors)==null?void 0:l.stroke)||"#E2EB98",fill:((x=(s=(f=e.value)==null?void 0:f.nodes)==null?void 0:s.colors)==null?void 0:x.fill)||"#93A392",selected:{stroke:((m=(d=(u=(o=e.value)==null?void 0:o.nodes)==null?void 0:u.colors)==null?void 0:d.selected)==null?void 0:m.stroke)||"#9DC4B5",fill:(h=(y=(w=(g=e.value)==null?void 0:g.nodes)==null?void 0:w.colors)==null?void 0:y.selected)==null?void 0:h.fill},hover:{stroke:"#9DC4B5",fill:(c=(p=(_=(v=e.value)==null?void 0:v.nodes)==null?void 0:_.colors)==null?void 0:p.hover)==null?void 0:c.fill},pinned:{stroke:"#9DC4B5",fill:(E=(A=(k=(N=e.value)==null?void 0:N.nodes)==null?void 0:k.colors)==null?void 0:A.pinned)==null?void 0:E.fill},label:{fill:((D=(z=(M=(T=e.value)==null?void 0:T.nodes)==null?void 0:M.colors)==null?void 0:z.label)==null?void 0:D.fill)||"#93A392"}},link:{stroke:((_e=(xe=(C=e.value)==null?void 0:C.links)==null?void 0:xe.colors)==null?void 0:_e.stroke)||"#BAD9A2",fill:(pe=(we=(me=e.value)==null?void 0:me.links)==null?void 0:we.colors)==null?void 0:pe.fill,selected:{stroke:((Me=(Ee=(Ne=(ke=e.value)==null?void 0:ke.links)==null?void 0:Ne.colors)==null?void 0:Ee.selected)==null?void 0:Me.stroke)||"#9DC4B5",fill:(be=(Re=(Se=(Ae=e.value)==null?void 0:Ae.links)==null?void 0:Se.colors)==null?void 0:Re.selected)==null?void 0:be.fill},hover:{stroke:"#9DC4B5",fill:(De=(ze=(Ce=(Te=e.value)==null?void 0:Te.links)==null?void 0:Ce.colors)==null?void 0:ze.hover)==null?void 0:De.fill},label:{fill:(($e=(Fe=(Le=(Be=e.value)==null?void 0:Be.links)==null?void 0:Le.colors)==null?void 0:Fe.label)==null?void 0:$e.fill)||"#93A392"}}}});return{options:{static:a.toRef(()=>{var t,i;return((i=(t=e.value)==null?void 0:t.simulation)==null?void 0:i.static)||!1}),forceXStrength:a.toRef(()=>{var t,i;return((i=(t=e.value)==null?void 0:t.simulation)==null?void 0:i.force.x)||zt}),forceYStrength:a.toRef(()=>{var t,i;return((i=(t=e.value)==null?void 0:t.simulation)==null?void 0:i.force.y)||Dt}),forcManyBodyStrength:a.toRef(()=>{var t,i;return((i=(t=e.value)==null?void 0:t.simulation)==null?void 0:i.force.charge)||Bt}),forceCollideStrength:a.toRef(()=>{var t,i;return((i=(t=e.value)==null?void 0:t.simulation)==null?void 0:i.force.collide)||It}),nodeSize:a.toRef(()=>{var t,i;return((i=(t=e.value)==null?void 0:t.nodes)==null?void 0:i.size)||Lt}),nodeFontSize:a.toRef(()=>{var t,i,l;return((l=(i=(t=e.value)==null?void 0:t.nodes)==null?void 0:i.font)==null?void 0:l.size)||Ft}),linkWidth:a.toRef(()=>{var t,i;return((i=(t=e.value)==null?void 0:t.links)==null?void 0:i.width)||$t}),linkFontSize:a.toRef(()=>{var t,i,l;return((l=(i=(t=e.value)==null?void 0:t.links)==null?void 0:i.font)==null?void 0:l.size)||12}),draggables:a.toRef(()=>{var t,i;return((i=(t=e.value)==null?void 0:t.layout)==null?void 0:i.draggables)||!1}),directed:a.toRef(()=>{var t,i;return((i=(t=e.value)==null?void 0:t.layout)==null?void 0:i.directed)||!1})},theme:n}},Yt=(e,n)=>({label:a.computed(()=>({font:{size:e.value},offset:{x:n.value/2+e.value/2,y:e.value/2}}))}),Xt=e=>({label:a.computed(()=>({font:{size:e.value}})),getX:i=>F(i.source)&&F(i.target)&&i.source.x&&i.target.x?i.target.x>i.source.x?i.source.x+(i.target.x-i.source.x)/2:i.target.x+(i.source.x-i.target.x)/2:void 0,getY:i=>F(i.source)&&F(i.target)&&i.source.y&&i.target.y?i.target.y>i.source.y?i.source.y+(i.target.y-i.source.y)/2:i.target.y+(i.source.y-i.target.y)/2:void 0}),Wt=["viewBox"],Vt={key:0},Ht=["fill"],Ut=["fill"],jt=["id","d","stroke-width","marker-end","marker-start","onClick","onTouchstartPassive"],Gt=["font-size","x","y"],Ot={id:"l-nodes",class:"nodes"},Kt=["viewBox","width","height","x","y","title","onClick","onTouchendPassive","onMousedown","onTouchstartPassive","innerHTML"],Qt=["cx","cy","r","title","onClick","onTouchendPassive","onMousedown","onTouchstartPassive"],Zt=["x","y","font-size","stroke-width"],Jt=a.defineComponent({__name:"D3NetworkGraph",props:{nodes:{type:Array,required:!0},links:{type:Array,required:!0},options:{type:Object,default:void 0}},emits:["node-click","link-click"],setup(e,{emit:n}){const r=e;a.useCssVars(_=>({"56dc464e":a.unref(t).node.stroke,"0eb7d319":a.unref(t).node.fill,"6043b40a":a.unref(t).node.selected.stroke||a.unref(t).node.stroke,"09a6f36a":a.unref(t).node.selected.fill||a.unref(t).node.fill,"0e263547":a.unref(t).node.pinned.stroke||a.unref(t).node.stroke,"7ecd9b27":a.unref(t).node.pinned.fill||a.unref(t).node.fill,e241e882:a.unref(t).node.hover.stroke||a.unref(t).node.stroke,"44a46d9f":a.unref(t).node.hover.fill||a.unref(t).node.fill,a564c554:a.unref(t).link.stroke,dbb967be:a.unref(t).link.fill,"06a1e0e6":a.unref(t).link.selected.stroke,"964c3fd0":a.unref(t).link.selected.fill,"3bc6c280":a.unref(t).node.hover.stroke,ca90bfea:a.unref(t).node.hover.fill,aead5f4a:a.unref(t).link.label.fill,"284abd53":a.unref(t).node.label.fill}));const{theme:t,options:i}=Pt(a.toRef(()=>r.options)),l=a.ref(null),f=a.ref({width:100,height:100});G.useResizeObserver(l,_=>{const p=_[0];p.contentRect.width===f.value.width&&p.contentRect.height===f.value.height||(f.value={width:p.contentRect.width,height:p.contentRect.height})});const s=_=>F(_.source)&&F(_.target)?`M${_.source.x} ${_.source.y} L${_.target.x} ${_.target.y}`:void 0,{simulation:x,graph:o}=ve(a.toRef(()=>r.nodes),a.toRef(()=>r.links),f,i),{dragStart:u,dragEnd:d,move:m}=Ie(x,i.draggables),{label:g}=Yt(i.nodeFontSize,i.nodeSize),{label:w,getX:y,getY:h}=Xt(i.linkFontSize),{markers:v}=Pe(i.linkWidth,i.nodeSize,i.directed);return(_,p)=>(a.openBlock(),a.createElementBlock("svg",{ref_key:"svg",ref:l,xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",preserveAspectRatio:"xMinYMin",viewBox:`0 0 ${f.value.width} ${f.value.height}`,class:"svg-container",onMouseup:p[0]||(p[0]=(...c)=>a.unref(d)&&a.unref(d)(...c)),onTouchendPassive:p[1]||(p[1]=(...c)=>a.unref(d)&&a.unref(d)(...c)),onTouchstartPassive:p[2]||(p[2]=async()=>{}),onMousemove:p[3]||(p[3]=(...c)=>a.unref(m)&&a.unref(m)(...c))},[a.unref(i).directed?(a.openBlock(),a.createElementBlock("defs",Vt,[a.createElementVNode("marker",a.normalizeProps(a.guardReactiveProps(a.unref(v).arrowEnd)),[a.createElementVNode("path",{fill:a.unref(t).link.stroke,d:"M0 -5 L 10 0 L 0 5"},null,8,Ht)],16),a.createElementVNode("marker",a.normalizeProps(a.guardReactiveProps(a.unref(v).arrowStart)),[a.createElementVNode("path",{fill:a.unref(t).link.stroke,d:"M 10 5 L 0 0 L 10 -5"},null,8,Ut)],16)])):a.createCommentVNode("",!0),(a.openBlock(!0),a.createElementBlock(a.Fragment,null,a.renderList(a.unref(o).links,(c,N)=>(a.openBlock(),a.createElementBlock("g",{key:N,id:"l-links",class:"links"},[a.createElementVNode("path",{id:`${N}`,d:s(c),"stroke-width":c["stroke-width"],class:a.normalizeClass(c.class),style:a.normalizeStyle(c.style),"marker-end":c["marker-end"],"marker-start":c["marker-start"],onClick:k=>n("link-click",k,c),onTouchstartPassive:k=>n("link-click",k,c)},null,46,jt),a.createElementVNode("text",{class:"link-label","font-size":a.unref(w).font.size,x:a.unref(y)(c),y:a.unref(h)(c)},a.toDisplayString(c.name)+" ",9,Gt)]))),128)),a.createElementVNode("g",Ot,[(a.openBlock(!0),a.createElementBlock(a.Fragment,null,a.renderList(a.unref(o).nodes,(c,N)=>(a.openBlock(),a.createElementBlock(a.Fragment,{key:N},[c.innerSVG?(a.openBlock(),a.createElementBlock("svg",{key:0,viewBox:c.innerSVG.viewBox,width:c.width,height:c.height,x:(c.x||0)-(c.width||0)/2,y:(c.y||0)-(c.height||0)/2,style:a.normalizeStyle(c.style),title:c.name,class:a.normalizeClass(c.cssClass),onClick:k=>n("node-click",k,c),onTouchendPassive:k=>n("node-click",k,c),onMousedown:a.withModifiers(k=>a.unref(u)(k,N),["prevent"]),onTouchstartPassive:a.withModifiers(k=>a.unref(u)(k,N),["prevent"]),innerHTML:c.innerSVG.innerHtml},null,46,Kt)):(a.openBlock(),a.createElementBlock("circle",{key:1,cx:c.x,cy:c.y,r:c.r,style:a.normalizeStyle(c.style),title:c.name,class:a.normalizeClass(c.cssClass),onClick:k=>_.$emit("node-click",k,c),onTouchendPassive:k=>_.$emit("node-click",k,c),onMousedown:a.withModifiers(k=>a.unref(u)(k,N),["prevent"]),onTouchstartPassive:a.withModifiers(k=>a.unref(u)(k,N),["prevent"])},null,46,Qt)),a.createElementVNode("text",{class:"node-label",x:(c.x||0)+(c.width||0)/2+a.unref(g).font.size/2,y:(c.y||0)+a.unref(g).offset.y,"font-size":a.unref(g).font.size,"stroke-width":a.unref(g).font.size/8},a.toDisplayString(c.name),9,Zt)],64))),128))])],40,Wt))}}),qt="";B.D3NetworkGraph=Jt,B.isNode=F,B.useSimulation=ve,Object.defineProperty(B,Symbol.toStringTag,{value:"Module"})});
