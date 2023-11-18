export function initCamera() {
    
    let stream;
    let imageCapture;

    async function startCamera() {
        try {
            container.style.zIndex="25";
            videoElement.style.height='100vh';
            
            stream = await navigator.mediaDevices.getUserMedia({ video: true });
            videoElement.srcObject = stream;
            imageCapture = new ImageCapture(stream.getVideoTracks()[0]);
            takePictureButton.disabled = false;
            document.body.style.overflow='hidden'
            action_buttons.style.zIndex='30';
        } catch (error) {
            console.error('Error accessing camera:', error);
        }
    }

    async function takePicture() {
        try {
            const photoBlob = await imageCapture.takePhoto();
            const photoUrl = URL.createObjectURL(photoBlob);
            const selectedImage = document.getElementById('selectedImage');
           
            selectedImage.src = photoUrl;
            selectedImage.style.display = 'block';
            clear_selected_image.style.zIndex="30";
            document.getElementById('selected_img_model').style.zIndex='20'
            stopCamera();
        } catch (error) {
            console.error('Error taking picture:', error);
        }
    }

    async function stopCamera() {
        try{
            if (stream) {
                container.style.zIndex="0";
                action_buttons.style.zIndex='0';
                videoElement.style.height='100%';
               
                const tracks = stream.getTracks();
                tracks.forEach((track) => track.stop());
            }
            videoElement.srcObject = null;
            takePictureButton.disabled = true;
        }
        catch(error){
            console.error(error);
        } 
    }
    return{
        startCamera,
        takePicture,
        stopCamera
    }

    

    
}

