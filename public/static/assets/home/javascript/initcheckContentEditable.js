export function initcheckContentEditable(updatedData){
    async function checkContentEditable(event,uuid,id,uid_name,uid_about){
        try{
            event.target.style.display='none';
    
            document.getElementById(id).style.display='block';
            const target=document.getElementById(uuid);
            target.contentEditable=false;
            target.style.border='none';
            const updatedNameData=document.getElementById(uid_name).innerText;
            const updatedAbout=document.getElementById(uid_about).innerText;
            
            if((updatedNameData!=undefined && updatedNameData.length>=1) &&(updatedAbout!=undefined && updatedAbout.length>=1)){
                const Sendingdata={name:updatedNameData,about:updatedAbout};
                updatedData(Sendingdata);
            }else{
                target.innerText=(id==edit_name_icon)?(previousNameValue):(previousAboutValue);  
            }
        }catch(error){
            console.error(error);
        }
    }
    return {
        checkContentEditable
    }
}