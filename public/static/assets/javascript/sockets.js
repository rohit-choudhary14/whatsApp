export function initSocket(scrollDown){
        socket.on('recive', (msg, s_id, msg_recive_time, imageBuffer) => {
            const reciver_id=document.getElementById('text_message').getAttribute('data-v');
                if(s_id==reciver_id){
                        let recived_img="";
                        if(imageBuffer!=null){
                            recived_img=`<span style='margin-bottom:10px;height: 100%;'>
                            <img src="${imageBuffer}"style='width:100%'/></span>`
                        }
                        
                        let incomming_msg_div=document.createElement('div');
                        incomming_msg_div.classList.add('incomming_msg_box');
                        let child=document.createElement('div');
                        child.innerHTML=`${recived_img}<span>${msg}</span><span style='font-size: 0.6rem;margin-left: 0.3rem;display: flex;justify-content: end;'>${msg_recive_time}</span>`;
                        incomming_msg_div.append(child);
                        parent.append(incomming_msg_div);
                        audioPlayer_reciveMessage.play();
                        scrollDown();
                    }
        });

        
        async function emitLineConnection(reciverId,status){
            try{
                socket.emit('lineConnection',reciverId,status)
            }catch(error){
                console.error(error);
            }
        }
        async function emitMessage(message,reciverId,sender_id,formattedTime,imageBuffer){
            try{
                socket.emit('chat message', message,reciverId,sender_id,formattedTime,imageBuffer);
                imageBuffer=null; 
                           
            }catch(error){
                console.error(error);
            }
        }
        return {
            emitMessage,
            emitLineConnection
        }

}