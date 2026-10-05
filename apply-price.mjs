// Dùng trong GitHub Actions. node apply-price.mjs check  -> chỉ kiểm tra, ghi result.txt
//                           node apply-price.mjs apply  -> kiểm tra rồi ghi vào prices.json
import {readFileSync,writeFileSync,existsSync} from "node:fs";
const mode=process.argv[2],body=process.env.ISSUE_BODY||"",user=process.env.ISSUE_USER||"",num=process.env.ISSUE_NUMBER||"";
const f={};for(const p of body.split(/^### /m).slice(1)){const i=p.indexOf("\n");f[p.slice(0,i).trim()]=p.slice(i+1).trim()}
const done=(ok,msg)=>{writeFileSync("result.txt",msg);console.log(msg);process.exit(ok||mode==="check"?0:1)};
const cay=(f["Cay"]||f["Cây"]||"").trim(),t0=(f["Tỉnh"]||"").trim(),tinh=/^toàn quốc$/i.test(t0)?"":t0;
const gia=Math.round(Number((f["Giá"]||"").replace(/[.,\s]/g,""))),donvi=(f["Đơn vị"]||"").trim(),ngay=(f["Ngày"]||"").trim(),nguon=(f["Nguồn"]||"").trim();
const today=new Date(Date.now()+7*36e5).toISOString().slice(0,10),min=new Date(Date.now()+7*36e5-7*864e5).toISOString().slice(0,10);
const err=[];
if(cay.length<2||cay.length>60)err.push("Tên cây không hợp lệ.");
if(t0.length<2||t0.length>40)err.push("Tỉnh/thành không hợp lệ.");
if(!(gia>0&&gia<1e9))err.push("Giá phải là số nguyên lớn hơn 0.");
if(!/^đ\/(kg|tấn|trái|chậu|cây|cành)$/.test(donvi))err.push("Đơn vị không hợp lệ.");
if(!/^\d{4}-\d{2}-\d{2}$/.test(ngay)||isNaN(Date.parse(ngay)))err.push("Ngày phải dạng YYYY-MM-DD.");
else if(ngay>today||ngay<min)err.push("Ngày áp dụng phải trong 7 ngày gần nhất, không ở tương lai.");
if(nguon.length<3)err.push("Thiếu nguồn.");
if(!/\[[xX]\]/.test(f["Xác nhận"]||""))err.push("Chưa tick xác nhận giá chính xác.");
if(err.length)done(false,"❌ Không hợp lệ:\n- "+err.join("\n- "));
const old=existsSync("prices.json")?JSON.parse(readFileSync("prices.json","utf8")):[];
const last=old.filter(r=>r.cay===cay&&r.tinh===tinh&&r.gia>0).sort((a,b)=>a.ngay<b.ngay?1:-1)[0];
const dev=last?(gia-last.gia)/last.gia*100:null;
const note=last?`Giá đang hiển thị: ${last.gia.toLocaleString("vi-VN")} ${last.donvi||""} (${last.ngay}). Chênh ${dev.toFixed(1)}%.${Math.abs(dev)>=10?" ⚠️ Lệch từ 10%: cần có nguồn/chứng từ rõ ràng trước khi duyệt.":""}`:"Chưa có giá cũ cùng cây/tỉnh để so sánh.";
if(mode==="check")done(true,`✅ Dữ liệu hợp lệ: **${cay}** – ${t0} – ${gia.toLocaleString("vi-VN")} ${donvi} – ${ngay}. Nguồn: ${nguon}.\n\n${note}\n\nQuản trị viên: gắn nhãn **duyet** để đưa giá vào bảng giá.`);
const key=r=>r.ngay+"|"+r.cay+"|"+r.tinh;
const m=new Map(old.map(r=>[key(r),r])),row={ngay,cay,tinh,donvi,gia,tv:"@"+user+" #"+num};
m.set(key(row),row);
const data=[...m.values()].sort((a,b)=>a.cay<b.cay?-1:a.cay>b.cay?1:a.tinh<b.tinh?-1:a.tinh>b.tinh?1:a.ngay<b.ngay?-1:1);
writeFileSync("prices.json",JSON.stringify(data));
done(true,`✅ Đã duyệt và đưa vào bảng giá: **${cay}** – ${t0} – ${gia.toLocaleString("vi-VN")} ${donvi} (${ngay}). Cảm ơn @${user}. Trang có thể mất vài phút để hiển thị.`);
