export function initupdatedData(){
    async  function updatedData(Sendingdata){
        try{
            let loader=document.getElementById('loader');
            loader.style.display='flex';
            fetch('/api/updateUserName', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(Sendingdata),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Response from server:', data);
                loader.style.display='none';
            })
            .catch(error => {
            console.error('Error:', error);
            });

        }catch(error){
            console.error(error);
        }
       
    }
    return {
        updatedData
    }
}