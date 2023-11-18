export function initScroll() {

    async function  scrollUp(){
       try{
     
            var outgoingChat = document.getElementById('chatting_profile_body');
            if (outgoingChat) {
                outgoingChat.scrollTop = 0;
            }
       }catch(error){
            console.error(error);
       }
       
    }
    async function  scrollDown(){
        try{
            var outgoingChat = document.getElementById('chatting_profile_body');
            if (outgoingChat) {
                outgoingChat.scrollTop = outgoingChat.scrollHeight;
            }
        }catch(error){
            console.error(error);
        }
        
    }
   
    return{
        scrollUp,
        scrollDown
    }


}