
        const startCameraButton = document.getElementById('startCameraButton');
        const takePictureButton = document.getElementById('takePictureButton');
        const videoElement = document.getElementById('cameraFeed');
        const capturedImage = document.getElementById('capturedImage');
        const capturedImageDisplay = document.getElementById('capturedImageDisplay');
        const close_camera=document.getElementById('close_camera');
        const action_buttons=document.getElementById('action_buttons');
        const access_from_gallery=document.getElementById('access_from_gallery');
        const take_input_from_gallery=document.getElementById('take_input_from_gallery');
        const clear_selected_image=document.getElementById('clear_selected_image');
        const container=document.getElementById('container');
        const slide_up=document.getElementById('slide_up');
        const slide_down=document.getElementById('slide_down');
        const applyMessage=document.getElementById("applyMessage");
        const audioPlayer = document.getElementById("audioPlayer");
        const audioPlayer_reciveMessage=document.getElementById('audioPlayer_reciveMessage');
        const textField=document.getElementById('text_message');
        const chatting_profile_header=document.getElementById("chatting_profile_header");
        const go_back_to_chat=document.getElementById("go_back_to_chat");
        let user_status=document.getElementById('user_status');
        let isTyping=false;
        let imageBuffer=null;
        

