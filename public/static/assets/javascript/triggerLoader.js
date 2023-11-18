export function showLoader(){
    setTimeout(function wait(){
        const loader=document.getElementById('loader');
        loader.style.display='flex'
    },0)
}