export function initChatHistory(scrollDown) {
        let content=document.getElementById('text_message');
        const reciverId=content.getAttribute('data-v');
        fetch('/getChat/history', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({reciverId}),
            })
            .then(response => response.json())
            .then(data => {
               
                 
                 data.history.forEach(element => {
                       let className=element.rClassName;
                       let isRead=``;
                       let isFileExist=element.newFileName;
                       let chatImage="";
                       if(isFileExist!=null){
                        chatImage=`<span style='margin-bottom:10px;height: 100%;'><img src="/uploads/chats/images/${isFileExist}" style='width:100%;height:270px;object-fit: cover;object-position:top;'/></span>`;
                       }
                       if(sender_id==element.senderId){
                        className=element.sClassName;
                        isRead=`<svg viewBox="0 0 12 11" height="9" width="16" style='color:#8696a0' preserveAspectRatio="xMidYMid meet" class="" fill="none"><path d="M11.1549 0.652832C11.0745 0.585124 10.9729 0.55127 10.8502 0.55127C10.7021 0.55127 10.5751 0.610514 10.4693 0.729004L4.28038 8.36523L1.87461 6.09277C1.8323 6.04622 1.78151 6.01025 1.72227 5.98486C1.66303 5.95947 1.60166 5.94678 1.53819 5.94678C1.407 5.94678 1.29275 5.99544 1.19541 6.09277L0.884379 6.40381C0.79128 6.49268 0.744731 6.60482 0.744731 6.74023C0.744731 6.87565 0.79128 6.98991 0.884379 7.08301L3.88047 10.0791C4.02859 10.2145 4.19574 10.2822 4.38194 10.2822C4.48773 10.2822 4.58929 10.259 4.68663 10.2124C4.78396 10.1659 4.86436 10.1003 4.92784 10.0156L11.5738 1.59863C11.6458 1.5013 11.6817 1.40186 11.6817 1.30029C11.6817 1.14372 11.6183 1.01888 11.4913 0.925781L11.1549 0.652832Z" fill="currentcolor"></path></svg>`;
                       }
                        let outgoing_msg_div=document.createElement('div');
                        outgoing_msg_div.classList.add(className);

                        let child=document.createElement('div');
                        child.innerHTML=`${chatImage}<span style='font-size:15.2px;color:#000;word-wrap: break-word;'>${element.message}</span><span style='font-size: 0.6rem;margin-left: 0.3rem;display: flex;justify-content: end;'>${element.timeOfMessage}<span style='margin-top:-1px;margin-left:5px'>${isRead}</span></span>`;
                        content.value="";
                        outgoing_msg_div.append(child);
                       
                        parent.append(outgoing_msg_div);
                        
    
                 });
                 $('.outgoing_msg_box div').on('press', function(e) {
                           
                    $(this).css('background', 'rgb(129 212 250 / 55%)');
                    
                    
                })
                
                // return back to original state by tapping the touch area
                .on('tap', this, function(e) {
                    $(this).css('background', '#d9fdd3')
                   
                });

                // prevent default mobile context menus
                window.oncontextmenu = function(event) {
                    event.preventDefault();
                    event.stopPropagation();
                    return true;
                };
                scrollDown();
                // closeLoader();
                
            })
            .catch((error) => {
                closeLoader();
                console.error('error:', error);
            });
}
