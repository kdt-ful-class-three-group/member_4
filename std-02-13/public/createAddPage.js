import { createInput } from "./createInput.js";
import { createTag } from "./createTag.js";
import { createHTML } from "./createHTML.js";
function createAddPage() {
    const form = `
        <form action="/api/students" method="POST">
            <div>
                <label>
                    이름: ${createInput("text", "name", "")}
                </label>
            </div>
            <div>
                <label>
                    좋아하는 음식 (쉼표로 구분): 
                    ${createInput("text", "likeFoods", "")}
                </label>
            </div>
            <div>
                <label>
                    싫어하는 음식 (쉼표로 구분): 
                    ${createInput("text", "hateFoods", "")}
                </label>
            </div>
            ${createTag("button", "저장", { type: "submit" })}
        </form>
    `;

    return createHTML(createTag("h1", "학생 추가") + form);
}

export { createAddPage };
