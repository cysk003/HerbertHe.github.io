import{_ as s,c as o,m as e,a,a6 as t,o as d}from"./chunks/framework.DqpHdag1.js";const k=JSON.parse('{"title":"The TEXbook 知识点总结","description":"","frontmatter":{"title":"The TEXbook 知识点总结","date":"2021-12-20T12:26:05.000Z","tags":["TeX"],"categories":[],"toc":true},"headers":[],"relativePath":"posts/zh/TheTEXbook知识点总结.md","filePath":"posts/zh/TheTEXbook知识点总结.md"}'),n={name:"posts/zh/TheTEXbook知识点总结.md"},l=t(`<h2 id="阅读背景" tabindex="-1">阅读背景 <a class="header-anchor" href="#阅读背景" aria-label="Permalink to &quot;阅读背景&quot;">​</a></h2><p>《The TEXbook》是由 TeX 作者 DONALD E. KNUTH 编写的一本关于 TeX 设计的书, 介绍了 TeX 在设计时所考虑到的细节。OLeX 在词法分析和语法部分需要仔细研究此部分的内容, 从而消除对 TeX 的分析差异。(之前都是针对大量模板进行的实现, 多多少少会有兼容性和语法忽略的问题)</p><p>TeX 是一门注重排版的语言, 并且让用户不用过度关心于排版本身。本篇博客将注重于对 TeX 令人疑惑的细节探索, 追求在语法上和原理上总结 TeX 这门语言的 “奇异” 之处。</p><h2 id="排版" tabindex="-1">排版 <a class="header-anchor" href="#排版" aria-label="Permalink to &quot;排版&quot;">​</a></h2><p>书籍与普通的排版并不完全相同, 尤其是在符号的差别上, 计算机的 ASCII 码并不是专门为书籍出版所发明, 比如 <strong>引号</strong> 有左引号、右引号、无方向引号... 因此, TeX 在此方面做了很多的考虑。</p><p>比如双引号 <code>“</code> 可以输入为 <code>‘‘</code>, <code>”</code> 可以输入为 <code>’’</code></p><p>连字符(-) <code>-</code>、短破折号(-) <code>--</code>、破折号(——) <code>---</code>、减号(-) <code>$-$</code>, 这四个符号其实并不一样。TeX 会完全自己解决这个问题, 而用户并不必要担心。</p><p>TeX 可以通过 <code>\\lq</code> 和 <code>\\rq</code> 键入左右引号。为了键入 <code>’”</code> 并且消除歧义, 使单双引号间距不过大或过小, 可以键入 <code>’\\thinspace’’</code> 得到想要的结果。</p><h2 id="tex-控制系列" tabindex="-1">TeX 控制系列 <a class="header-anchor" href="#tex-控制系列" aria-label="Permalink to &quot;TeX 控制系列&quot;">​</a></h2><p>键盘可以输入的字符比较少, 为了解决这个问题 TeX 使用反斜杠 <code>\\</code> 进行 “转义”。举个例子：</p><div class="language-tex line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">tex</span><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#ECEFF4;">\\</span><span style="color:#88C0D0;">input</span><span style="color:#D8DEE9FF;"> MS</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>上面这行命令的意思为: 读取 <code>MS.tex</code> 文件, <code>\\input</code> 就是一个控制系列(命令), 再举个例子:</p><div class="language-tex line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">tex</span><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#D8DEE9FF;">George P</span><span style="color:#ECEFF4;">\\</span><span style="color:#EBCB8B;">’</span><span style="color:#D8DEE9FF;">olya</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>渲染为: George Pólya</p><p>控制系列类型:</p><ul><li>第一类: <code>\\input</code>; 由 <code>\\ + 多个字母 + 空格或非字母字符</code>, TeX 一般把 <code>[a-zA-Z]</code> 看作字母, 数字 <code>[0-9]</code> 并不看作字母 (OLeX 在实现上进行了差异化处理, 未严格按照 TeX 进行实现)</li><li>第二类: <code>\\’</code>; 由 <code>\\ + 一个单个非字母组成</code>, 区别是不必将控制系列与后面的字母分开, <strong>第二类控制系列在转义符后面永远只有一个符号!</strong></li></ul><p>第一类控制系列后面的空格会被忽略掉, 并不看作为 “实际” 空格。<strong>但是, 出现在第二类控制系列后面会看作是实际空格</strong>。</p><p><strong>TeX 把多个连续空格看作单个空格</strong>。键入控制空格解决此问题 <code>\\ (控制空格)</code></p><p><strong>TeX 把 <code>&lt;return&gt;</code> 看作同 <code>\\ (控制空格)</code></strong>, 控制空格属于第二类控制系列。</p><blockquote><p>TeX 的第二类控制系列的实现在 OLeX 中也没有严格实现, OLeX 借助于 HTML 和一部分的 SVG 进行实现, 所以并没有完全严格按照 TeX 的规范, 为了消除 TeX 本身可能语法带来的歧义导致给用户带来心智负担。</p></blockquote><p>TeX 大约能执行900个控制系列, 是 TeX 内置语汇的一部分。(OLeX 通过自行设计渲染器结构对内置语汇和宏包进行统一实现)。需要注意的是, TeX 的控制系列是大小写敏感的, 并且是一一对应的映射关系。大约 300 个控制系列为 <em>原始控制系列</em>。</p><p>TeX 的高级控制系列可以进行计算 (OLeX 或许在更远期的规划里面, 会对此部分的内容进行实现。)</p><p><code>\\show\\input</code> -&gt; <code>\\input=\\input</code>, <code>\\show\\thinspace</code></p><p>-&gt;</p><div class="language-text line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki nord vp-code"><code><span class="line"><span>&gt; \\thinspace=macro:</span></span>
<span class="line"><span>-&gt; \\kern .16667em .</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>\\show</code> 的结果被保存在 log 文件中。</p><p>plain TeX 大约有 600 个基本控制系列, 加上 300 个左右的原始控制系列, 构成了TeX 基本的文本排版控制。</p><h2 id="字体" tabindex="-1">字体 <a class="header-anchor" href="#字体" aria-label="Permalink to &quot;字体&quot;">​</a></h2><p>默认情况下, 不定义其他字体将使用 <strong>roman</strong> 字体。</p><div class="language-text line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki nord vp-code"><code><span class="line"><span>\\rm --&gt; Roman</span></span>
<span class="line"><span>\\sl --&gt; Slanted</span></span>
<span class="line"><span>\\it --&gt; Italic</span></span>
<span class="line"><span>\\tt --&gt; Typewriter</span></span>
<span class="line"><span>\\bf --&gt; Bold</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>字体的外形会随着大小而改变, 单位设计使用 points(即pt)。</p><div class="language-text line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki nord vp-code"><code><span class="line"><span>10 points --&gt; \\tenrm</span></span>
<span class="line"><span>9 points --&gt; \\ninerm</span></span>
<span class="line"><span>10 points slanted --&gt; \\tensl</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>对于字体名称的处理, <code>\\font\\cs=&lt;external font name&gt;</code> 把一个特殊字体的有关信息载入内存; 在控制系列 <code>\\cs</code> 将在排版时选择那个字体。Plain TeX 最初只定义了 16 个字体, 可以使用 <code>\\font</code> 把系统字体库中字体为 TeX 所用。</p><p>因为对于字体设计来说, 随着字号的不同并不是单纯的放大或缩小, 因此放缩字体还是存在与调整字号大小不同之意义的。通过 <code>\\font\\cs=&lt;external font name&gt; at &lt;desired size&gt;</code> 命令实现。</p><p>另一种方法是, 相对于设计尺寸给出放大因子。规定为整数, 等于放大比例乘上 1000.1200 即是放大 1.2 倍。<code>\\font\\manifiedfiverm=cmr5 scaled 2000</code>。Plain TeX 提供了缩略命令, <code>\\magstep0</code> 放大因子为 1000、<code>\\magstep1</code> 放大因子为 1200, <code>\\magstep2</code> 为 1440 ... <code>\\magstep5</code></p>`,35),c=e("code",null,"\\magstephalf",-1),p={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},r={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.225ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.821ex",height:"2.398ex",role:"img",focusable:"false",viewBox:"0 -960.5 2131 1060","aria-hidden":"true"},i=t('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msqrt"><g transform="translate(853,0)"><g data-mml-node="mn"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="stroke-width:3;"></path><path data-c="2E" d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z" transform="translate(500,0)" style="stroke-width:3;"></path><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z" transform="translate(778,0)" style="stroke-width:3;"></path></g></g><g data-mml-node="mo" transform="translate(0,100.5)"><path data-c="221A" d="M95 178Q89 178 81 186T72 200T103 230T169 280T207 309Q209 311 212 311H213Q219 311 227 294T281 177Q300 134 312 108L397 -77Q398 -77 501 136T707 565T814 786Q820 800 834 800Q841 800 846 794T853 782V776L620 293L385 -193Q381 -200 366 -200Q357 -200 354 -197Q352 -195 256 15L160 225L144 214Q129 202 113 190T95 178Z" style="stroke-width:3;"></path></g><rect width="1278" height="60" x="853" y="840.5"></rect></g></g></g>',1),h=[i],T=e("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("msqrt",null,[e("mn",null,"1.2")])])],-1),u=t('<h2 id="编组" tabindex="-1">编组 <a class="header-anchor" href="#编组" aria-label="Permalink to &quot;编组&quot;">​</a></h2><p>编组即是使用一对 <code>{}</code> 对内容进行包围的操作, 实现隔绝渲染环境, OLeX 对编组进行了实现。但是为了更好的歧义消除效果, 对于 OLeX 来说, 还是更推荐使用 <code>\\CommandName{}</code> 的形式, 会在语法上对非控制系列分组进行<strong>考虑实现</strong>。</p><p>类似于 <code>{\\it centered}</code> 这种组内语句, <code>\\it</code> 对其**后面组内的文本渲染(局部作用域)**都起作用, 这一点需要注意。</p><blockquote><p>需要注意: TeX 里面有个控制系列 <code>\\/</code> 可以作为 unslanted 转化过渡。</p></blockquote><p><strong>编组还有一个作用: 将文本的多个单词看作一个单一对象!</strong>(OLeX 在词法分析上已经对此部分进行了实现, 需要修改语法分析部分, 并且对不正确编组进行修正)</p><p><strong>编组创造了局部作用域的环境。</strong> 有时候为了突破当前局部作用域, 可以通过定义加上前缀 <code>\\global</code> 而实现。例如, TeX 把当前页码放在一个叫 <code>\\count0</code> 的寄存器中, 输出一页增加页数。放在组中可以避免上下文影响; 但是对于输出来说 <code>\\count0</code> 为局部变量, 会产生掩盖, 命令 <code>\\global\\advance\\count0 by 1</code> 可以实现组内生命周期结束, 对寄存器进行保留。<code>\\global</code> 使其后紧接的定义适用在所有存在的组, 无所谓深度。</p><blockquote><p>OLeX 在生命周期通过上下文对此特性进行实现, 并且通过上下文进行传递。</p></blockquote><p>除了上述模块结构的方法, 另一种方法为原始的 <code>\\begingroup</code> <code>\\endgroup</code>, 但需要保证实际执行文本必须是嵌套组, 组不能交叉!</p><p>定义控制系列 <code>\\beginthe&lt;block name&gt;</code> <code>\\endthe&lt;block name&gt;</code>, 只有嵌套才是合法的。</p><h2 id="运行-tex-跳过此部分" tabindex="-1">运行 TeX (跳过此部分) <a class="header-anchor" href="#运行-tex-跳过此部分" aria-label="Permalink to &quot;运行 TeX (跳过此部分)&quot;">​</a></h2><p>运行 TeX 程序会生成一个 <code>.dvi</code> 文件, 不依赖于任何设备, 可以在几乎所有的印刷设备打印出来。</p><blockquote><p><code>~</code> 称为<strong>带子</strong>, (OLeX 暂不对此部分进行实现), 对应书 p17~28。</p></blockquote><h2 id="tex-工作原理-跳过实现" tabindex="-1">TeX 工作原理 (跳过实现) <a class="header-anchor" href="#tex-工作原理-跳过实现" aria-label="Permalink to &quot;TeX 工作原理 (跳过实现)&quot;">​</a></h2><ul><li>一个 <code>&lt;return&gt;</code> 与一个空格类似</li><li>一行中的两个空格看作一个 (合并空格操作)</li><li>一个空行表示一段的结束</li></ul><blockquote><p>上面的规则并不准确</p></blockquote><p>TeX 可以见到直接由键盘输入的字符行中字符有 256 个, 可以分为 16 类:</p><table><thead><tr><th>类别</th><th style="text-align:left;">意义</th><th>字符</th></tr></thead><tbody><tr><td>0</td><td style="text-align:left;">转义符</td><td><code>\\</code></td></tr><tr><td>1</td><td style="text-align:left;">组开始</td><td><code>{</code></td></tr><tr><td>2</td><td style="text-align:left;">组结束</td><td><code>}</code></td></tr><tr><td>3</td><td style="text-align:left;">数学环境</td><td><code>$</code></td></tr><tr><td>4</td><td style="text-align:left;">表格对齐</td><td><code>&amp;</code></td></tr><tr><td>5</td><td style="text-align:left;">换行</td><td><code>&lt;return&gt;</code></td></tr><tr><td>6</td><td style="text-align:left;">参数</td><td><code>#</code></td></tr><tr><td>7</td><td style="text-align:left;">上标</td><td><code>^</code></td></tr><tr><td>8</td><td style="text-align:left;">下标</td><td><code>_</code></td></tr><tr><td>9</td><td style="text-align:left;">可忽略字符</td><td><code>&lt;null&gt;</code></td></tr><tr><td>10</td><td style="text-align:left;">空格</td><td><code></code></td></tr><tr><td>11</td><td style="text-align:left;">字母</td><td><code>[a-zA-Z]</code></td></tr><tr><td>12</td><td style="text-align:left;">其他字符</td><td>不在上下文的其他字符</td></tr><tr><td>13</td><td style="text-align:left;">活动符</td><td><code>~</code></td></tr><tr><td>14</td><td style="text-align:left;">注释符</td><td><code>%</code></td></tr><tr><td>15</td><td style="text-align:left;">无用符</td><td><code>&lt;delete&gt;</code></td></tr></tbody></table><blockquote><p>OLeX 支持的字符远超上述所述内容, 换行使用 <code>\\n</code> 规范化解决了 CRLF 的问题。</p></blockquote><h2 id="字符输入" tabindex="-1">字符输入 <a class="header-anchor" href="#字符输入" aria-label="Permalink to &quot;字符输入&quot;">​</a></h2><p>TeX 通过 <code>%</code> 对文本进行注释, 通过 <code>\\%</code> 键入 <code>%</code>。</p><p>TeX 可以通过 <code>\\char&lt;number&gt;</code> (number: 0~255) + 空格, 得到相应的字符。比如 <code>\\%=\\char37</code>, TeX 内部表示字符基于 ASCII 码, 说到底还是通过**“特殊”**的控制系列</p>',21);function g(m,b,x,_,X,f){return d(),o("div",null,[l,e("p",null,[c,a(" 放大 "),e("mjx-container",p,[(d(),o("svg",r,h)),T]),a(" 倍。")]),u])}const v=s(n,[["render",g]]);export{k as __pageData,v as default};
