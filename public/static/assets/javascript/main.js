import { initCamera } from './camera.js';
import { initScroll} from './scroll.js';
import { initGallery} from './galleryAccess.js';
import { initChat} from './chat.js';
import { intitChildMessage} from './appendChild.js';
import { initSocket} from './sockets.js';
import { initTypingIndicator} from './typingIndicator.js';
import {initChatHistory} from './chatHistory.js';



document.addEventListener("DOMContentLoaded",function(){
   
    // init camera
    const camera=initCamera();
    startCameraButton.addEventListener("click",camera.startCamera);
    takePictureButton.addEventListener("click",camera.takePicture); 
    close_camera.addEventListener("click",camera.stopCamera);
    //init scrolling
    const scrollAction=initScroll();
    slide_up.addEventListener("click", scrollAction.scrollUp);
    slide_down.addEventListener("click", scrollAction.scrollDown);
    //init.. gallery
    const gallery=initGallery(camera.stopCamera);
    access_from_gallery.addEventListener("click",gallery.openGallery);
    take_input_from_gallery.addEventListener("change",gallery.handleFileInput);
    clear_selected_image.addEventListener("click",gallery.resetInput);
    // init intitChildMessage
    const childMessage=intitChildMessage();
    //init sockets
    const connection=initSocket(scrollAction.scrollDown);
    //init chat
    const chat=initChat(scrollAction.scrollDown,childMessage.setMessageToscreen,connection.emitMessage,connection.emitLineConnection);
    applyMessage.addEventListener("click",chat.sendMessage);
    //init typing indicator
    initTypingIndicator(connection.emitLineConnection);

    document.getElementById('chatting_profile_header').addEventListener('click',function(){
        document.getElementById('view_profile_body').style.height="100%";
    })
    document.getElementById('go_back_to_chat').addEventListener('click',function(){
       document.getElementById('view_profile_body').style.height="0%";
    })
    //init chathistory
    initChatHistory(scrollAction.scrollDown);
    

   

    
})
