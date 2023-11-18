
function remove_friend_request(id){
  
  const ele=document.getElementById('remove_friend_request');
  if(ele.hasAttribute('data-cancel-button')){
    const reciver_id=ele.getAttribute('data-cancel-button');
    const sender_mobile_number=ele.getAttribute('data-sender-mobile-number');
   
    if(sender_mobile_number!=undefined){
            const data={reciver_id,sender_mobile_number};
            console.log(data);
            fetch('/api/remove_from_friendList', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body:JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
               
               triggerAnimation(id);
               showMessage(data.message);
            })
            .catch(error => {
                console.error('Error:', error);
                
            });
    }

  }

}