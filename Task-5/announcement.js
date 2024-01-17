import anndata from './data/announcement_data.js';

let announcements = document.getElementById('ann');

function createAnnouncement(alertdata) {
    let alert = document.createElement('div');
    alert.classList.add('alert');
    if (alertdata.read === false) {
        alert.classList.add('alert-unread');
    }

    alert.innerHTML = `
        <div class="alert-title">
            <div class="alert-author">PA: ${alertdata.PA}</div>
            <div class="alert-read-status">${alertdata.read ? `<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#1f7a54" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>` : `<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#1f7a54" d="M32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z"/></svg>` }</div>
        </div>
        <div class="alert-message">${alertdata.message}</div>
        ${ alertdata.class ? `<div class="label-class">Class : <div class="alert-class">${alertdata.class}</div></div>` : ``}
        ${ alertdata.course ? `<div class="label-course">Course : <div class="alert-course">${alertdata.course}</div></div>` : ``}
        <div class="alert-footer">
        ${ alertdata.files ? `<div class="label-files">📎 <div class="alert-files">${alertdata.files}</div> files are attached</div>`:``}
        ${ alertdata.timestamp ? `<div class="alert-timestamp">${alertdata.timestamp}</div>` : ``}</div>`

        announcements.appendChild(alert);

}

anndata.forEach(function (announcement) {
    createAnnouncement(announcement);
});

let buttons = document.createElement('div');
buttons.classList.add('announcement-show-button');

let showallbutton = document.createElement('div');
showallbutton.classList.add('announcement-buttons');
showallbutton.classList.add('seperator');
showallbutton.innerHTML = 'Show All'

let createnewbutton = document.createElement('div');
createnewbutton.classList.add('announcement-buttons');
createnewbutton.innerHTML = 'Create New'

buttons.appendChild(showallbutton);
buttons.appendChild(createnewbutton);

announcements.appendChild(buttons);