import{_ as e,c as a,o as t,a6 as o,ap as r}from"./chunks/framework.DqpHdag1.js";const m=JSON.parse('{"title":"快速用electron生成一个PC端应用","description":"","frontmatter":{"title":"快速用electron生成一个PC端应用","date":"2020-03-17T18:13:18.000Z","toc":true,"tags":["React","Electron","PC端开发","框架"]},"headers":[],"relativePath":"posts/zh/快速用electron生成一个PC端应用.md","filePath":"posts/zh/快速用electron生成一个PC端应用.md"}'),c={name:"posts/zh/快速用electron生成一个PC端应用.md"},d=o('<h2 id="写在前面的" tabindex="-1">写在前面的 <a class="header-anchor" href="#写在前面的" aria-label="Permalink to &quot;写在前面的&quot;">​</a></h2><p>在使用Electron开发应用的过程中遇到了很多小的bug，这些bug有的解决方案尚且有用，有的bug已经过时了。网上的帖子有很多，质量层次不齐，如何去引入解决问题云云，很多的bug是框架自身的问题甚至还活在issues里。为了便于开发electron应用，我整理了三个模板仓库便于直接应用于开发，因为本地没有OSX的环境，所以都是在Win10完成的开发，这也是解决起来最麻烦的。</p><p>仓库地址: <a href="https://gitee.com/HerbertHe" target="_blank" rel="noreferrer">Gitee</a>, <a href="https://github.com/HerbertHe" target="_blank" rel="noreferrer">GitHub</a></p><h2 id="为什么是react" tabindex="-1">为什么是React <a class="header-anchor" href="#为什么是react" aria-label="Permalink to &quot;为什么是React&quot;">​</a></h2><p>针对于Vue的帖子有很多，也很多人使用，我也曾用过。因为自己学过和用过很多开发语言，而React更适用于我的编程逻辑和习惯，Vue面向设计师我感觉是很合适的(～﹃～)~zZ。</p><h2 id="关于eraac、eraasc和eraatc" tabindex="-1">关于<code>Eraac</code>、<code>Eraasc</code>和<code>Eraatc</code> <a class="header-anchor" href="#关于eraac、eraasc和eraatc" aria-label="Permalink to &quot;关于`Eraac`、`Eraasc`和`Eraatc`&quot;">​</a></h2><p><code>Eraac</code>全名为<code>electron-react-antd-antv-cli</code>，另外的两个<code>s</code>和<code>t</code>分别代表<code>sqlite3</code>的版本和<code>typescript</code>的版本。<code>Eraac</code>和<code>Eraasc</code>的类型检查都是用的<code>prop-types</code>，根据react官方的建议和发展趋势<code>ts</code>版本会越来越流行，<code>js</code>版本降低了开发难度和考虑因素同时存在类型安全的问题，<code>ts</code>版本更适合大型应用的开发。</p><blockquote><p><code>sqlite3</code>的版本本质就是<code>Eraac</code>引入了<code>sqlites3</code>，但是由于<code>sqlite3</code>并不能直接使用。构建同样是一个大坑，因此整理为了一个独立的仓库。<strong>同时需要说明的是：框架限制了electron的版本更新，因为electron版本更新也存在不兼容的问题，如果有需要请自行更新！模板的master分支会尽快跟着electron进行更新的兼容性测试，新项目无需担心。</strong></p></blockquote><h3 id="为什么引入了antd和antv" tabindex="-1">为什么引入了antd和antv <a class="header-anchor" href="#为什么引入了antd和antv" aria-label="Permalink to &quot;为什么引入了antd和antv&quot;">​</a></h3><p>antd是阿里蚂蚁提供的可视化开源组件，跟饿了么提供的<code>element-ui</code>面向vue一样都是组件。antv是蚂蚁提供的数据可视化组件，在一个应用开发中往往数据可视化也能带来更好的用户体验。antv使用的是<code>BizCharts</code>，为阿里面向react的商业级数据可视化组件，能够保证足够的开发质量。</p><h2 id="如何快速生成一个electron应用" tabindex="-1">如何快速生成一个electron应用 <a class="header-anchor" href="#如何快速生成一个electron应用" aria-label="Permalink to &quot;如何快速生成一个electron应用&quot;">​</a></h2><p>第一次使用我建议使用<code>Eraac</code>模板，因为足够便捷。根据<code>README.md</code>的使用指南，很快就会启动成功一个electron应用，根据自己的需要可以清掉所有的demo和test文件直接构建。</p><h3 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h3><p>主进程位于: <code>/public/electron.js</code></p><p>渲染进程可以位于任何组件中，只需要使用<code>window.electron</code>即可使用<code>electron</code>提供的所有API。</p><h3 id="进阶使用" tabindex="-1">进阶使用 <a class="header-anchor" href="#进阶使用" aria-label="Permalink to &quot;进阶使用&quot;">​</a></h3><p>参考<code>REAME.md</code>引用的文档，配置好<code>package.json</code>和<code>.yml</code>文件，遵循使用说明，即可实现直接构建带有自动升级的PC端应用！</p><h2 id="使用demo-edeverclient" tabindex="-1">使用demo: <code>EdeverClient</code> <a class="header-anchor" href="#使用demo-edeverclient" aria-label="Permalink to &quot;使用demo: `EdeverClient`&quot;">​</a></h2><p><code>EdeverClient</code>仓库位于<a href="https://github.com/HerbertHe/EdeverClient" target="_blank" rel="noreferrer">GitHub</a>和<a href="https://gitee.com/HerbertHe/EdeverClient" target="_blank" rel="noreferrer">Gitee</a>，它是基于<code>Eraac</code>和<code>Gitee OpenAPI</code>的便于了解系列所有框架实时动态的PC端。目前只提供了win x64的版本，因为没有Mac，如果能参与构建就很感谢了！</p><p>下面是使用界面:</p><img src="'+r+'"><p>自带了自动更新，无需再考虑版本更新问题，请在 <a href="https://github.com/HerbertHe/EdeverClient" target="_blank" rel="noreferrer">GitHub</a> 的release中获取（因为Gitee限制了附件大小，实在没有办法）</p><p>这同时是一个demo基于<code>React Hooks</code>开发，仓库里的代码开源，哪里不会看哪里比文档更直观。</p><h2 id="写在后面的" tabindex="-1">写在后面的 <a class="header-anchor" href="#写在后面的" aria-label="Permalink to &quot;写在后面的&quot;">​</a></h2><p>作者大三，同时也是考研狗，不是科班出身，更新框架可能有时候会慢一点，欢迎使用，欢迎pr，issues，如果能给个star那就是最好的鼓励了！有任何问题都可以issues。</p>',25),n=[d];function l(s,i,h,p,u,_){return t(),a("div",null,n)}const f=e(c,[["render",l]]);export{m as __pageData,f as default};
