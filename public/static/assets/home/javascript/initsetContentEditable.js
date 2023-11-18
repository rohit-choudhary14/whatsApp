export function initsetContentEditable(){
    async function setContentEditable(event,id,target){
        try{
            event.target.style.display='none';
            let checkMarkIcon=document.getElementById(id).style.display='block'
            let uid=document.getElementById(target);
            uid.contentEditable=true;
            uid.style.border='solid 2px  #008069';
            uid.style.borderBottomColor='solid 2px #008069';
            uid.style.borderTopColor='white';
            uid.style.borderLeftColor='white';
            uid.style.borderRightColor='white';
            uid.style.width='100%';
            uid.style.outline='none';
        }catch(error){
            console.error(error);
        }
       
    }
    return {
        setContentEditable
    }
}