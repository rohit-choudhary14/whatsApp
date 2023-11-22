export function initUploadProfilePicture(closeLoader) {

   function upload_profile_picture(id){
      
      let user_id=id;
      const formData = new FormData();
      formData.append('image', document.querySelector('input[type="file"]').files[0]);
      fetch(`/upload/profile-picture/${user_id}`, {
      method: 'POST',
      body: formData
      })
      .then(response => {
         if (!response.ok) {
            throw new Error('Network response was not ok');
         }
         return response.json();
      })
      .then(data => {
         closeLoader();
         showMessage(data.message);
      })
      .catch(error => {
         console.error('Fetch error:', error);
      });


   }
   return {
      upload_profile_picture
   }
}