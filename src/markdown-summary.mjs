/*!
 * Copyright © 2020 Amin NAIRI
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import {read} from "./library/filesystem.mjs";
import {getLines} from "./library/string.mjs";
import {getMarkdownSummary} from "./library/markdown.mjs";

(async () => {
    const path = process.argv[2];

    if (path === "--version" || path === "-v") {
        try {
            const packageJson = JSON.parse(await read("./package.json"));

            console.log(packageJson.version);
            process.exit(0);
        } catch (error) {
            console.error();
            process.exit(1);
        }
    }

    if (path === "--help" || path === "-h") {
        if (process.argv[1].startsWith("/usr/bin")) {
            console.log("Usage: markdown-summary /path/to/file.md");
        } else {
            console.log(`Usage: ${process.argv[0]} ${process.argv[1]} /path/to/file.md`);
        }

        process.exit(0);
    }

    if (!path) {
        console.error("Path required.");
        process.exit(1);
    }

    if (process.argv[3]) {
        console.error("Too much arguments.");
        process.exit(2);
    }

    try {
        const markdown = await read(path);
        const lines = getLines(markdown);
        const titles = getMarkdownSummary(lines);

        console.log(titles);
    } catch (error) {
        console.error(error.message);
        process.exit(3);
    }
})();
