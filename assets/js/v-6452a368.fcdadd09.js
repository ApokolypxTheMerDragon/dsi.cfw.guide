"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3738],{4693:(e,n,a)=>{a.r(n),a.d(n,{data:()=>t});const t={key:"v-6452a368",path:"/fr_FR/troubleshooting.html",title:"Problèmes et dépannage",lang:"fr-FR",frontmatter:{title:"Problèmes et dépannage"},excerpt:"",headers:[{level:2,title:"Unlaunch",slug:"unlaunch",children:[{level:3,title:"Unlaunch freezes at MISMATCH IN FAT COPIES",slug:"unlaunch-freezes-at-mismatch-in-fat-copies",children:[]},{level:3,title:'Il n\'y a pas de son ou de chargement de démarrage lors du lancement de "LAUNCHER" en utilisant Unlaunch',slug:"il-n-y-a-pas-de-son-ou-de-chargement-de-demarrage-lors-du-lancement-de-launcher-en-utilisant-unlaunch",children:[]},{level:3,title:"Powering on only shows a black screen after installing Unlaunch",slug:"powering-on-only-shows-a-black-screen-after-installing-unlaunch",children:[]},{level:3,title:"After installing Unlaunch, I'm stuck booting into an application",slug:"after-installing-unlaunch-i-m-stuck-booting-into-an-application",children:[]},{level:3,title:"Other Unlaunch problems",slug:"other-unlaunch-problems",children:[]}]},{level:2,title:"TWiLight Menu++  troubleshooting",slug:"twilight-menu-troubleshooting",children:[]},{level:2,title:"Further assistance",slug:"further-assistance",children:[]}],filePathRelative:"fr_FR/troubleshooting.md",git:{updatedTime:164329047e4}}},7380:(e,n,a)=>{a.r(n),a.d(n,{default:()=>z});var t=a(6252);const l=(0,t.uE)('<h2 id="unlaunch" tabindex="-1"><a class="header-anchor" href="#unlaunch" aria-hidden="true">#</a> Unlaunch</h2><h3 id="unlaunch-freezes-at-mismatch-in-fat-copies" tabindex="-1"><a class="header-anchor" href="#unlaunch-freezes-at-mismatch-in-fat-copies" aria-hidden="true">#</a> Unlaunch freezes at <code>MISMATCH IN FAT COPIES</code></h3><p>twlnf a un bug critique où il ne met pas correctement à jour la NAND entière après l&#39;avoir modifié, ce qui fait que certains homebrews (comme l&#39;installateur d&#39;Unlaunch) montrent une erreur.</p><p>Bien qu&#39;il soit possible d&#39;y remédier, la méthode pour le faire n&#39;est pas fixée et varie largement d&#39;un système à l&#39;autre. Une méthode consiste à supprimer tous les titres DSiWare installé via twlnf dans le passé, mais il a également été signalé que leur déplacement à <em>tous</em> sur la carte SD et de nouveau sur le système peut aider dans certains cas.</p><p>If you have downgraded the system in the past, updating back to v1.4.5 (or v1.4.6 if your DSi region is Chinese or Korean) can help fix this bug as well.</p><p>If the issue persists, try this:</p>',6),r=(0,t.Uk)("Mount your NAND backup with "),i={href:"https://github.com/ihaveamac/ninfs/releases",target:"_blank",rel:"noopener noreferrer"},o=(0,t.Uk)("ninfs"),s=(0,t.Uk)(", and enable the "),u=(0,t._)("code",null,"Allow writing",-1),h=(0,t.Uk)(" option"),c=(0,t.Uk)("Once your NAND backup is mounted, mount "),d=(0,t._)("code",null,"twl_main.img",-1),g=(0,t.Uk)(". If you are using Windows, you can use "),p={href:"https://www.osforensics.com/tools/mount-disk-images.html",target:"_blank",rel:"noopener noreferrer"},m=(0,t.Uk)("OSFMount"),f=(0,t.Uk)(" to mount the image"),k=(0,t._)("li",null,[(0,t.Uk)("Unmount "),(0,t._)("code",null,"twl_main.img"),(0,t.Uk)(", then unmount the NAND backup in ninfs If the NAND was saved, follow "),(0,t._)("a",{href:"restoring-nand"},"Restoring NAND"),(0,t.Uk)(" and continue with "),(0,t._)("a",{href:"installing-unlaunch"},"Installing Unlaunch"),(0,t.Uk)(".")],-1),b=(0,t._)("h3",{id:"il-n-y-a-pas-de-son-ou-de-chargement-de-demarrage-lors-du-lancement-de-launcher-en-utilisant-unlaunch",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#il-n-y-a-pas-de-son-ou-de-chargement-de-demarrage-lors-du-lancement-de-launcher-en-utilisant-unlaunch","aria-hidden":"true"},"#"),(0,t.Uk)(' Il n\'y a pas de son ou de chargement de démarrage lors du lancement de "LAUNCHER" en utilisant Unlaunch')],-1),U=(0,t.Uk)("Le développeur de Unlaunch (nocash) a intentionnellement désactivé le fond sonore et le chargement de démarrage par défaut. You can regain these effects by "),w=(0,t._)("a",{href:"installing-unlaunch"},"reinstalling Unlaunch",-1),y=(0,t.Uk)(" using TWiLight Menu++, or by using "),_={href:"https://wiki.ds-homebrew.com/hiyacfw/installing",target:"_blank",rel:"noopener noreferrer"},v=(0,t.Uk)("hiyaCFW"),N=(0,t.Uk)("."),D=(0,t._)("h3",{id:"powering-on-only-shows-a-black-screen-after-installing-unlaunch",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#powering-on-only-shows-a-black-screen-after-installing-unlaunch","aria-hidden":"true"},"#"),(0,t.Uk)(" Powering on only shows a black screen after installing Unlaunch")],-1),I=(0,t.Uk)("Try ejecting the SD card and powering the console on again. If it still only shows a black screen, you may need to flash your NAND via a "),A={href:"https://wiki.ds-homebrew.com/ds-index/hardmod",target:"_blank",rel:"noopener noreferrer"},T=(0,t.Uk)("hardmod"),S=(0,t.Uk)("."),O=(0,t.uE)('<h3 id="after-installing-unlaunch-i-m-stuck-booting-into-an-application" tabindex="-1"><a class="header-anchor" href="#after-installing-unlaunch-i-m-stuck-booting-into-an-application" aria-hidden="true">#</a> After installing Unlaunch, I&#39;m stuck booting into an application</h3><p>This was likely caused by choosing the wrong app for the <code>NO BUTTON</code> option in Unlaunch. Hold <kbd class="face">A</kbd> + <kbd class="face">B</kbd> while starting the console, go to <code>OPTIONS</code>, and set <code>NO BUTTON</code> to whatever your preference is.</p><h3 id="other-unlaunch-problems" tabindex="-1"><a class="header-anchor" href="#other-unlaunch-problems" aria-hidden="true">#</a> Other Unlaunch problems</h3><p>If Unlaunch displays <code>Clusters too large</code>, <code>Bad VBR</code>, <code>Bad MBR</code>, or doesn&#39;t display any applications while the SD card is inserted, your SD card likely wasn&#39;t formatted correctly. Re-follow <a href="sd-card-setup">SD Card Setup</a>.</p><h2 id="twilight-menu-troubleshooting" tabindex="-1"><a class="header-anchor" href="#twilight-menu-troubleshooting" aria-hidden="true">#</a> TWiLight Menu++ troubleshooting</h2>',5),W=(0,t.Uk)("For general TWiLight Menu++ troubleshooting, see its "),x={href:"https://wiki.ds-homebrew.com/twilightmenu/faq",target:"_blank",rel:"noopener noreferrer"},C=(0,t.Uk)("FAQ & Troubleshooting"),M=(0,t.Uk)(" page on the DS-Homebrew Wiki."),F=(0,t._)("h2",{id:"further-assistance",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#further-assistance","aria-hidden":"true"},"#"),(0,t.Uk)(" Further assistance")],-1),R=(0,t.Uk)("If you have encountered an issue that is not solved here, or one that persists despite the given solutions, ask for assistance in the "),B={href:"https://discord.gg/yD3spjv",target:"_blank",rel:"noopener noreferrer"},H=(0,t.Uk)("DS"),L=(0,t._)("sup",null,"(i)",-1),P=(0,t.Uk)(" Mode Hacking!"),q=(0,t.Uk)(" Discord server."),E={},z=(0,a(3744).Z)(E,[["render",function(e,n){const a=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[l,(0,t._)("ol",null,[(0,t._)("li",null,[r,(0,t._)("a",i,[o,(0,t.Wm)(a)]),s,u,h]),(0,t._)("li",null,[c,d,g,(0,t._)("a",p,[m,(0,t.Wm)(a)]),f]),k]),b,(0,t._)("p",null,[U,w,y,(0,t._)("a",_,[v,(0,t.Wm)(a)]),N]),D,(0,t._)("p",null,[I,(0,t._)("a",A,[T,(0,t.Wm)(a)]),S]),O,(0,t._)("p",null,[W,(0,t._)("a",x,[C,(0,t.Wm)(a)]),M]),F,(0,t._)("p",null,[R,(0,t._)("a",B,[H,L,P,(0,t.Wm)(a)]),q])],64)}]])},3744:(e,n)=>{n.Z=(e,n)=>{const a=e.__vccOpts||e;for(const[e,t]of n)a[e]=t;return a}}}]);