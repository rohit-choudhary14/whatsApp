function  profile_picture_processing(id){
      var img = new Image();
      img.src = `../../uploads/profile/pictures/${id}.jpg`;
      img.onload = function() {
        let image=document.getElementById('profileImage');
        image.src = img.src;
        image.style.height='150px';
        image.style.width='150px';
        image.style.borderRadius='50%';
        let default_svg_icon=document.getElementById('default_svg_icon');
        if(default_svg_icon){
            default_svg_icon.remove();
        }
      }
      img.onerror = function() {
         let profileImage=document.getElementById('profileImage');
         if(profileImage){
            profileImage.remove();
         }
         let svg=document.getElementById('default_svg_icon');
         svg.style.height="200";
         svg.style.width="200";
      }
}