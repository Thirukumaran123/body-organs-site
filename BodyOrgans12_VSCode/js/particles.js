
const canvas=document.createElement('canvas');document.body.appendChild(canvas);
canvas.width=window.innerWidth;canvas.height=window.innerHeight;
const ctx=canvas.getContext('2d');const stars=[];for(let i=0;i<120;i++){stars.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*1.5+0.5,v:Math.random()*0.5})}
function animate(){ctx.clearRect(0,0,canvas.width,canvas.height);for(let s of stars){ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,2*Math.PI);ctx.fillStyle='white';ctx.fill();s.y-=s.v;if(s.y<0)s.y=canvas.height;}}setInterval(animate,33);
