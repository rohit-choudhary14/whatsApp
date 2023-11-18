import { initcheckContentEditable } from "./initcheckContentEditable.js";
import { initsetContentEditable } from "./initsetContentEditable.js";
import { initupdatedData } from "./initupdatedData.js";
import { initgetFriendList } from "./getFriendList.js";
import {showLoader} from "../../javascript/triggerLoader.js";
import { closeLoader } from "../../javascript/closeLoader.js";
import {initRecevedRequest} from "../../javascript/recivedRequest.js"
document.addEventListener('DOMContentLoaded', function () {
    const controllupdatedData=initupdatedData();
    const controllcheckContentEditable=initcheckContentEditable(controllupdatedData.updatedData);
    const controllsetContentEditable=initsetContentEditable();
    const controllinitRecevedRequest=initRecevedRequest(closeLoader);
    
    const controllgetFriendList=initgetFriendList(closeLoader);
    setting_icon.addEventListener('click',function(event){
        document.getElementById('setting_sidebar_main_panel').style.left='0px'
    })
    
    go_back_to_chat_screen.addEventListener('click',function(event){
        document.getElementById('main_panel_').style.left='-5000px';
        document.getElementById('message_icon').style.display='flex';
    })
    go_back_to_chat_screen_1.addEventListener('click',function(event){
        document.getElementById('add_friend_default_icon_main_panel').style.left='-5000px';
        document.getElementById('message_icon').style.display='flex';
    })
    submit.addEventListener('click',function(event){
        document.getElementById('main_panel_').style.zIndex='10';
        document.getElementById('main_panel_').style.left='0px';
        document.getElementById('message_icon').style.display='none';
    })
    addFriendSidebar.addEventListener('click',function(event){
        document.getElementById('add_friend_default_icon_main_panel').style.left='0px';
        document.getElementById('message_icon').style.display='none';
        showLoader();
        controllgetFriendList.getFreiendList();
    })
    switchgetFriendList.addEventListener("click",function(event){
        showLoader();
        controllgetFriendList.getFreiendList();
    })
    switchReceviedRequest.addEventListener("click",function(event){
        showLoader();
        controllinitRecevedRequest.recivedRequest();
    })
    edit_name_icon.addEventListener('click',function(event){
        controllsetContentEditable.setContentEditable(event,'checkmark_name_icon','edit_name_value')
    });

    checkmark_name_icon.addEventListener('click',function(event){
        controllcheckContentEditable.checkContentEditable(event,'edit_name_value','edit_name_icon','edit_name_value','edit_about_value')
    });
    checkmark_about_icon.addEventListener('click',function(event){
        controllcheckContentEditable.checkContentEditable(event,'edit_about_value','edit_about_icon','edit_name_value','edit_about_value')
    });
    
    edit_about_icon.addEventListener('click',function(event){
        controllsetContentEditable.setContentEditable(event,'checkmark_about_icon','edit_about_value');
    });

});