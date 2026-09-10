const MINT_URL=""; // Put the official OpenSea/launchpad mint URL here before launch.
let shown=12,current="all";
const rarities=["Common","Common","Common","Rare","Rare","Epic","Legendary","Common","Rare","Epic","Common","Common"];
function rarity(i){return rarities[(i*7+i%5)%rarities.length]}
function render(){const g=document.getElementById("grid");g.innerHTML="";let n=0;for(let i=1;i<=10000&&n<shown;i++){let r=rarity(i);if(current!=="all"&&r!==current)continue;let el=document.createElement("article");el.className="nft";el.innerHTML=`<div class="nftimg">AI<br>WARRIOR<br>#${String(i).padStart(4,"0")}</div><div class="nftinfo"><b>#${String(i).padStart(4,"0")}</b><span>${r.toUpperCase()} · VOID · LASER</span></div>`;g.appendChild(el);n++}}
document.querySelectorAll(".filters button").forEach(b=>b.onclick=()=>{document.querySelectorAll(".filters button").forEach(x=>x.classList.remove("active"));b.classList.add("active");current=b.dataset.f;shown=12;render()});
document.getElementById("load").onclick=()=>{shown+=12;render()};
document.getElementById("menu").onclick=()=>document.getElementById("nav").classList.toggle("open");
if(MINT_URL){document.querySelectorAll("#navMint,#mintButton").forEach(x=>x.href=MINT_URL)}else document.getElementById("mintButton").onclick=e=>{e.preventDefault();alert("Official mint link will be added before launch.")};
render();