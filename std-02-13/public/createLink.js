import { createTag } from "./createTag.js";
function createLink(href, text) {
    // href
    return createTag("a", text, { href: href });
}

export { createLink };
