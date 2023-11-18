function setChatScreen(reciver_user_id,name){
   document.getElementById('friend_profile_picture').src=`../../uploads/profile/pictures/${reciver_user_id}.jpg`
   document.getElementById('message_icon').style.display='none';
   document.getElementById('chatting_profile_body').style.left='0px';
   document.getElementById('chatting_user_header_name_section').innerText=name;
   document.getElementById('text_message').setAttribute('data-v',reciver_user_id);
}