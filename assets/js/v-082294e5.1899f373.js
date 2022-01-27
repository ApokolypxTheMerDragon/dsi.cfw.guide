"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7414],{1701:(e,a,i)=>{i.r(a),i.d(a,{data:()=>n});const n={key:"v-082294e5",path:"/ro_RO/restoring-nand.html",title:"Restaurarea unei copii NAND",lang:"ro-RO",frontmatter:{title:"Restaurarea unei copii NAND"},excerpt:"",headers:[{level:2,title:"Cerințe",slug:"cerinte",children:[]},{level:2,title:"Crearea unei copii BIOS pentru a o folosi în no$gba",slug:"crearea-unei-copii-bios-pentru-a-o-folosi-in-no-gba",children:[]},{level:2,title:"Testarea copiei tale NAND",slug:"testarea-copiei-tale-nand",children:[]},{level:2,title:"Dezinstalarea Unlaunch de pe copia NAND (opțional)",slug:"dezinstalarea-unlaunch-de-pe-copia-nand-optional",children:[]},{level:2,title:"Instalarea copiei tale NAND (Software)",slug:"instalarea-copiei-tale-nand-software",children:[]},{level:2,title:"Instalarea copiei tale NAND (Hardmod)",slug:"instalarea-copiei-tale-nand-hardmod",children:[]}],filePathRelative:"ro_RO/restoring-nand.md",git:{updatedTime:1643294864e3}}},8293:(e,a,i)=>{i.r(a),i.d(a,{default:()=>J});var n=i(6252);const r=(0,n._)("div",{class:"custom-container danger"},[(0,n._)("p",{class:"custom-container-title"},"DANGER"),(0,n._)("p",null,[(0,n.Uk)("ATENŢIE! Aceasta este "),(0,n._)("em",null,[(0,n._)("strong",null,"periculoasă")]),(0,n.Uk)(". Chiar și urmărirea acestor pași cu exactitate are potențialul de a cauza un brick consolei DSi deoarece NAND-ul este de calitate foarte joasă, în special dacă îl instalezi de mai multe ori! Aceasta ar trebui folosită doar în ultimă instanță!")])],-1),l=(0,n._)("div",{class:"custom-container tip"},[(0,n._)("p",{class:"custom-container-title"},"TIP"),(0,n._)("p",null,[(0,n.Uk)("Nu sări peste "),(0,n._)("em",null,"nimic"),(0,n.Uk)(" de pe această pagină, orice greșeală mărește șansele de brick.")])],-1),o=(0,n._)("p",null,"Pentru început, câteva alternative mai sigure la motivul pentru care vrei să faci asta:",-1),t=(0,n._)("li",null,"Instalarea jocurilor DSiWare se poate face folosind hiyaCFW sau TWiLight Menu++",-1),c=(0,n.Uk)("Recuperarea pozelor se poate face folosind "),s={href:"https://github.com/ihaveamac/ninfs/releases",target:"_blank",rel:"noopener noreferrer"},u=(0,n.Uk)("ninfs"),d=(0,n.Uk)(", în combinație cu hiyaCFW sau TWiLight Menu++ dacă le vrei pe consolă. Ultima versiune a HiyaCFW Helper îți permite să-ți copiezi pozele de pe NAND pe SDNAND în timpul configurării"),p=(0,n._)("li",null,[(0,n.Uk)("Restaurarea unui buton de configurare Unlaunch poate fi făcută din meniul Unlaunch, ce poate fi accesat dacă ții apăsat pe "),(0,n._)("kbd",{class:"face"},"A"),(0,n.Uk)(" + "),(0,n._)("kbd",{class:"face"},"B"),(0,n.Uk)(" în timp ce pornești consola")],-1),h=(0,n._)("li",null,"Pornirea în Unlaunch cauzează o eroare? Scoate cardul SD și încearcă să repornești sistemul. Dacă funcționează, atunci există o eroare cu cardul tău SD și restaurarea unei copii NAND nu o va repara",-1),m=(0,n.Uk)('"An error has occurred..." la lansare este probabil o eroare cu hiyaCFW și nu este legată de NAND, vezi '),b={href:"https://wiki.ds-homebrew.com/hiyacfw/faq",target:"_blank",rel:"noopener noreferrer"},f=(0,n.Uk)("hiyaCFW FAQ & Troubleshooting"),N=(0,n.Uk)(" pe DS-Homebrew Wiki pentru mai multe informații"),g=(0,n.Uk)("Orice eroare în TWiLight Menu++ nu are legătură și ar trebui să încerci să reinstalezi TWiLight Menu++ sau să ceri ajutor pe "),D={href:"https://ds-homebrew.com/discord",target:"_blank",rel:"noopener noreferrer"},k=(0,n.Uk)("Discord"),A=(0,n._)("li",null,'Dezinstalarea Unlaunch, fie prin instalarea NAND-ului sau folosind dezinstalatorul, ar trebui evitate cu orice preț dacă nu este absolut necesar, poți seta tastele de autopornire la "Launcher" și consola ta DSi va fi în siguranță',-1),U=(0,n._)("p",null,"Singurul lucru pe care trebuie să-l faci cu NNAD-ul tău este să instalezi Unlaunch. Altfel folosește alternative.",-1),_=(0,n._)("h2",{id:"cerinte",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#cerinte","aria-hidden":"true"},"#"),(0,n.Uk)(" Cerințe")],-1),S=(0,n._)("li",null,[(0,n.Uk)("Copia NAND "),(0,n._)("strong",null,"de pe același DSi")],-1),z=(0,n.Uk)("Ultima versiune a "),v={href:"https://github.com/DS-Homebrew/SafeNANDManager/releases/latest/download/SafeNANDManager.nds",target:"_blank",rel:"noopener noreferrer"},w=(0,n.Uk)("SafeNANDManager"),E=(0,n._)("li",null,"Un mod prin care să rulezi homebrew cu acces la NAND, precum Unlaunch sau Memory Pit",-1),O={href:"https://problemkaputt.de/gba.htm",target:"_blank",rel:"noopener noreferrer"},W=(0,n.Uk)("no$gba"),C=(0,n.Uk)(", pentru a-ți examina copia NAND (Descarcă versiunea 'Windows gaming version') "),M=(0,n.Uk)("Utilizatorii de macOS și Linux pot folosi "),I={href:"https://winehq.org",target:"_blank",rel:"noopener noreferrer"},R=(0,n.Uk)("WINE"),x=(0,n.Uk)(" pentru a rula no$gba"),B={href:"http://melonds.kuribo64.net/downloads/dsibiosdumper.7z",target:"_blank",rel:"noopener noreferrer"},L=(0,n.Uk)("dsibiosdumper"),T=(0,n.uE)('<h2 id="crearea-unei-copii-bios-pentru-a-o-folosi-in-no-gba" tabindex="-1"><a class="header-anchor" href="#crearea-unei-copii-bios-pentru-a-o-folosi-in-no-gba" aria-hidden="true">#</a> Crearea unei copii BIOS pentru a o folosi în no$gba</h2><ol><li>Extrage <code>dsibiosdumper</code> din arhiva <code>dsibiosdumper.zip</code> și plaseaz=o oriunde pe cardul SD</li><li>Pornește-ți consola în timp ce ții apăsat pe <kbd class="face">A</kbd> și <kbd class="face">B</kbd><ul><li>Aceasta ar trebui să lanseze Meniul de Fișiere Unlaunch</li></ul></li><li>Lansează dsibiosdumper din Meniul de Fișiere Unlaunch</li><li>Apasă <kbd class="face">A</kbd>pentru a crea o copie BIOS pe cardul SD</li><li>Apasă <kbd>START</kbd> pentru a ieși din dsibiosdumper</li></ol><h2 id="testarea-copiei-tale-nand" tabindex="-1"><a class="header-anchor" href="#testarea-copiei-tale-nand" aria-hidden="true">#</a> Testarea copiei tale NAND</h2><p>Este foarte important să testezi copia NAND pentru a vedea dacă este funcțională înainte de a o restaura pe consolă, iar dacă arată o eroare de brick în no$gba aceasta cel mai sigur va cauza un brick și consolei tale.</p><ol><li>Extrage <code>NO$GBA.EXE</code> din <code>no$gba-w.zip</code> într-un dosar ce calculatorul tău</li><li>Copiează copia NAD în dosarul în care ai pus <code>NO$GBA.EXE</code> și redenumește-o în <code>DSI-1.MMC</code></li><li>Copiază <code>bios7i.bin</code> și <code>bios9i.bin</code> în dosarul în care ai pus <code>NO$GBA.EXE</code>, numite <code>BIOSDSI7.ROM</code> și <code>BIOSDSI9.ROM</code>, respectiv.</li><li>Rulează <code>NO$GBA.EXE</code></li><li>Apasă <code>Options</code> &gt; <code>Emulation Setup</code> pentru a deschide fereastra Emulation Setup</li><li>Schimbă <code>Reset/Startup Entrypoint</code> în <code>GBA/NDS BIOS (Nintendo logo)</code></li><li>Schimbă <code>NDS Mode/Colors</code> în <code>DSi (retail/16MB)</code></li><li>Apasă <code>Save Now</code></li><li>Lansează orice ROM Nintendo DS (fișier <code>.nds</code>)</li></ol><p>Dacă no$gba lansează meniul DSi (sau Meniul de Fișiere Unlaunch), atunci continuă la secțiunea următoare. Dacă arată orice fel de eroare <em><strong>nu instala acea copie</strong></em>!</p><h2 id="dezinstalarea-unlaunch-de-pe-copia-nand-optional" tabindex="-1"><a class="header-anchor" href="#dezinstalarea-unlaunch-de-pe-copia-nand-optional" aria-hidden="true">#</a> Dezinstalarea Unlaunch de pe copia NAND (opțional)</h2><p>Urmează acești pași dacă ai creat o copie a NAND-ului după ce ai instalat Unlaunch și ai dori să dezinstalezi Unlaunch de pe sistemul tău. Dacă nu vrei să dezinstalezi Unlaunch, <strong>nu</strong> trebuie să urmezi această secțiune.</p>',8),$=(0,n.Uk)("Descarcă ultima versiune a "),F={href:"https://problemkaputt.de/unlaunch.zip",target:"_blank",rel:"noopener noreferrer"},H=(0,n.Uk)("instalatorului Unlaunch"),y=(0,n.uE)("<li>Extrage <code>UNLAUNCH.DSI</code> din <code>unlaunch.zip</code></li><li>Lansează <code>UNLAUNCH.DSI</code> în no$gba și pornește-l din slotul Cardului de Joc <ul><li>Acesta ar trebui să pornească instalatorul Unlaunch, care arată similar cu Meniul de Fișiere Unlaunch</li></ul></li><li>Alege <code>Uninstall</code></li><li>Odată finalizat, alege <code>Power down</code></li><li>Lansează orice ROM Nintendo DS din nou, și asigură-te că meniul DSi se încarcă și funcționează corect</li>",5),G=(0,n.uE)('<h2 id="instalarea-copiei-tale-nand-software" tabindex="-1"><a class="header-anchor" href="#instalarea-copiei-tale-nand-software" aria-hidden="true">#</a> Instalarea copiei tale NAND (Software)</h2><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Asigură-te că ai parcurs toți pașii de mai sus deoarece aici devine periculos. Dacă ai fost trimis direct aici fără să urmărești pașii de mai sus, atunci du-te înapoi la început și citește toată pagina.</p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Asigură-te că sistemul tău Nintendo DSi este bine încărcat înainte de a începe această secțiune.</p></div><ol><li>Cu cardul SD introdus, pornește consola Nintendo DSi în timp ce ții apăsat pe <kbd class="face">A</kbd> și <kbd class="face">B</kbd></li><li>Lansează SafeNANDManager</li><li>Apasă butonul <code>begin NAND restore</code></li><li>Odată ce restaurarea s-a încheiat, apasă <kbd>START</kbd> pentru a opri consola DSi</li></ol><p>NAND-ul tău ar trebui să fie restaurat.</p><h2 id="instalarea-copiei-tale-nand-hardmod" tabindex="-1"><a class="header-anchor" href="#instalarea-copiei-tale-nand-hardmod" aria-hidden="true">#</a> Instalarea copiei tale NAND (Hardmod)</h2>',6),P=(0,n.Uk)("Dacă nu poți porni consola Nintendo DSi, un hardmod este singurul mod prin care poți restaura o copie NAND. Cel mai bun ghid care există acum este "),X={href:"https://wiki.ds-homebrew.com/ds-index/hardmod#nintendo-dsi",target:"_blank",rel:"noopener noreferrer"},j=(0,n.Uk)("ghidul Nintendo DSi hardmod pe DS-Homebrew Wiki"),q=(0,n.Uk)("."),Z={},J=(0,i(3744).Z)(Z,[["render",function(e,a){const i=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[r,l,o,(0,n._)("ul",null,[t,(0,n._)("li",null,[c,(0,n._)("a",s,[u,(0,n.Wm)(i)]),d]),p,h,(0,n._)("li",null,[m,(0,n._)("a",b,[f,(0,n.Wm)(i)]),N]),(0,n._)("li",null,[g,(0,n._)("a",D,[k,(0,n.Wm)(i)])]),A]),U,_,(0,n._)("ul",null,[S,(0,n._)("li",null,[z,(0,n._)("a",v,[w,(0,n.Wm)(i)])]),E,(0,n._)("li",null,[(0,n._)("a",O,[W,(0,n.Wm)(i)]),C,(0,n._)("ul",null,[(0,n._)("li",null,[M,(0,n._)("a",I,[R,(0,n.Wm)(i)]),x])])]),(0,n._)("li",null,[(0,n._)("a",B,[L,(0,n.Wm)(i)])])]),T,(0,n._)("ol",null,[(0,n._)("li",null,[$,(0,n._)("a",F,[H,(0,n.Wm)(i)])]),y]),G,(0,n._)("p",null,[P,(0,n._)("a",X,[j,(0,n.Wm)(i)]),q])],64)}]])},3744:(e,a)=>{a.Z=(e,a)=>{const i=e.__vccOpts||e;for(const[e,n]of a)i[e]=n;return i}}}]);