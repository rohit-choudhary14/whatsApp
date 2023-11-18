function setDropdown(count,arr){
     let parent=document.getElementById('dropdown');
     parent.innerHTML="";
     arr.forEach(element => {
        let childDiv=document.createElement('div');

        childDiv.innerHTML=`<a href="">${element}</a> `;
        parent.append(childDiv);
     });
    

}