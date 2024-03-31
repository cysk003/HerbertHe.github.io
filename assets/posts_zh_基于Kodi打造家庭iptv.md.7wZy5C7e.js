import{_ as e,c as t,o as r,a6 as o}from"./chunks/framework.DqpHdag1.js";const m=JSON.parse('{"title":"基于 Kodi 打造家庭 IPTV","description":"","frontmatter":{"title":"基于 Kodi 打造家庭 IPTV","date":"2023-11-26 17:00","toc":true,"tags":["Kodi","iptv","小米电视"]},"headers":[],"relativePath":"posts/zh/基于Kodi打造家庭iptv.md","filePath":"posts/zh/基于Kodi打造家庭iptv.md"}'),i={name:"posts/zh/基于Kodi打造家庭iptv.md"},a=o('<h2 id="写在前面的" tabindex="-1">写在前面的 <a class="header-anchor" href="#写在前面的" aria-label="Permalink to &quot;写在前面的&quot;">​</a></h2><p>随着智能电视的不断迭代，运行 Android 系统的电视设备越来越变的不纯粹，更像是一个默认为影音app入口的超大号显示设备。面对着无数的广告和数不尽的会员，更纯粹的看电视变得奢求，因此开始了基于 Kodi 的家庭 iptv 改造计划。</p><p>如果你还不知道什么是 Kodi，请参阅 <a href="https://kodi.tv/" target="_blank" rel="noreferrer">https://kodi.tv/</a> 了解这个项目</p><h2 id="开始改造" tabindex="-1">开始改造 <a class="header-anchor" href="#开始改造" aria-label="Permalink to &quot;开始改造&quot;">​</a></h2><p>改造计划分为下面的步骤，网络上有大量的教程，这里只对于关注点提供必要的流程。</p><p>本次改造计划使用小米电视，其他的 Android 电视设备大同小异。</p><h3 id="安装-kodi-至小米电视" tabindex="-1">安装 Kodi 至小米电视 <a class="header-anchor" href="#安装-kodi-至小米电视" aria-label="Permalink to &quot;安装 Kodi 至小米电视&quot;">​</a></h3><ul><li>打开小米电视 <strong>“开发者模式”</strong></li><li>打开小米电视 <strong>“允许安装未知应用”</strong> 和 <strong>“允许 adb 调试”</strong></li><li>手机安装 <strong>甲壳虫ADB助手</strong></li><li>手机下载 <strong><a href="https://kodi.tv/download/android/" target="_blank" rel="noreferrer">Kodi for Android</a> APK</strong>（根据架构选择 <strong>v20 ARMV7A</strong> 或者 <strong>v20 ARMV8A</strong>，这取决于你的电视指令集架构，在系统设置中进行查看）</li><li>打开 <strong>甲壳虫ADB助手</strong> 填写电视 <strong>IP地址</strong> 进行连接（记得电视用遥控器确认允许）</li><li>通过 <strong>甲壳虫ADB助手</strong> 向电视安装 <strong>Kodi for Android</strong> APK 应用</li></ul><p>至此，在电视上安装 Kodi 就完成了。</p><blockquote><p>需要解释的是：小米虽然在系统上限制了第三方APP的安装，但我们使用了 <strong>甲壳虫ADB助手</strong> 对电视进行操作，因为 <code>adb</code> 本身是 Android 调试桥，便于 Android 开发者对设备应用进行调试，权限比较高，小米在系统层面不对其进行限制。</p></blockquote><h3 id="对-kodi-进行配置" tabindex="-1">对 Kodi 进行配置 <a class="header-anchor" href="#对-kodi-进行配置" aria-label="Permalink to &quot;对 Kodi 进行配置&quot;">​</a></h3><p>好看的主题提升用户使用体验，所以我们对 Kodi 进行一些简单的配置。</p><blockquote><p>需要注意的是：<strong>在稳定使用之前，🙅不要将语言切换到中文！否则，会造成很大的麻烦！</strong> 教程步骤为中文翻译，请注意对应的英文选项</p></blockquote><ul><li>更改下载源</li></ul><p>Kodi 的插件托管在 GitHub 上，国内能不能连上纯粹是个玄学问题。因此我们需要对 Kodi 的插件仓库软件源进行替换，虽然 清华TUNA 和 中科大USTC 源镜像站都提供了参考文档。但是 Nexus（20）版本，无法找到对应的文件 <code>addons/repository.xbmc.org/addon.xml</code>。在查阅官方仓库源代码后发现，需要首先安装 <code>repository.xbmc.org</code> 仓库插件，这是我之前完全没想到的.</p><p>你可以通过 <a href="https://dl.jieec.cn/s/k5h6" target="_blank" rel="noreferrer">https://dl.jieec.cn/s/k5h6</a> 下载 <code>repository.xbmc.org</code> 插件，已经是修改完成了的。</p><p>下载完成之后，通过 <strong>ADB助手</strong> 上传文件至电视文件根目录，通过 <code>插件 -&gt; 从 zip 文件安装插件 -&gt; 找到对应的 zip 文件安装</code></p><p>电视遥控器按左键，对插件仓库进行更新。</p><ul><li>更改 Kodi 主题</li></ul><p>在试错很多次之后，我选择了 Arctic Horizon 2 作为 Kodi 的主题，原因无他，好看罢了。</p><p>首先，需要下载安装 <a href="https://jurialmunkey.github.io/repository.jurialmunkey/" target="_blank" rel="noreferrer">repository.jurialmunkey</a> 仓库差价，安装步骤与上面 <code>repository.xbmc.org</code> 插件完全一致。</p><p>其次，需要预先按顺序安装 <a href="https://dl.ghpig.top/https://github.com/jurialmunkey/script.module.jurialmunkey/archive/refs/tags/v0.1.17.zip" target="_blank" rel="noreferrer">script.module.jurialmunkey</a>（下载安装）、<code>script.skinvariables</code> 和 <code>plugin.video.themoviedb.helper</code>（电视上的 jurialmunkey 插件仓库搜索安装）插件，不然在下载主题的时候会报错。</p><p>然后在 <code>插件 -&gt; 从库里安装 -&gt; jurialmunkey 插件库 -&gt; look and feel -&gt; 皮肤 -&gt; Arctic Horizon 2</code> 安装即可，花费的时间不短，耐心等待。</p><ul><li>设置中文页面</li></ul><p>切换字体 <code>右上角小齿轮 -&gt; 系统设置 -&gt; UI -&gt; skin -&gt; font -&gt; CJK - Chinese/Japanese/Korean</code></p><blockquote><p>默认 CJK 是不被支持的，因此先切换字体才不会导致乱码</p></blockquote><p>切换区域 <code>regional -&gt; language -&gt; chinese(simple)</code></p><blockquote><p>设置简体中文</p></blockquote><p>至此 Kodi 的基础安装全部完成！</p><h3 id="支持-iptv" tabindex="-1">支持 IPTV <a class="header-anchor" href="#支持-iptv" aria-label="Permalink to &quot;支持 IPTV&quot;">​</a></h3><p>光有 Kodi 是不行的，还需要配置 IPTV 才能收看 Kodi 所说的 <strong>直播电视</strong>。</p><p>分为两部分：</p><ul><li>Kodi 安装客户端插件 <code>IPTV Simple Client</code></li><li>添加 <code>IPTV Simple Client</code> 配置文件</li></ul><p>安装客户端插件的流程与上面一致，通过 <code>插件 -&gt; 从库里安装 -&gt; Kodi 官方库 -&gt; PVR 客户端 -&gt; IPTV Simple Client</code> 安装即可。</p><p>配置 <code>IPTV Simple Client</code>：<code>插件的设置 -&gt; 添加附加设置</code> 分别填写 <strong>名称</strong> 、 <strong>位置选择：远程路径（互联网地址）</strong> 和 <strong>M3U播放列表URL</strong></p><p>你可以使用 <a href="https://epg.pw/test_channel_page.html" target="_blank" rel="noreferrer">https://epg.pw/test_channel_page.html</a> 提供的 m3u 服务，或者使用我维护的 <a href="https://m3u.ibert.me" target="_blank" rel="noreferrer">https://m3u.ibert.me</a> 服务</p><h2 id="关于-herberthe-iptv-sources" tabindex="-1">关于 <code>HerbertHe/iptv-sources</code> <a class="header-anchor" href="#关于-herberthe-iptv-sources" aria-label="Permalink to &quot;关于 `HerbertHe/iptv-sources`&quot;">​</a></h2><p><a href="https://github.com/HerbertHe/iptv-sources/tree/gh-pages" target="_blank" rel="noreferrer">HerbertHe/iptv-sources</a> 是 <a href="https://m3u.ibert.me" target="_blank" rel="noreferrer">https://m3u.ibert.me</a> 服务的 GitHub 开源项目，对 <a href="https://epg.pw/test_channel_page.html" target="_blank" rel="noreferrer">https://epg.pw/test_channel_page.html</a> 提供的 m3u 服务进行了过滤去重。考虑到了主要面向中国大陆用户，所以没有对所有的服务进行处理，如果有其他需要请 fork 进行二次开发。</p><p>本次改造如使用 <a href="https://m3u.ibert.me" target="_blank" rel="noreferrer">https://m3u.ibert.me</a> 服务，请关闭本地缓存，打开自动更新，并且调整更新频率为 120 分钟。</p><p>支持的 m3u 源，请参考 <a href="https://m3u.ibert.me" target="_blank" rel="noreferrer">https://m3u.ibert.me</a> 进行查看使用，每 3 个小时自动更新一次。</p><p>获取最及时的消息，请加入 Discord <a href="https://discord.gg/EawDmkpd" target="_blank" rel="noreferrer">https://discord.gg/EawDmkpd</a>，这是最及时获取更新消息的地方。</p>',41),p=[a];function n(s,l,d,c,h,g){return r(),t("div",null,p)}const b=e(i,[["render",n]]);export{m as __pageData,b as default};
