import { createTag } from "./createTag.js";
function createDiv(content, className) {
    return createTag("div", content, { class: className });
}

export { createDiv };
