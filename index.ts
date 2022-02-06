/*!
 * Command line interface for creating summaries for your Markdown files.
 * Copyright (C) 2022 Amin NAIRI
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import {readFile} from "fs/promises";
import {argv} from "process";

if (argv.length < 3) {
  console.log("No file provided.");
  process.exit(1);
}

if (argv.length > 3) {
  console.log("Too much arguments provided.");
  process.exit(2);
}

const file = process.argv[2];

readFile(file).then((fileBuffer) => {
  const content = fileBuffer.toString();
  const lines = content.split("\n");
  const headers = lines.filter(line => line.startsWith("#"));

  const titleLinks = headers.map((header): [string, string, string] => {
    const title = header.replace(/^#+\s?(.*?)\s?/g, "$1");
    const link = title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-]/g, "");
    const level = header.replace(/^(#+).*/, "$1").length;
    const indentation = "  ".repeat(level - 1);
    return [title, link, indentation];
  });

  const summary = titleLinks.map(([title, link, indentation], index) => {
    const similarLinks = titleLinks.slice(0, index).filter(([, currentLink]) => {
      return currentLink === link;
    });

    if (similarLinks.length === 0) {
      return `${indentation}- [${title}](#${link})`;
    }

    return `${indentation}- [${title}](#${link}-${similarLinks.length})`;
  });

  console.log(summary.join("\n"));
}).catch(error => {
  console.error(`Cannot open ${file}.`);

  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error(String(error));
  }

  process.exit(3);
});
