import cards from './data/data.js';

const card_html = document.querySelector('.c-grid');
for (let i = 0; i < 4; i++) {
    const card = document.createElement("div");
    card.className = `c-cards`;
    const subjects = cards[i].subject ? `${cards[i].subject}<div class="pipe">|</div>
        Grade
        <div class="grade">${cards[i].grade}</div>
        <div class="plus">${cards[i].kt}</div>` : ` `;
    const lesseons = cards[i].unit ? ` <div class="number-line-2">${cards[i].unit}</div> Units 
    <div class="number-line-2 lm">${cards[i].lesson}</div> Lessons 
    <div class="number-line-2 lm">${cards[i].topic}</div> 
    Topics ` : ` `;

    let classesOptions = ``;
    for (let j = 0; j < cards[i].class.length; j++) {
        classesOptions += `<option value="${cards[i].class[j]}">${cards[i].class[j]}</option>`
        classesOptions += "\n";
    }
    classesOptions = classesOptions == "" ? `<option value="" disabled selected hidden style="color: rgba(0,0,0,0.4);">No Classes</option>` : classesOptions;
    const students = cards[i].number_of_students ? ` <div>${cards[i].number_of_students} Students</div>` : ` `;
    const dates = cards[i].date === "" ? ` ` :
        `<div class="pipe">|</div><div>${cards[i].date}</div>`;
    const previewClass = cards[i].preview ? "" : "i-disabled";
    const manage_courseClass = cards[i].manage_course ? "" : "i-disabled";
    const grade_submissionClass = cards[i].grade_submission ? "" : "i-disabled";
    const reoprtClass = cards[i].report ? "" : "i-disabled";
    // const expireTxt = cards[i].expiry ? `<div class="expired__txt">EXPIRED</div>` : "";

    card.innerHTML = `
        <div class="card">
            <img src="${cards[i].image}" alt="" class="card-img">
            <div class="card-details">
                <div class="cardinfo1">
                    <div class="card-title">${cards[i].title}</div>
                    <img class="star" src="./icons/favourite.svg" alt="">
                </div>
                <div class="cardinfo2 regular-course-label">
                    ${subjects}          
                </div>
                <div class="cardinfo3 regular-course-label">
                    ${lesseons}     
                </div>
                <select name="select-class" class="card-select-input">
                    ${classesOptions}
                </select>
                <div class="cardinfo4 regular-course-label">
                    ${students}
                    ${dates}
                </div>
            </div>
        </div>
        <div class="card-icons">
            <img class="${previewClass}" src="./icons/preview.svg" alt="">
            <img class="${manage_courseClass}" src="./icons/manage course.svg" alt="">
            <img class="${grade_submissionClass}" src="./icons/grade submissions.svg" alt="">
            <img class="${reoprtClass}" src="./icons/reports.svg" alt="">
        </div>
    `;
    card_html.appendChild(card);
}
