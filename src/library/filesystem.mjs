import {promises as fs} from "fs";

export const read = async path => {
    try {
        const buffer = await fs.readFile(path);
        const text = buffer.toString();

        return text;
    } catch (error) {
        throw new Error(`Failed to read file ${path}.`);
    }
};
