import{b as n,q as c,g as a,t as r}from"./entry-client-a6e7a254.js";import{M as h}from"./index-80829edc.js";const l=r("<br>",1),i=r("<u>WARNING: Do this at your own risk because you might not be able to make nice nvchad themes like siduck.</u>",2);function t(s){const e=Object.assign({h2:"h2",ul:"ul",li:"li",code:"code",p:"p",pre:"pre",span:"span",strong:"strong",h3:"h3",blockquote:"blockquote",a:"a"},h(),s.components);return[n(e.h2,{children:"Override default highlight groups"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Make sure you use a valid highlight group."}),`
`,n(e.li,{get children(){return["Check your theme colors in this dir: ",n(e.code,{children:"~/.local/share/nvim/lazy/base46/lua/base46/integrations"})]}}),`
`]}}),`
`,n(e.p,{children:'When modifying the custom highlight groups in your theme file, such as "onedark.lua", it is important to note that only the variables from "base_30" can be used for this purpose.'}),`
`,n(e.p,{children:'Although hex colors can also be used in the "fg/bg" field, it is recommended to utilize the variable names (e.g. "blue", "darker_black", "one_bg", etc.) from your theme file as they will provide a better aesthetic. This way, there is no need to manually write the hex colors.'}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[`M.ui = {
   hl_override = {
      Pmenu = { bg = `,n(e.span,{className:"hljs-string",children:'"white"'}),` },
      `,n(e.span,{className:"hljs-comment",children:'-- Pmenu = { bg = "#ffffff" }, this works too'}),`

      MyHighlightGroup = { `,n(e.span,{className:"hljs-comment",children:"-- custom highlights are also allowed"}),`
         fg = `,n(e.span,{className:"hljs-string",children:'"red"'}),`,
         bg = `,n(e.span,{className:"hljs-string",children:'"darker_black"'}),`
      }
   },
}
`]}})}}),`
`,a(l),`
`,n(e.p,{get children(){return["In order to add custom highlights, its the same as above, just use ",n(e.strong,{get children(){return n(e.code,{children:"hl_add"})}}),"."]}}),`
`,n(e.h2,{children:"Customize themes"}),`
`,n(e.p,{children:"If you just want to customize an already existing theme, you can change the following configuration:"}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[`M.ui = {
   changed_themes = {
      onedark = {
         base_16 = {
            base00 = `,n(e.span,{className:"hljs-string",children:'"#mycol"'}),`,
         },
         base_30 = {
            red = `,n(e.span,{className:"hljs-string",children:'"#mycol"'}),`,
            white = `,n(e.span,{className:"hljs-string",children:'"#mycol"'}),`,
         },
      },

      nord = {
         `,n(e.span,{className:"hljs-comment",children:"-- and so on!"}),`
      },
   },
}
`]}})}}),`
`,n(e.h3,{children:"Local themes"}),`
`,n(e.blockquote,{get children(){return[`
`,a(i),`
`]}}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["Default themes can be found in our ",n(e.a,{href:"https://github.com/NvChad/base46",get children(){return n(e.code,{children:"base46"})}})," repository."]}}),`
`]}}),`
`,n(e.p,{children:"Here is the default structure for NvChad themes:"}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-comment",children:"-- place the file in /custom/themes/<theme-name>.lua"}),`
`,n(e.span,{className:"hljs-comment",children:"-- for example: custom/themes/siduck.lua"}),`

`,n(e.span,{className:"hljs-keyword",children:"local"}),` M = {}

M.base_30 = {
   `,n(e.span,{className:"hljs-comment",children:"-- 30 colors based on base_16"}),`
}

M.base_16 = {
   `,n(e.span,{className:"hljs-comment",children:"-- base16 colors"}),`
}

M.`,n(e.span,{className:"hljs-built_in",children:"type"})," = ",n(e.span,{className:"hljs-string",children:'"dark"'})," ",n(e.span,{className:"hljs-comment",children:"-- light / dark"}),`

`,n(e.span,{className:"hljs-keyword",children:"return"}),` M
`]}})}}),`
`,a(l),`
`,n(e.p,{children:"Finally, add your theme in chadrc."}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[`M.ui = {
   theme = `,n(e.span,{className:"hljs-string",children:'"siduck"'}),`,
}
`]}})}})]}function u(s={}){const{wrapper:e}=Object.assign({},h(),s.components);return e?n(e,c(s,{get children(){return n(t,s)}})):t(s)}export{u as default};