function accept_request(id){
    const data={id};
    console.log(data);
    fetch('/api/accept-request', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body:JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        showMessage(data);
                 
    })
    .catch(error => {
        console.error('Error:', error);
        
    });
}