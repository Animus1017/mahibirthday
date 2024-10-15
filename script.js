const days=document.querySelector("#days");
const hrs=document.querySelector("#hrs");
const mins=document.querySelector("#mins");
const secs=document.querySelector("#secs");
const bar=document.querySelector("#bar");
const countdown=document.querySelector(".countdown");
const end=new Date(2025,3,17,0).getTime();
// const start=new Date().getTime();
const start=new Date(2024,3,17,0).getTime();
function update(){
    const now=new Date().getTime(); 
    const covered=now-start;
    const remaining=end-now;
    const rdays=Math.floor(remaining/(24*60*60*1000));
    const rhrs=Math.floor((remaining%(24*60*60*1000))/(60*60*1000));
    const rmins=Math.floor((remaining%(60*60*1000))/(60*1000));
    const rsecs=Math.floor((remaining%(60*1000))/1000);
    days.textContent=rdays;
    hrs.textContent=rhrs;
    mins.textContent=rmins;
    secs.textContent=rsecs;
    bar.style.width=`${(covered/(end-start))*100}%`;
    if(remaining<0){
        countdown.innerHTML="EXPIRED";
        countdown.style.cssText="grid-template-columns: repeat(1, 1fr); text-align:center; font-size:2rem; font-weight:bold;"
        bar.style.width="100%";
        clearInterval(mahihbd);
    }
}
let mahihbd=setInterval(update,1000);