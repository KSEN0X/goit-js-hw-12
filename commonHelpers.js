import{s as q,a as f,i as c}from"./assets/vendor-dbdbd0f5.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const S=document.querySelector(".form"),v=document.querySelector("#input"),g=document.querySelector(".gallery"),n=document.querySelector(".loader");n.style.display="none";let w=new q("ul.gallery a",{captionDelay:250,captionsData:"alt"});const C="41748903-b29fd083c740b117cdeeb235d";let h="",p=1;const b=40,i=document.querySelector(".load-more");i.style.display="none";const L=()=>new URLSearchParams({key:C,q:h,image_type:"photo",orientation:"horizontal",safesearch:!0,page:p,per_page:b});f.defaults.baseURL="https://pixabay.com";const $="/api/";S.addEventListener("submit",async r=>{if(r.preventDefault(),p=1,g.innerHTML="",i.style.display="none",h=v.value.trim(),h!==""){n.style.display="block",v.value="";try{const s=await f.get($,{params:L()});n.style.display="none";const o=s.data;if(o.hits.length===0)throw c.show({message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",backgroundColor:"#EF4040",titleColor:"white",position:"topRight"});const l=o.hits.reduce((e,{webformatURL:t,largeImageURL:a,tags:d,likes:y,views:m,comments:u,downloads:k})=>e+`<li class="gallery-item">
        <div class="card">
          <a class="gallery-link" href="${a}">
           <img class="gallery-image"
           src="${t}"
           alt="${d}"
           />
          </a>
          </div>          
          <div class="description">
          <p>Likes:<span>${y}</span></p>
          <p>Views:<span>${m}</span></p>
          <p>Comments:<span>${u}</span></p>
          <p>Downloads:<span>${k}</span></p>
          </div> 
        </li>`,"");g.insertAdjacentHTML("beforeend",l),o.hits.length>=b&&(i.style.display="block"),w.refresh()}catch(s){n.style.display="none",c.error({message:s.message,color:"red",position:"topCenter"}),console.error("Error fetching data:",s)}}});i.addEventListener("click",async()=>{n.style.display="block",p++;try{const r=await f.get($,{params:L()});n.style.display="none";const s=r.data;if(s.totalHits<=b*p)throw i.style.display="none",c.show({message:"We're sorry, but you've reached the end of search results.",theme:"dark",backgroundColor:"#EF4040",titleColor:"white",position:"topRight"});const o=s.hits.reduce((l,{webformatURL:e,largeImageURL:t,tags:a,likes:d,views:y,comments:m,downloads:u})=>l+`<li class="gallery-item"><div class="card">
          <a class="gallery-link" href="${t}">
           <img class="gallery-image"
           src="${e}"
           alt="${a}"
           />
          </a></div>         
          <div class="description">
            <p>Likes:<span>${d}</span></p>
            <p>Views:<span>${y}</span></p>
            <p>Comments:<span>${m}</span></p>
            <p>Downloads:<span>${u}</span></p>
          </div> 
        </li>`,"");g.insertAdjacentHTML("beforeend",o),E(),w.refresh()}catch(r){n.style.display="none",c.error({message:r.message,color:"red",position:"topCenter"}),console.error("Error fetching more data:",r)}});const E=()=>{const s=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})};
//# sourceMappingURL=commonHelpers.js.map
