export function initProfileHandling() {
    const viewProfileBody = document.getElementById('view_profile_body');

    document.getElementById('chatting_profile_header').addEventListener('click', function () {
        viewProfileBody.style.height = '100%';
    });

    document.getElementById('go_back_to_chat').addEventListener('click', function () {
        viewProfileBody.style.height = '0%';
    });
}
