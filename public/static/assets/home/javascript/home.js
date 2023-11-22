import { initcheckContentEditable } from "./initcheckContentEditable.js";
import { initsetContentEditable } from "./initsetContentEditable.js";
import { initupdatedData } from "./initupdatedData.js";
import { initgetFriendList } from "./getFriendList.js";
import {showLoader} from "../../javascript/triggerLoader.js";
import { closeLoader } from "../../javascript/closeLoader.js";
import {initRecevedRequest} from "../../javascript/recivedRequest.js"
import{initUploadProfilePicture} from"../../javascript/upload_profile_picture.js"
import{initActiveFreiendList} from "../../javascript/activeFriendList.js"
document.addEventListener('DOMContentLoaded', function () {
    const controllupdatedData=initupdatedData();
    const controllcheckContentEditable=initcheckContentEditable(controllupdatedData.updatedData);
    const controllsetContentEditable=initsetContentEditable();
    const controllinitRecevedRequest=initRecevedRequest(closeLoader);
    const controllinitUploadProfilePicture=initUploadProfilePicture(closeLoader)
    const controllgetFriendList=initgetFriendList(closeLoader);
    const controllinitActiveFreiendList=initActiveFreiendList(closeLoader);

    if(active_friends_chat_list_parent.hasAttribute("data-id")){
        showLoader();
        const active_friends_chat_list_parent_id=active_friends_chat_list_parent.getAttribute("data-id");
        controllinitActiveFreiendList.activeFreiendList(active_friends_chat_list_parent_id);
    }
    
    setting_icon.addEventListener('click',function(event){
        document.getElementById('setting_sidebar_main_panel').style.left='0px'
    })
    
    go_back_to_chat_screen.addEventListener('click',function(event){
        document.getElementById('main_panel_').style.left='-5000px';
        document.getElementById('message_icon').style.display='flex';
        document.getElementById('setting_icon').style.display='flex';
    })
    go_back_to_chat_screen_1.addEventListener('click',function(event){
        document.getElementById('add_friend_default_icon_main_panel').style.left='-5000px';
        document.getElementById('message_icon').style.display='flex';
        document.getElementById('setting_icon').style.display='flex';
    })
    submit.addEventListener('click',function(event){
        document.getElementById('main_panel_').style.zIndex='10';
        document.getElementById('main_panel_').style.left='0px';
        document.getElementById('message_icon').style.display='none';
        document.getElementById('setting_icon').style.display='none';
    })
    addFriendSidebar.addEventListener('click',function(event){
        document.getElementById('add_friend_default_icon_main_panel').style.left='0px';
        document.getElementById('message_icon').style.display='none';
        document.getElementById('setting_icon').style.display='none';
        showLoader();
        controllgetFriendList.getFreiendList();
    })
    add_friend_default_icon_parent.addEventListener('click',function(event){
        document.getElementById('add_friend_default_icon_main_panel').style.left='0px';
        document.getElementById('message_icon').style.display='none';
        document.getElementById('setting_icon').style.display='none';
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
    input_profile_picture.addEventListener("change",function(event){
        showLoader();
        const id=input_profile_picture.getAttribute("data-value");
        controllinitUploadProfilePicture.upload_profile_picture(id);
    })
    //setting side bar js imple.
    go_back_to_chat_screen_setting_sidebar.addEventListener('click',function(event){
        if(go_back_to_chat_screen_setting_sidebar.hasAttribute('data-search-activeted')){
            let svg=document.getElementById('go_back_to_chat_screen_setting_sidebar');
            if(svg.getAttribute('data-search-activeted')=="false"){
                document.getElementById('setting_sidebar_main_panel').style.left='-5000px'

            }else{
                let setting_sidebar_main_panel_header=document.getElementById('setting_sidebar_main_panel_header');
                setting_sidebar_main_panel_header.style.background="#008069";
                searchSettings.style.width="46px";
                
                let go_back_to_chat_screen_setting_sidebar=document.getElementById('go_back_to_chat_screen_setting_sidebar');
                go_back_to_chat_screen_setting_sidebar.classList.add('text-white');
       
                svg.style.transform="rotate(0deg)";
                svg.setAttribute('data-search-activeted',"false");
            }
            
        }
        
    })
    navigate_to_user_default.addEventListener('click',function(event){
        document.getElementById('setting_sidebar_main_panel').style.left='-5000px'
        var defaultProfileIcon = document.getElementById('default_profile_icon');
        if (defaultProfileIcon) {
            defaultProfileIcon.click();
        } else {
            console.error('Element with id "default_profile_icon" not found.');
        }
    })
    searchSettings.addEventListener('click',function(){
        let setting_sidebar_main_panel_header=document.getElementById('setting_sidebar_main_panel_header');
        setting_sidebar_main_panel_header.style.background="#fff";
        searchSettings.style.width="80%";
        
        let go_back_to_chat_screen_setting_sidebar=document.getElementById('go_back_to_chat_screen_setting_sidebar');
        go_back_to_chat_screen_setting_sidebar.classList.remove('text-white');
       
        let svg=document.getElementById('go_back_to_chat_screen_setting_sidebar');
        svg.style.transform="rotate(180deg)";

        if(svg.hasAttribute('data-search-activeted')){
            svg.setAttribute('data-search-activeted',"true");
        }
    })
});