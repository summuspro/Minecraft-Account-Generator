const VERSION="chrome",browser=globalThis.chrome;function register_language(){browser.declarativeNetRequest.updateDynamicRules({addRules:[{id:1,priority:1,action:{type:"redirect",redirect:{transform:{queryTransform:{addOrReplaceParams:[{key:"hl",value:"en-US"}]}}}},condition:{regexFilter:"^https://[^\\.]*\\.(google\\.com|recaptcha\\.net)/recaptcha",resourceTypes:["sub_frame"]}},{id:2,priority:1,action:{type:"redirect",redirect:{transform:{queryTransform:{addOrReplaceParams:[{key:"lang",value:"en"}]}}}},condition:{regexFilter:"^https://[^\\.]*\\.(funcaptcha\\.(co|com)|arkoselabs\\.(com|cn)|arkose\\.com\\.cn)",resourceTypes:["sub_frame"]}}],removeRuleIds:[1,2]})}export{VERSION,browser,register_language};
