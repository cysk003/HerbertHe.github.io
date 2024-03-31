import{_ as s,c as n,o as a,a6 as l}from"./chunks/framework.DqpHdag1.js";const D=JSON.parse('{"title":"Verilog-HDL基础语法（下）","description":"","frontmatter":{"title":"Verilog-HDL基础语法（下）","date":"2019-07-19T21:50:01.000Z","toc":true,"tags":["Verilog","HDL","硬件开发","数字电子技术","FPGA"]},"headers":[],"relativePath":"posts/zh/Verilog-HDL基础语法（下）.md","filePath":"posts/zh/Verilog-HDL基础语法（下）.md"}'),p={name:"posts/zh/Verilog-HDL基础语法（下）.md"},e=l(`<h2 id="过程块" tabindex="-1">过程块 <a class="header-anchor" href="#过程块" aria-label="Permalink to &quot;过程块&quot;">​</a></h2><ul><li>initial块，只执行一次</li><li>always块，循环执行</li></ul><p>过程块中的部件：</p><ul><li>过程赋值语句</li><li>高级结构（循环，条件语句）</li><li>时序控制</li></ul><h2 id="过程赋值" tabindex="-1">过程赋值 <a class="header-anchor" href="#过程赋值" aria-label="Permalink to &quot;过程赋值&quot;">​</a></h2><p>过程赋值的对象必须是寄存器类型，过程赋值语句给wire赋值会产生错误！！</p><h2 id="过程时序控制" tabindex="-1">过程时序控制 <a class="header-anchor" href="#过程时序控制" aria-label="Permalink to &quot;过程时序控制&quot;">​</a></h2><ul><li>简单延时(#delay)：延时指定时间之后执行</li><li>边沿敏感的时序控制：@(&lt;signal&gt;)，上升沿(posedge)，下降沿(negedge)，用关键字or指定多个参数</li><li>电平敏感的时序控制：wait(&lt;expr&gt;)，expr为真时执行</li></ul><p>！！！综合工具不支持 <strong>wait语句</strong> ！！！</p><p>内容参考 <a href="https://wenku.baidu.com/view/b4a43aefaeaad1f346933f7d.html" target="_blank" rel="noreferrer">百度文库</a>，不支持综合的部分内容，略。</p><h2 id="块语句" tabindex="-1">块语句 <a class="header-anchor" href="#块语句" aria-label="Permalink to &quot;块语句&quot;">​</a></h2><ul><li>顺序块：语句置于begin和end之间，块中语句顺序执行</li><li>并行块：语句置于fork和join之间，语句并行执行（不可综合）</li></ul><h2 id="延时赋值语句-可以用于模拟寄存器交换和移位" tabindex="-1">延时赋值语句（可以用于模拟寄存器交换和移位） <a class="header-anchor" href="#延时赋值语句-可以用于模拟寄存器交换和移位" aria-label="Permalink to &quot;延时赋值语句（可以用于模拟寄存器交换和移位）&quot;">​</a></h2><div class="language-verilog line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">verilog</span><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#D8DEE9FF;">LHS </span><span style="color:#81A1C1;">=</span><span style="color:#81A1C1;"> &lt;</span><span style="color:#D8DEE9FF;">timing_control</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> RHS;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">// 举例</span></span>
<span class="line"><span style="color:#81A1C1;">begin</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    temp </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> b;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    @(</span><span style="color:#81A1C1;">posedge</span><span style="color:#D8DEE9FF;"> clk) a </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> temp;</span></span>
<span class="line"><span style="color:#81A1C1;">end</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">// 等价于</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">a </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> @(</span><span style="color:#81A1C1;">posedge</span><span style="color:#D8DEE9FF;"> clk) b;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="阻塞赋值与非阻塞赋值" tabindex="-1">阻塞赋值与非阻塞赋值 <a class="header-anchor" href="#阻塞赋值与非阻塞赋值" aria-label="Permalink to &quot;阻塞赋值与非阻塞赋值&quot;">​</a></h2><ul><li>阻塞赋值：语句结束立即完成赋值操作，前面的赋值语句完成之前，后面的语句不能被执行，使用 &quot;=&quot;</li><li>非阻塞赋值：整个过程块结束时才完成赋值操作，使用 &quot;&lt;=&quot;</li></ul><p>对比举例</p><div class="language-verilog line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">verilog</span><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;">// 非阻塞赋值</span></span>
<span class="line"><span style="color:#81A1C1;">module</span><span style="color:#D8DEE9FF;"> non_block(c, b, a, clk);</span></span>
<span class="line"><span style="color:#81A1C1;">    output</span><span style="color:#D8DEE9FF;"> c, b;</span></span>
<span class="line"><span style="color:#81A1C1;">    input</span><span style="color:#D8DEE9FF;"> a, clk;</span></span>
<span class="line"><span style="color:#81A1C1;">    reg</span><span style="color:#D8DEE9FF;"> c, b;</span></span>
<span class="line"><span style="color:#81A1C1;">    always</span><span style="color:#D8DEE9FF;"> @(</span><span style="color:#81A1C1;">posedge</span><span style="color:#D8DEE9FF;"> clk)</span></span>
<span class="line"><span style="color:#81A1C1;">        begin</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        b </span><span style="color:#81A1C1;">&lt;=</span><span style="color:#D8DEE9FF;"> a;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        c </span><span style="color:#81A1C1;">&lt;=</span><span style="color:#D8DEE9FF;"> b;</span></span>
<span class="line"><span style="color:#81A1C1;">        end</span></span>
<span class="line"><span style="color:#81A1C1;">endmodule</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">// 阻塞赋值</span></span>
<span class="line"><span style="color:#81A1C1;">module</span><span style="color:#D8DEE9FF;"> block(c, b, a, clk);</span></span>
<span class="line"><span style="color:#81A1C1;">    output</span><span style="color:#D8DEE9FF;"> c, b;</span></span>
<span class="line"><span style="color:#81A1C1;">    input</span><span style="color:#D8DEE9FF;"> a, clk;</span></span>
<span class="line"><span style="color:#81A1C1;">    reg</span><span style="color:#D8DEE9FF;"> c, b;</span></span>
<span class="line"><span style="color:#81A1C1;">    always</span><span style="color:#D8DEE9FF;"> @(</span><span style="color:#81A1C1;">posedge</span><span style="color:#D8DEE9FF;"> clk)</span></span>
<span class="line"><span style="color:#81A1C1;">        begin</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        b </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> a;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        c </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> b;</span></span>
<span class="line"><span style="color:#81A1C1;">        end</span></span>
<span class="line"><span style="color:#81A1C1;">endmodule</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">// 非阻塞赋值中c的结果为上一个时刻的b的值（旧值），阻塞赋值中c和b的值相等</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div>`,18),o=[e];function r(c,i,t,b,u,d){return a(),n("div",null,o)}const E=s(p,[["render",r]]);export{D as __pageData,E as default};
