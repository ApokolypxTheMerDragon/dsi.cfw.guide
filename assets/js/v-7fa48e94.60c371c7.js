"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7354],{6854:(e,i,l)=>{l.r(i),l.d(i,{data:()=>t});const t={key:"v-7fa48e94",path:"/zh_CN/launching-the-exploit.html",title:"启动漏洞",lang:"zh-CN",frontmatter:{title:"启动漏洞"},excerpt:"",headers:[{level:2,title:"要求",slug:"要求",children:[]},{level:2,title:"第一节 - SD 卡设置",slug:"第一节-sd-卡设置",children:[{level:3,title:"Memory Pit",slug:"memory-pit",children:[]},{level:3,title:"TWiLight Menu++",slug:"twilight-menu",children:[]}]},{level:2,title:"第二节——运行漏洞",slug:"第二节——运行漏洞",children:[]},{level:2,title:"第三节 - 配置 TWiLightMenu++",slug:"第三节-配置-twilightmenu",children:[]}],filePathRelative:"zh_CN/launching-the-exploit.md",git:{updatedTime:1640021939e3,contributors:[{name:"emiyl",email:"me@emiyl.com",commits:1}]}}},4929:(e,i,l)=>{l.r(i),l.d(i,{default:()=>$});var t=l(6252);const n=(0,t._)("p",null,"我们首先准备好SD卡来启动漏洞。 对于大多数用户，我们建议用一个叫做“Memory Pit”的漏洞，是一个利用Nintendo DSi Camera（iQue DSi 趣照）应用在处理数据时存在的漏洞实现的。",-1),a=(0,t._)("p",null,"运行这个漏洞，它就会引导进入 TWiLight Menu++ ，一个DSi菜单的自制替换版本。",-1),r=(0,t._)("h2",{id:"要求",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#要求","aria-hidden":"true"},"#"),(0,t.Uk)(" 要求")],-1),o=(0,t._)("li",null,"一种将下载好的文件复制进 SD 卡的方法",-1),u=(0,t.Uk)("可以提取档案的应用程序，例如 "),s={href:"https://www.7-zip.org/",target:"_blank",rel:"noopener noreferrer"},h=(0,t.Uk)("7-Zip"),d=(0,t.Uk)(" (Windows) 或 "),c={href:"https://apps.apple.com/cn/app/the-unarchiver/id425424353",target:"_blank",rel:"noopener noreferrer"},p=(0,t.Uk)("The Unarchiver"),m=(0,t.Uk)(" (macOS)"),_=(0,t.uE)('<h2 id="第一节-sd-卡设置" tabindex="-1"><a class="header-anchor" href="#第一节-sd-卡设置" aria-hidden="true">#</a> 第一节 - SD 卡设置</h2><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>确保你的SD卡已经 <a href="sd-card-setup">正确格式化</a></p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>正在使用Windows、Linux或 macOS 设备？ 正在使用Windows、Linux或 macOS 设备？ 使用 <a href="lazy-dsi-downloader">Lazy DSi Downloader</a> 来自动设置您的 SD 卡。</p></div><h3 id="memory-pit" tabindex="-1"><a class="header-anchor" href="#memory-pit" aria-hidden="true">#</a> Memory Pit</h3>',4),g=(0,t._)("li",null,[(0,t.Uk)("Ensure that the Nintendo DSi Camera application does not show the tutorial after launch "),(0,t._)("ul",null,[(0,t._)("li",null,[(0,t.Uk)("If it does show, go through it until you're done "),(0,t._)("ul",null,[(0,t._)("li",null,[(0,t.Uk)("If the tutorial crashes as you try to complete it, your Nintendo DSi camera hardware is likely broken in some way. Please use an "),(0,t._)("a",{href:"alternate-exploits"},"alternate exploit"),(0,t.Uk)(" Please use an "),(0,t._)("a",{href:"alternate-exploits"},"alternate exploit")])])])])],-1),k=(0,t.Uk)("下载与你的 Nintendo DSi 系统版本和区域对应的 Memory Pit 二进制文件 "),f=(0,t.Uk)("for versions "),S={href:"https://github.com/emiyl/dsi.cfw.guide/raw/master/assets/files/memory_pit/256/pit.bin",target:"_blank",rel:"noopener noreferrer"},U=(0,t.Uk)("1.0 - 1.3 (USA, EUR, AUS, JPN)"),w=(0,t.Uk)("for versions "),D={href:"https://github.com/emiyl/dsi.cfw.guide/raw/master/assets/files/memory_pit/768_1024/pit.bin",target:"_blank",rel:"noopener noreferrer"},b=(0,t.Uk)("1.4 - 1.4.5 (USA, EUR, AUS, JPN)"),y=(0,t.Uk)("all versions "),W={href:"https://github.com/emiyl/dsi.cfw.guide/raw/master/assets/files/memory_pit/256/pit.bin",target:"_blank",rel:"noopener noreferrer"},v=(0,t.Uk)("(KOR, CHN)"),N=(0,t._)("li",null,[(0,t.Uk)("请确保您的 SD 卡上存在以下路径： "),(0,t._)("code",null,"sd:/private/ds/app/484E494A/"),(0,t._)("ul",null,[(0,t._)("li",null,"如果您以前已经通过Nintendo DSi 相机应用程序将照片复制到SD卡，此路径将已存在。 如果是，您不需要删除并重新创建"),(0,t._)("li",null,"如果路径不存在，请重新创建文件夹")])],-1),M=(0,t._)("li",null,[(0,t.Uk)("如果该路径中已经有 "),(0,t._)("code",null,"pit.bin"),(0,t.Uk)(" 文件，请备份该文件")],-1),T=(0,t._)("li",null,[(0,t.Uk)("将 Memory Pit 的 "),(0,t._)("code",null,"pit.bin"),(0,t.Uk)(" 文件移动到文件夹中")],-1),L={class:"custom-container tip"},x=(0,t._)("p",{class:"custom-container-title"},"TIP",-1),P=(0,t.Uk)("想要了解我们为什么要这样做，请查看 "),z=(0,t.Uk)("常见问题"),C=(0,t.Uk)("。"),A=(0,t._)("h3",{id:"twilight-menu",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#twilight-menu","aria-hidden":"true"},"#"),(0,t.Uk)(" TWiLight Menu++")],-1),O=(0,t.Uk)("下载最新版本的 "),R={href:"https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z",target:"_blank",rel:"noopener noreferrer"},E=(0,t.Uk)("TWiLight Menu++"),I=(0,t._)("li",null,[(0,t.Uk)("将 "),(0,t._)("code",null,"TWiLightMenu-DSi.7z"),(0,t.Uk)(" 中的 "),(0,t._)("code",null,"_nds"),(0,t.Uk)(" 文件夹解压到SD卡的根目录")],-1),q=(0,t._)("li",null,[(0,t.Uk)("将"),(0,t._)("code",null,"TWiLightMenu-DSi.7z"),(0,t.Uk)(" 中的 "),(0,t._)("code",null,"BOOT.NDS"),(0,t.Uk)("文件解压到SD卡的根目录")],-1),G=(0,t.uE)('<h2 id="第二节——运行漏洞" tabindex="-1"><a class="header-anchor" href="#第二节——运行漏洞" aria-hidden="true">#</a> 第二节——运行漏洞</h2><ol><li>请确保您的 SD 卡插入了您的Nintendo DSi</li><li>打开你的 Nintendo DSi，并启动 DSi 相机程序</li><li>选择右上角的 SD 卡图标 <ul><li>如果你收到一条 SD 卡未插入的提示。请更换其他 SD 卡</li><li>如果你收到一条 SD 卡无法使用的提示，请确保 SD 卡<a href="sd-card-setup">被正确格式化</a></li></ul></li><li>选择 SD 卡的相册 <ul><li>若Memory Pit被正确复制，此时屏幕将紫红一闪</li></ul></li></ol>',2),H={class:"custom-container warning"},Y=(0,t._)("p",{class:"custom-container-title"},"WARNING",-1),Z=(0,t.Uk)("如果你的 SD 卡根目录下没有 TWiLight Menu++ 的 "),B=(0,t._)("code",null,"BOOT.NDS",-1),J=(0,t.Uk)("，上屏幕将变成绿色。 Follow the "),F=(0,t._)("a",{href:"launching-the-exploit#twilight-menu"},"TWiLight Menu++ setup guide",-1),K=(0,t.Uk)(" again. 重新进行 "),Q=(0,t.Uk)("TWiLight Menu++ 设置步骤"),X=(0,t.Uk)("."),j=(0,t.uE)('<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If you enter the SD card camera album and nothing unusual happens, ensure that you downloaded the correct version of Memory Pit for your version and region, and placed it into the correct folder on your SD card.</p></div><p>You should now see the TWiLight Menu++ language selection.</p><h2 id="第三节-配置-twilightmenu" tabindex="-1"><a class="header-anchor" href="#第三节-配置-twilightmenu" aria-hidden="true">#</a> 第三节 - 配置 TWiLightMenu++</h2><ol><li>When prompted, set your preferred language and region</li><li>当你进入 TWiLightMenu++ 后，按 SELECT键切换到经典DS菜单</li><li>点触最底部中间的按钮打开设置</li><li>Use the <kbd class="l">L</kbd> / <kbd class="r">R</kbd> or <kbd class="face">X</kbd> / <kbd class="face">Y</kbd> buttons to switch over to the &quot;Misc. settings&quot; page</li><li>切换&quot;SysNAND Region&quot;到您的机器的区域</li></ol><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>下一步：<a href="dumping-nand">提取 NAND</a></p></div>',5),V={},$=(0,l(3744).Z)(V,[["render",function(e,i){const l=(0,t.up)("OutboundLink"),V=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[n,a,r,(0,t._)("ul",null,[o,(0,t._)("li",null,[u,(0,t._)("a",s,[h,(0,t.Wm)(l)]),d,(0,t._)("a",c,[p,(0,t.Wm)(l)]),m])]),_,(0,t._)("ol",null,[g,(0,t._)("li",null,[k,(0,t._)("ul",null,[(0,t._)("li",null,[f,(0,t._)("a",S,[U,(0,t.Wm)(l)])]),(0,t._)("li",null,[w,(0,t._)("a",D,[b,(0,t.Wm)(l)])]),(0,t._)("li",null,[y,(0,t._)("a",W,[v,(0,t.Wm)(l)])])])]),N,M,T]),(0,t._)("div",L,[x,(0,t._)("p",null,[P,(0,t.Wm)(V,{to:"/zh_CN/faq.html#what-functionality-will-i-lose-by-modding-my-system"},{default:(0,t.w5)((()=>[z])),_:1}),C])]),A,(0,t._)("ol",null,[(0,t._)("li",null,[O,(0,t._)("a",R,[E,(0,t.Wm)(l)])]),I,q]),G,(0,t._)("div",H,[Y,(0,t._)("p",null,[Z,B,J,F,K,(0,t.Wm)(V,{to:"/zh_CN/launching-the-exploit.html#twilight-menu"},{default:(0,t.w5)((()=>[Q])),_:1}),X])]),j],64)}]])},3744:(e,i)=>{i.Z=(e,i)=>{const l=e.__vccOpts||e;for(const[e,t]of i)l[e]=t;return l}}}]);