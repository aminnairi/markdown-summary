import {getCharacterCount} from "./string.mjs";

/**
 * Return the title of a Markdown link.
 * 
 * @param {string} text
 * 
 * @return {string}
 * 
 * @example
 * getMarkdownLinkTitle("[Yarn][yarn]");    // "Yarn"
 * getMarkdownLinkTitle("[Node.js][node]"); // "Node.js"
 * getMarkdownLinkTitle("[NPM][npm]");      // "NPM"
 */
export function getMarkdownLinkTitle(text) {
    /** @const {RegExp} pattern */
    const pattern = /\[(?<title>.*)]\[.*]/;

    /** @const {Object} */
    const match = pattern.exec(text); 

    if (match === null) {
        return text;
    }

    if (!Object.prototype.hasOwnProperty.call(match, "groups")) {
        return text;
    }

    if (!Object.prototype.hasOwnProperty.call(match.groups, "title")) {
        return text;
    }

    return match.groups.title;
}

export const getMarkdownSummary = array => {
    let LENGTH = array.length;
    const markdownTitles = [];

    for (let index = 0; index < LENGTH; index++) {
        if (array[index].startsWith("##")) {
            markdownTitles.push(array[index]);
        }
    }

    LENGTH = markdownTitles.length;
    const markdownTitlesAndLinks = [];

    for (let index = 0; index < LENGTH; index++) {
        const level = (getCharacterCount("#", markdownTitles[index]) - 2) * 2;
        const markdownTitle = getMarkdownLinkTitle(markdownTitles[index].split("#").join("").trim());
        const markdownLink = "#" + getMarkdownLinkTitle(markdownTitles[index].split("#").join("").split(":").join("").trim().toLowerCase().split(" ").join("-"));

        markdownTitlesAndLinks.push({
            title: `${" ".repeat(level)}- [${markdownTitle}]`,
            link: markdownLink
        });
    }

    const markdownTitlesAndLinksDeduplicated = [];

    for (let current = 0; current < LENGTH; current++) {
        let duplicates = 0;

        for (let next = 0; next < current; next++) {
            if (markdownTitlesAndLinks[current].link === markdownTitlesAndLinks[next].link) {
                duplicates++;
            }
        }
        
        if (duplicates > 0) {
            markdownTitlesAndLinksDeduplicated.push(`${markdownTitlesAndLinks[current].title}(${markdownTitlesAndLinks[current].link + duplicates})`);
        } else {
            markdownTitlesAndLinksDeduplicated.push(`${markdownTitlesAndLinks[current].title}(${markdownTitlesAndLinks[current].link})`);
        }
    }

    return markdownTitlesAndLinksDeduplicated.join("\n");
};
