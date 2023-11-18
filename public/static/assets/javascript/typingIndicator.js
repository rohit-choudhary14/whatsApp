export function initTypingIndicator(emitLineConnection) {
    textField.addEventListener('keyup', function (event) {
      
        if(event.code!='Backspace' && textField.value.length>0 && !isTyping){
            let message_counter_div=document.getElementById('message_counter_div');
            message_counter_div.style.pointerEvents='all';
            message_counter_div.style.opacity='1';
            emitLineConnection(Xid,'on');
            
            isTyping=true;
            
        }
    });

    textField.addEventListener('keydown', function (event) {
        if(event.code=='Backspace' || event.key === "Backspace"){
            let message_counter_div=document.getElementById('message_counter_div');
            let text_message=document.getElementById('text_message').value;
            
            if(text_message!=undefined && text_message.length<=1 && imageBuffer==null){
                message_counter_div.style.pointerEvents='none';
                message_counter_div.style.opacity='0.7';
                emitLineConnection(Xid,'off');
                isTyping=false;
            }
        }
    });
}
