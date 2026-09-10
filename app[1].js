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
const whitelistForm=document.getElementById("whitelistForm");
if(whitelistForm){
  whitelistForm.addEventListener("submit",async(e)=>{
    e.preventDefault();
    const twitter=document.getElementById("twitter").value.trim().replace(/^@+/,"");
    const wallet=document.getElementById("wallet").value.trim();
    const status=document.getElementById("wlStatus");
    const evm=/^0x[a-fA-F0-9]{40}$/;
    const tw=/^[A-Za-z0-9_]{1,15}$/;
    if(!tw.test(twitter)){status.textContent="Please enter a valid Twitter/X username.";return;}
    if(!evm.test(wallet)){status.textContent="Please enter a valid 42-character EVM address starting with 0x.";return;}
    // Demo-safe storage: keeps the entry on this device until a backend/webhook is configured.
    const entries=JSON.parse(localStorage.getItem("aethelgard_whitelist")||"[]");
    if(entries.some(x=>x.wallet.toLowerCase()===wallet.toLowerCase())){status.textContent="This wallet has already been submitted on this device.";return;}
    entries.push({twitter:"@"+twitter,wallet,submittedAt:new Date().toISOString()});
    localStorage.setItem("aethelgard_whitelist",JSON.stringify(entries));
    status.textContent="Whitelist submitted successfully ✓";
    whitelistForm.classList.add("success");
    whitelistForm.reset();
  });
}
