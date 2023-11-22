self.addEventListener('push', function(event) {
  
   const messageData = JSON.parse(event.data.text()); 

  const options = {
      title:messageData.notification.title,
      body: messageData.notification.body,
  };

  event.waitUntil(
      self.registration.showNotification('Notification Title', options)
          .then(() => {
              console.log('Notification displayed successfully',options);
          })
          .catch(error => {
              console.error('Error displaying notification:', error);
          })
  );
});
