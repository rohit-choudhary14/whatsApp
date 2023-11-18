
    function showMessage(message){
        document.getElementById('overlay').innerText=message;
        document.getElementById('overlay').style.bottom='30px'
        setTimeout(function close(){
            document.getElementById('overlay').style.bottom='-300px'
     
        },4000)
    }