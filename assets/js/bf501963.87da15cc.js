"use strict";(self.webpackChunkcachelib=self.webpackChunkcachelib||[]).push([[7414],{3905:function(e,a,t){t.r(a),t.d(a,{MDXContext:function(){return p},MDXProvider:function(){return d},mdx:function(){return f},useMDXComponents:function(){return s},withMDXComponents:function(){return m}});var n=t(67294);function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(){return r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},r.apply(this,arguments)}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){c(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,c=function(e,a){if(null==e)return{};var t,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(c[t]=e[t]);return c}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var p=n.createContext({}),m=function(e){return function(a){var t=s(a.components);return n.createElement(e,r({},a,{components:t}))}},s=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},d=function(e){var a=s(e.components);return n.createElement(p.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,c=e.mdxType,r=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(t),d=c,h=m["".concat(i,".").concat(d)]||m[d]||u[d]||r;return t?n.createElement(h,l(l({ref:a},p),{},{components:t})):n.createElement(h,l({ref:a},p))}));function f(e,a){var t=arguments,c=a&&a.mdxType;if("string"==typeof e||c){var r=t.length,i=new Array(r);i[0]=h;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l.mdxType="string"==typeof e?e:c,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},56854:function(e,a,t){t.r(a),t.d(a,{contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var n=t(87462),c=t(63366),r=(t(67294),t(3905)),i=["components"],l={id:"Set_up_a_simple_cache",title:"Set up a simple dram cache"},o=void 0,p={unversionedId:"Cache_Library_User_Guides/Set_up_a_simple_cache",id:"Cache_Library_User_Guides/Set_up_a_simple_cache",isDocsHomePage:!1,title:"Set up a simple dram cache",description:"Before calling cachelib to cache your data, set up a simple dram cache first.",source:"@site/docs/Cache_Library_User_Guides/Set_up_a_simple_cache.md",sourceDirName:"Cache_Library_User_Guides",slug:"/Cache_Library_User_Guides/Set_up_a_simple_cache",permalink:"/docs/Cache_Library_User_Guides/Set_up_a_simple_cache",editUrl:"https://github.com/facebook/CacheLib/edit/main/website/docs/Cache_Library_User_Guides/Set_up_a_simple_cache.md",tags:[],version:"current",frontMatter:{id:"Set_up_a_simple_cache",title:"Set up a simple dram cache"},sidebar:"userguideSidebar",previous:{title:"Terms",permalink:"/docs/Cache_Library_User_Guides/terms"},next:{title:"Write data to cache",permalink:"/docs/Cache_Library_User_Guides/Write_data_to_cache"}},m=[{value:"Test the simple cache setup program",id:"test-the-simple-cache-setup-program",children:[]},{value:"Use cache",id:"use-cache",children:[]},{value:"Release and delete cache",id:"release-and-delete-cache",children:[]}],s={toc:m};function d(e){var a=e.components,t=(0,c.Z)(e,i);return(0,r.mdx)("wrapper",(0,n.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"Before calling cachelib to cache your data, set up a simple dram cache first."),(0,r.mdx)("p",null,"To set up a simple dram cache, you need to provide the following to cachelib:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Eviction policy",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"How data is evicted from the cache?"))),(0,r.mdx)("li",{parentName:"ul"},"Cache configuration",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"What's the cache size?"),(0,r.mdx)("li",{parentName:"ul"},"What's the name of the cache?"),(0,r.mdx)("li",{parentName:"ul"},"What's the access configuration for the cache? The access configuration is used to tune the ",(0,r.mdx)("a",{parentName:"li",href:"Configure_HashTable"},"hash table")," for looking up data in cache.")))),(0,r.mdx)("p",null,"The allocator/CacheAllocator.cpp file instantiates the following class templates for different eviction policies:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-cpp"},"template class CacheAllocator<LruCacheTrait>;\ntemplate class CacheAllocator<LruCacheWithSpinBucketsTrait>;\ntemplate class CacheAllocator<Lru2QCacheTrait>;\ntemplate class CacheAllocator<TinyLFUCacheTrait>;\n")),(0,r.mdx)("p",null,"where ",(0,r.mdx)("inlineCode",{parentName:"p"},"LruCacheTrait"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"LruCacheWithSpinBucketsTrait"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"Lru2QCacheTrait"),", and ",(0,r.mdx)("inlineCode",{parentName:"p"},"TinyLFUCacheTrait")," are declared in allocator/CacheTraits.h. You can configure the eviction parameters. For more information, see ",(0,r.mdx)("a",{parentName:"p",href:"eviction_policy"},"Eviction Policy"),"."),(0,r.mdx)("p",null,"LRU is the most commonly used trait. To use LRU as the eviction policy for your cache, use the following instantiated class:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-cpp"},'#include "cachelib/allocator/CacheAllocator.h"\n\nusing Cache = facebook::cachelib::LruAllocator;\n')),(0,r.mdx)("p",null,"Before setting up a simple cache, use an object of a ",(0,r.mdx)("inlineCode",{parentName:"p"},"CacheAllocatorConfig")," class to set the cache's configuration:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-cpp"},'Cache::Config config;\nconfig\n    .setCacheSize(1 * 1024 * 1024 * 1024) // 1 GB\n    .setCacheName("My cache") // unique identifier for the cache\n    .setAccessConfig({25, 10})\n    .validate();\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Caution!!")),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"If you're using multiple cache instances, please consider if you can simplify to using a single instance via multiple cache pools. CacheLib is highly optimized for concurrency; using multiple cachelib instances is typically an anti-pattern unless you have a good reason.")),(0,r.mdx)("p",null,"The code to set up a simple cache follows:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-cpp"},'#include "cachelib/allocator/CacheAllocator.h"\n\nusing Cache = facebook::cachelib::LruAllocator;\nstd::unique_ptr<Cache> cache;\nfacebook::cachelib::PoolId default_pool;\n\nvoid initializeCache() {\n  Cache::Config config;\n  config\n      .setCacheSize(1 * 1024 * 1024 * 1024) // 1 GB\n      .setCacheName("My cache")\n      .setAccessConfig({25, 10})\n      .validate();\n  cache = std::make_unique<Cache>(config);\n  default_pool =\n      cache->addPool("default", cache->getCacheMemoryStats().cacheSize);\n}\n\n')),(0,r.mdx)("p",null,"Before using a cache, you need to partition its memory into pools. You can add many pools to the cache. In this example, only a default pool is added to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"cache"),". Because of a fixed overhead needed to manage the cache, the default pool's size is less than 1 GB."),(0,r.mdx)("p",null,"For a complete program to set up a simple cache, see ",(0,r.mdx)("inlineCode",{parentName:"p"},"examples/simple_cache/main.cpp"),"."),(0,r.mdx)("h2",{id:"test-the-simple-cache-setup-program"},"Test the simple cache setup program"),(0,r.mdx)("p",null,"To test the simple cache setup program ",(0,r.mdx)("inlineCode",{parentName:"p"},"examples/simple_cache/main.cpp"),":"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Build ",(0,r.mdx)("inlineCode",{parentName:"p"},"cachelib")," with all the dependecies:"),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/facebook/CacheLib\ncd CacheLib\n./contrib/build.sh -d -j -v -T\n"))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Build the simple cache setup program:"),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-sh"},"cd examples/simple_cache\n./build.sh\n"))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Run the program:"),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-sh"},"./build/simple-cache-example\n")),(0,r.mdx)("p",{parentName:"li"},"When you run ",(0,r.mdx)("inlineCode",{parentName:"p"},"simple-cache-example"),", it doesn't produce any output."))),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Exercise"),": Add code to ",(0,r.mdx)("inlineCode",{parentName:"p"},"examples/simple_cache/main.cpp")," to do the following:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Print the value of the item with key ",(0,r.mdx)("inlineCode",{parentName:"li"},"key"),"."),(0,r.mdx)("li",{parentName:"ul"},"Compare the default pool size with the cache size (1 GB).")),(0,r.mdx)("details",null,(0,r.mdx)("summary",null,"Answer"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-cpp"},'// ...\n#include <iostream>  // add this\n// ...\n\nint main(int argc, char** argv) {\n  // ...\n  {\n    // ...\n    assert(sp == "value");\n\n    // Add this statement to print the value of the item with key "key".\n    std::cout << "value = " << sp << \'\\n\';\n\n    // Add the following code to compare the default pool size with the cache size.\n    auto cache_size = 1024 * 1024 * 1024; // 1 GB\n    auto default_pool_size = gCache_->getCacheMemoryStats().cacheSize;\n    std::cout << "cache size = " << cache_size << \'\\n\';\n    std::cout << "default pool size = " << default_pool_size << \'\\n\';\n  }\n\n  destroyCache();\n}\n'))),(0,r.mdx)("h2",{id:"use-cache"},"Use cache"),(0,r.mdx)("p",null,"After setting up a simple cache, you can do the following:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"Write_data_to_cache"},"Write data to the cache"),"."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"Read_data_from_cache"},"Read data from the cache"),"."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"Remove_data_from_cache"},"Remove data from the cache"),"."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"Visit_data_in_cache"},"Visit data in the cache"),".")),(0,r.mdx)("h2",{id:"release-and-delete-cache"},"Release and delete cache"),(0,r.mdx)("p",null,"When you're done with the cache, to release and delete it, call the ",(0,r.mdx)("inlineCode",{parentName:"p"},"reset()")," method:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-cpp"},"cache.reset();\n")))}d.isMDXComponent=!0}}]);