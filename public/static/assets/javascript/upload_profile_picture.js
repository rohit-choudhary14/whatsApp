function upload_profile_picture(id){
    showLoader();
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
       return response.json(); // or response.text() if the response is not JSON
    })
    .then(data => {
       closeLoader();
       showMessage(data.message);
       profile_picture_processing(id);
    })
    .catch(error => {
       // Handle any errors that occurred during the fetch
       console.error('Fetch error:', error);
    });


 }