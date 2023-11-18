export function initChat(scrollDown,setMessageToscreen,emitMessage,emitLineConnection) {


        
    function sendMessage() {
        const image=document.querySelector('input[type="file"]').files[0];
        let content=document.getElementById('text_message');
        
        if(content.value.length>=1 || imageBuffer!=null){
            const sClassName='outgoing_msg_box';
            const rClassName='incomming_msg_box';
            const reciverId=content.getAttribute('data-v');
            const message=content.value;
            const formData=new FormData();
            
            formData.append('sClassName', sClassName);
            formData.append('rClassName', rClassName);
            
            formData.append('reciverId', reciverId);
            formData.append('message', message);
            formData.append('image', image);

            fetch('/send/message/', {
                        method: 'POST',
                        
                        body:formData,
                    })
                    .then(response => response.json())
                    .then(data => {
                        
                        if(data){
                            const now = new Date();
                            const options = {
                                hour: 'numeric',
                                minute: 'numeric',
                                hour12: true,
                            };
                            const formattedTime = new Intl.DateTimeFormat('en-US', options).format(now);
                            setMessageToscreen(message,formattedTime,content);
                            emitMessage(message,reciverId,sender_id,formattedTime,imageBuffer);
                            audioPlayer.play();
                            document.getElementById('selected_img_model').style.zIndex='0';
                            emitLineConnection(reciverId,'off');
                            scrollDown();
                           
                        }
                    })
                    .catch((error) => {
                        console.error('Error sending token to the server:', error);
                    });
                
        }else{
            showMessage("Message can't be empty");
        }
    }

    return {
        sendMessage,
    };
}
