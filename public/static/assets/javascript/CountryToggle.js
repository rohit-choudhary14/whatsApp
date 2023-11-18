document.addEventListener('DOMContentLoaded', function () {
    // Wait for the DOM to be fully loaded
    const selectElement = document.querySelector('select');
  
    selectElement.addEventListener('change', function (event) {
      
      document.getElementById('country_code_with_mobile').value=event.target.value;
    });


    const submit=document.getElementById('submitForm');
    submit.addEventListener('click',function(event){
        event.preventDefault();
        let form=document.getElementById('login_form');
        let mobile=document.getElementById('mobile_number').value;
        let country_code=document.getElementById('country_code_with_mobile').value;
        if((country_code!=undefined )&&(mobile!=undefined && mobile.length==10)){
            form.submit();
        }else if((country_code!=undefined ) && (mobile.length<10)){
               document.getElementById('overlay').innerText='Valid Phone Number is required';
               document.getElementById('overlay').style.visibility='visible';
               document.getElementById('overlay').style.opacity='1';
               setTimeout(function close(){
                document.getElementById('overlay').style.visibility='hidden';
                document.getElementById('overlay').style.opacity='0';
               },2000)
               
               
        }
    })
});




