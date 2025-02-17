import { createTag } from "./createTag.js";
import { createLink } from "./createLink.js";
import { createDiv } from "./createDiv.js";
import { createHTML } from "./createHTML.js";

function createHomePage(students) {
    let studentList = "";
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        const content = `
            ${createTag("h3", student.name + " (순번: " + student.order + ")")}
            ${createTag("p", "좋아하는 음식: " + student.food.like.join(", "))}
            ${createTag("p", "싫어하는 음식: " + student.food.hate.join(", "))}
            ${createLink("/student?order=" + student.order, "상세보기")}
        `;
        studentList += createDiv(content, "student-card");
        // console.log("studentList" + studentList);
    }

    return createHTML(createTag("h1", "학생 목록") + studentList);
}

export { createHomePage };
