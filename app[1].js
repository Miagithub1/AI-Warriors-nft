const MINT_URL="";
const SITE_LINKS={x:"",discord:"",opensea:""};
const NFTs=Array.from({length:24},(_,i)=>{const id=i+1; const rarity=id<=10?"COMMON":id<=16?"RARE":id<=21?"EPIC":"LEGENDARY"; return {id,rarity,image:`assets/nfts/${id}.svg`};});
let shown=12;
const grid=document.getElementById("grid"), filter=document.getElementById("filter"), search=document.getElementById("search");
function render(){const f=filter.value,q=search.value.trim().replace("#","");let list=NFTs.filter(n=>(f==="ALL"||n.rarity===f)&&(!q||String(n.id).includes(q))).slice(0,shown);grid.innerHTML=list.map(n=>`<article class="card" data-id="${n.id}"><img loading="lazy" src="${n.image}" alt="AI Warrior #${String(n.id).padStart(4,"0")}"><div class="cardinfo"><b>AI WARRIOR #${String(n.id).padStart(4,"0")}</b><span>${n.rarity}</span></div></article>`).join("");document.getElementById("load").style.display=list.length<Math.min(shown,NFTs.filter(n=>(f==="ALL"||n.rarity===f)&&(!q||String(n.id).includes(q))).length)?"none":"block";document.querySelectorAll(".card").forEach(c=>c.onclick=()=>openModal(+c.dataset.id));}
function openModal(id){const n=NFTs.find(x=>x.id===id);document.getElementById("modalImg").src=n.image;document.getElementById("modalInfo").textContent=`AI WARRIOR #${String(id).padStart(4,"0")}  •  ${n.rarity}`;document.getElementById("modal").classList.add("open")}
document.getElementById("close").onclick=()=>document.getElementById("modal").classList.remove("open");
document.getElementById("modal").onclick=e=>{if(e.target.id==="modal")e.currentTarget.classList.remove("open")};
filter.onchange=()=>{shown=12;render()}; search.oninput=()=>{shown=12;render()}; document.getElementById("load").onclick=()=>{shown+=12;render()};
document.getElementById("mintBtn").href=MINT_URL||"#"; document.getElementById("navMint").href=MINT_URL||"#"; document.getElementById("heroMint").href=MINT_URL||"#";
document.getElementById("xLink").href=SITE_LINKS.x||"#";document.getElementById("discordLink").href=SITE_LINKS.discord||"#";document.getElementById("openseaLink").href=SITE_LINKS.opensea||"#";
render();