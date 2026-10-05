// Bot chạy trên GitHub Actions: tải các trang giá trong CONFIG.LIVE của index.html,
// đọc bằng CHÍNH bộ đọc trong index.html, rồi ghi prices.json (có lịch sử) để trang đọc qua DATA_URL.
import {readFileSync,writeFileSync,existsSync} from "node:fs";
import {JSDOM} from "jsdom";
const html=readFileSync("index.html","utf8"),w=new JSDOM(html,{runScripts:"outside-only",url:"https://example.com/"}).window;
w.matchMedia=()=>({matches:false});
let js=html.match(/<script>\n(\(\(\)=>\{[\s\S]*\}\)\(\);)\n<\/script>/)[1];
js=js.slice(0,js.lastIndexOf("\nload();\n"))+"\nwindow.__t={bg,tbl,gln,art,avg,CONFIG};\n"+js.slice(js.lastIndexOf("})();"));
w.eval(js);
const {bg,tbl,gln,art,avg,CONFIG}=w.__t,PARSE={tbl,bg,gln,art},now=new w.Date(),key=r=>r.ngay+"|"+r.cay+"|"+r.tinh,best=new Map();
for(const s of CONFIG.LIVE){ // nguồn đứng trước được ưu tiên khi trùng cây/tỉnh/ngày
 try{
  const r=await fetch(s.url,{headers:{"user-agent":"Mozilla/5.0 (compatible; TraCuuNongSanBot/1.0)","accept-language":"vi"},signal:AbortSignal.timeout(30000)});
  if(!r.ok)throw new Error("HTTP "+r.status);
  const t=await r.text();if(t.length<500)throw new Error("trang rỗng");
  const rows=JSON.parse(JSON.stringify(avg((PARSE[s.fmt]||bg)(t,s,now))));
  for(const x of rows){const e=best.get(key(x));if(!e||(e.syn&&!x.syn))best.set(key(x),x)}
  console.log(rows.length+" dòng ←",s.url);
 }catch(e){console.error("LỖI",s.url,e.message)}
}
if(!best.size){console.error("Không lấy được dòng giá nào - giữ nguyên prices.json");process.exit(1)}
const old=existsSync("prices.json")?JSON.parse(readFileSync("prices.json","utf8")):[],m=new Map(old.map(r=>[key(r),r]));
for(const [k,x] of best){const e=m.get(k);if(x.syn&&e&&!e.syn)continue;m.set(k,x)} // giá suy ra từ "giá cũ" không đè giá thật đã lưu
const cut=new Date(now.getTime()-800*864e5).toISOString().slice(0,10);
const data=[...m.values()].filter(r=>r.ngay>=cut).sort((a,b)=>a.cay<b.cay?-1:a.cay>b.cay?1:a.tinh<b.tinh?-1:a.tinh>b.tinh?1:a.ngay<b.ngay?-1:1);
writeFileSync("prices.json",JSON.stringify(data));
console.log("Đã ghi",data.length,"dòng,",new Set(data.map(r=>r.cay)).size,"loại cây");
