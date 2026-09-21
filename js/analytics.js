/* iCoffee GA4 + conversion tracking. GA4 Measurement ID. */
(function(){
 const ID='G-91ZDWQPG34'; if(!/^G-[A-Z0-9]+$/i.test(ID)||ID==='G-XXXXXXXXXX') return;
 window.dataLayer=window.dataLayer||[]; window.gtag=function(){dataLayer.push(arguments)};
 gtag('js',new Date()); gtag('config',ID,{anonymize_ip:true});
 const s=document.createElement('script'); s.async=true; s.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(ID); document.head.appendChild(s);
 function event(name,params){window.gtag&&window.gtag('event',name,params||{})}
 document.addEventListener('click',e=>{const el=e.target.closest('[data-conversion]');if(!el)return; const type=el.dataset.conversion; const product=el.dataset.product||''; const loc=el.dataset.location||'';
  if(type==='shop_black') event('select_item',{item_list_name:'iCoffee products',item_name:'iCoffee Black',item_category:'coffee',cta_location:loc});
  else if(type==='shop_creamer') event('select_item',{item_list_name:'iCoffee products',item_name:'iCoffee Creamer',item_category:'creamer',cta_location:loc});
  else if(type==='store_click') event('store_click',{link_location:loc,product:product||'iCoffee'});
  else if(type==='learn_click') event('learn_more',{link_location:loc});
  else if(type==='review_submit') event('review_submit',{product:product});
 });
 const path=location.pathname.toLowerCase(); if(path.includes('icoffee-black')) event('view_item',{items:[{item_name:'iCoffee Black',item_category:'coffee'}]}); if(path.includes('icoffee-creamer')) event('view_item',{items:[{item_name:'iCoffee Creamer',item_category:'creamer'}]});
})();
