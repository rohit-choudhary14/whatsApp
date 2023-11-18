export function initGallery(stopCamera){
    async function openGallery(){
        try{
            stopCamera();
            take_input_from_gallery.click();
        }catch(error){
            console.error(error);
        }
    }
    async function handleFileInput(){
        try{
            const reader = new FileReader();
            const selectedImage = document.getElementById('selectedImage');
            reader.onload = function (e) {
                imageBuffer=e.target.result;
                selectedImage.src = e.target.result;
                selectedImage.style.display = 'block';
                
            };
            const imageInput = document.getElementById('take_input_from_gallery');
            reader.readAsDataURL(imageInput.files[0]);
            document.getElementById('selected_img_model').style.zIndex='20';
            clear_selected_image.style.zIndex="30"; 
        }catch(error){
            console.error(error);
        }
    }
    async function resetInput(){
        try{
            clear_selected_image.style.zIndex="0";   
            const selectedImage = document.getElementById('selectedImage');
            selectedImage.src = '';
            imageBuffer=null;
            document.getElementById('selected_img_model').style.zIndex='0';
            take_input_from_gallery.value='';
        }catch(error){
            console.error(error);
        }
    }
    return{
        openGallery,
        handleFileInput,
        resetInput
    }
}