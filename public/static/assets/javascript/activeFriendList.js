export function initActiveFreiendList(closeLoader){
  
  function activeFreiendList(id) {
    fetch("/api/activeFriendList", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {

        const result = JSON.parse(data);

        let parent = document.getElementById("active_friends_chat_list_parent");
        parent.innerHTML = "";
        let count = result != null?result.length:0;
        if (result != null) {
          result.forEach((element) => {
            let div = document.createElement("a");
            let margin = document.createElement("div");
            let r_id = element.sender_id;

            let user_name = null;
            let profile = `<svg viewBox="0 0 212 212" height="49" width="49" preserveAspectRatio="xMidYMid meet" class="ln8gz9je ppled2lx" version="1.1" x="0px" y="0px" enable-background="new 0 0 212 212" xml:space="preserve"><path fill="#DFE5E7" class="background" d="M106.251,0.5C164.653,0.5,212,47.846,212,106.25S164.653,212,106.25,212C47.846,212,0.5,164.654,0.5,106.25 S47.846,0.5,106.251,0.5z"></path><g><path fill="#FFFFFF" class="primary" d="M173.561,171.615c-0.601-0.915-1.287-1.907-2.065-2.955c-0.777-1.049-1.645-2.155-2.608-3.299 c-0.964-1.144-2.024-2.326-3.184-3.527c-1.741-1.802-3.71-3.646-5.924-5.47c-2.952-2.431-6.339-4.824-10.204-7.026 c-1.877-1.07-3.873-2.092-5.98-3.055c-0.062-0.028-0.118-0.059-0.18-0.087c-9.792-4.44-22.106-7.529-37.416-7.529 s-27.624,3.089-37.416,7.529c-0.338,0.153-0.653,0.318-0.985,0.474c-1.431,0.674-2.806,1.376-4.128,2.101 c-0.716,0.393-1.417,0.792-2.101,1.197c-3.421,2.027-6.475,4.191-9.15,6.395c-2.213,1.823-4.182,3.668-5.924,5.47 c-1.161,1.201-2.22,2.384-3.184,3.527c-0.964,1.144-1.832,2.25-2.609,3.299c-0.778,1.049-1.464,2.04-2.065,2.955 c-0.557,0.848-1.033,1.622-1.447,2.324c-0.033,0.056-0.073,0.119-0.104,0.174c-0.435,0.744-0.79,1.392-1.07,1.926 c-0.559,1.068-0.818,1.678-0.818,1.678v0.398c18.285,17.927,43.322,28.985,70.945,28.985c27.678,0,52.761-11.103,71.055-29.095 v-0.289c0,0-0.619-1.45-1.992-3.778C174.594,173.238,174.117,172.463,173.561,171.615z"></path><path fill="#FFFFFF" class="primary" d="M106.002,125.5c2.645,0,5.212-0.253,7.68-0.737c1.234-0.242,2.443-0.542,3.624-0.896 c1.772-0.532,3.482-1.188,5.12-1.958c2.184-1.027,4.242-2.258,6.15-3.67c2.863-2.119,5.39-4.646,7.509-7.509 c0.706-0.954,1.367-1.945,1.98-2.971c0.919-1.539,1.729-3.155,2.422-4.84c0.462-1.123,0.872-2.277,1.226-3.458 c0.177-0.591,0.341-1.188,0.49-1.792c0.299-1.208,0.542-2.443,0.725-3.701c0.275-1.887,0.417-3.827,0.417-5.811 c0-1.984-0.142-3.925-0.417-5.811c-0.184-1.258-0.426-2.493-0.725-3.701c-0.15-0.604-0.313-1.202-0.49-1.793 c-0.354-1.181-0.764-2.335-1.226-3.458c-0.693-1.685-1.504-3.301-2.422-4.84c-0.613-1.026-1.274-2.017-1.98-2.971 c-2.119-2.863-4.646-5.39-7.509-7.509c-1.909-1.412-3.966-2.643-6.15-3.67c-1.638-0.77-3.348-1.426-5.12-1.958 c-1.181-0.355-2.39-0.655-3.624-0.896c-2.468-0.484-5.035-0.737-7.68-0.737c-21.162,0-37.345,16.183-37.345,37.345 C68.657,109.317,84.84,125.5,106.002,125.5z"></path></g></svg>`;

            if (element.sender_id == id) {
              r_id = element.reciver_user_id;
              user_name =
                element.sender_want_to_add_fname +
                element.sender_want_to_add_lname;
              if (element.rprofilePicture == 1) {
                profile = `<img src="../../uploads/profile/pictures/${r_id}.jpg"  style="height:49px;width:49px;border-radius:50%;object-fit: cover;"/>`;
              }
            } else {
              r_id = element.sender_id;
              user_name = element.sender_user_name;
              if (element.sprofilePicture == 1) {
                profile = `<img src="../../uploads/profile/pictures/${r_id}.jpg"   style="height:49px;width:49px;border-radius:50%;object-fit: cover;"/>`;
              }
            }

            div.href = `/start/active/chat/${r_id}`;
            div.style.color = "#111";
            div.style.textDecoration = "none";

            div.innerHTML = `
                                  <div>
                                      <div id='chatting_with_your_friend_${r_id}'>
                                              ${profile}
                                              <span style='display: flex;align-items: center;justify-content: space-between;margin-left: 10px;word-wrap: unset; overflow: hidden;max-width: 130px; text-wrap: nowrap;font-weight: 600;'>${user_name}</span>  
                                      </div>
                                      <div style=' display: flex;align-items: center;justify-content: end; font-weight: 600;'>
                                      <spna >13/10/23</spna>
                                      </div>
                              </div>
                          `;

            parent.append(div);
            if (count - 1 > 0) {
              margin.style.background = "#fff";
              parent.append(margin);
            }

            count--;
          });
          let breakLine = document.createElement("hr");
          let infoDiv = document.createElement("div");
          infoDiv.style.marginTop = "20px";
          infoDiv.innerHTML = `
                          <div style="font-size:12px;display:flex;justify-content: center;color:#b2b2b2">
                              <span>
                              <span><svg viewBox="0 0 13 12" height="12" width="13" style="color:#b2b2b2" preserveAspectRatio="xMidYMid meet" class=""><path d="M9.54004 3.4668C9.54004 2.87891 9.39421 2.33887 9.10254 1.84668C8.81543 1.34993 8.4235 0.958008 7.92676 0.670898C7.43457 0.379232 6.89681 0.233398 6.31348 0.233398C5.72559 0.233398 5.18327 0.379232 4.68652 0.670898C4.19434 0.958008 3.80241 1.34993 3.51074 1.84668C3.22363 2.33887 3.08008 2.87891 3.08008 3.4668V4.7041C3.05273 4.71322 2.99805 4.73828 2.91602 4.7793C2.61979 4.9388 2.39421 5.16439 2.23926 5.45605C2.15267 5.61556 2.09115 5.79102 2.05469 5.98242C2.01823 6.17383 2 6.45866 2 6.83691V9.25C2 9.62826 2.01823 9.91309 2.05469 10.1045C2.09115 10.2959 2.15267 10.4714 2.23926 10.6309C2.39421 10.9225 2.61979 11.1481 2.91602 11.3076C3.07096 11.3942 3.24414 11.4557 3.43555 11.4922C3.63151 11.5286 3.91634 11.5469 4.29004 11.5469H8.33008C8.70378 11.5469 8.98633 11.5286 9.17773 11.4922C9.3737 11.4557 9.54915 11.3942 9.7041 11.3076C9.99577 11.1527 10.2214 10.9271 10.3809 10.6309C10.4674 10.4714 10.529 10.2959 10.5654 10.1045C10.6019 9.91309 10.6201 9.62826 10.6201 9.25V6.83691C10.6201 6.45866 10.6019 6.17383 10.5654 5.98242C10.529 5.79102 10.4674 5.61556 10.3809 5.45605C10.2214 5.15983 9.99577 4.93424 9.7041 4.7793C9.62207 4.73828 9.56738 4.71322 9.54004 4.7041V3.4668ZM4.37207 3.4668C4.37207 3.11589 4.45866 2.79232 4.63184 2.49609C4.80501 2.19531 5.03971 1.95833 5.33594 1.78516C5.63672 1.61198 5.96257 1.52539 6.31348 1.52539C6.66439 1.52539 6.98796 1.61198 7.28418 1.78516C7.5804 1.95833 7.8151 2.19531 7.98828 2.49609C8.16146 2.79232 8.24805 3.11589 8.24805 3.4668V4.54004H4.37207V3.4668Z"></path></svg></span>
                              <span>Your personal messages are <a style="color:#008069">end-to-end encrypted</a></span> 
                              </span>
                          </div>
                      `;
          parent.append(breakLine);
          parent.append(infoDiv);
        }
        closeLoader();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  return{
    activeFreiendList
  }
}
