(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0qBz":function(t,e,a){"use strict";var n=a("nOak"),i={props:["data"],components:{Markdown:a.n(n).a}},r=a("KHd+"),s=Object(r.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"py-4"},[e("Markdown",{staticClass:"mx-auto prose md:prose-lg",attrs:{source:this.data.content}})],1)}),[],!1,null,null,null);e.a=s.exports},ElpU:function(t,e,a){"use strict";function n(t,e,a){return[{key:"twitter:card",name:"twitter:card",content:"summary_large_image"},{key:"og:title",property:"og:title",content:t},{key:"twitter:title",name:"twitter:title",content:t},{key:"og:description",property:"og:description",content:e},{key:"twitter:description",name:"twitter:description",content:e},{key:"og:image",property:"og:image",content:a},{key:"twitter:image",name:"twitter:image",content:a}]}a.d(e,"a",(function(){return n}))},nSZ0:function(t,e,a){"use strict";var n=a("0qBz"),i=a("lIGg"),r={props:["data"],methods:{getStrapiMedia:i.a}},s=a("KHd+"),o=Object(s.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"py-4"},[t.data.media.mime.startsWith("image")?a("g-image",{attrs:{alt:t.data.description,src:t.getStrapiMedia(t.data.media.url)}}):t._e(),t.data.media.mime.startsWith("video")?a("video",{attrs:{controls:""}},[a("source",{attrs:{src:t.data.media.url,type:t.data.media.mime}})]):t._e(),a("p",{staticClass:"text-center text-lg italic mt-2"},[t._v(t._s(t.data.description))])],1)}),[],!1,null,null,null).exports,c={props:["data"],data:function(){return{rawSelectedIndex:0}},computed:{parsedSelectedIndex:function(){return this.rawSelectedIndex%this.data.images.length}},methods:{getStrapiMedia:i.a}},l=Object(s.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container py-4"},[a("p",{staticClass:"text-center text-xl italic mb-2"},[t._v(t._s(t.data.title))]),a("g-image",{attrs:{src:t.getStrapiMedia(t.data.images[t.parsedSelectedIndex].url)}}),a("div",{staticClass:"flex flex-row align-baseline justify-between"},[a("button",{staticClass:"py-1",on:{click:function(e){t.rawSelectedIndex-=1}}},[t._v("Previous")]),a("button",{staticClass:"py-1",on:{click:function(e){t.rawSelectedIndex+=1}}},[t._v("Next")])])],1)}),[],!1,null,null,null).exports,d={props:["content"],components:{RichText:n.a,LargeMedia:o,Slider:l}},p=Object(s.a)(d,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.content,(function(e){return a("div",{key:e.__typename+e.id},["strapiTypes_ComponentSectionsRichText"===e.__typename?a("div",[a("RichText",{staticClass:"container",attrs:{data:e}})],1):t._e(),"strapiTypes_ComponentSectionsLargeMedia"===e.__typename?a("div",[a("LargeMedia",{attrs:{data:e}})],1):t._e(),"strapiTypes_ComponentSectionsImagesSlider"===e.__typename?a("div",[a("Slider",{attrs:{data:e}})],1):t._e()])})),0)}),[],!1,null,null,null);e.a=p.exports},odGf:function(t,e,a){"use strict";a.r(e);a("pol5"),a("IjEv");var n=a("nSZ0"),i=a("lIGg"),r=a("ElpU"),s={components:{Content:n.a},metaInfo:function(){var t=this.$page.strapi.about.seo,e=t.title,a=t.description,n=t.shareImage,s=Object(i.a)(n.url);return{title:e,meta:Object(r.a)(e,a,s)}}},o=a("KHd+"),c=null,l=Object(o.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("Content",{staticClass:"mt-10",attrs:{content:this.$page.strapi.about.content}})],1)}),[],!1,null,null,null);"function"==typeof c&&c(l);e.default=l.exports}}]);