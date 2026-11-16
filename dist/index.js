"use strict";var v=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var q=v(function(z,f){
var y=require('@stdlib/assert-is-same-value/dist');function S(e,r,a,u,n){var t,s,i,o;for(t=a.data,s=a.accessors[0],i=n,o=0;o<e;o++){if(y(r,s(t,i)))return o;i+=u}return-1}f.exports=S
});var c=v(function(A,x){
var V=require('@stdlib/array-base-arraylike2object/dist'),g=require('@stdlib/assert-is-same-value/dist'),p=q();function O(e,r,a,u,n){var t,s,i;if(e<=0)return-1;if(s=V(a),s.accessorProtocol)return p(e,r,s,u,n);for(t=n,i=0;i<e;i++){if(g(r,a[t]))return i;t+=u}return-1}x.exports=O
});var l=v(function(B,d){
var b=require('@stdlib/strided-base-stride2offset/dist'),j=c();function k(e,r,a,u){return j(e,r,a,u,b(e,u))}d.exports=k
});var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=l(),R=c();P(m,"ndarray",R);module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
