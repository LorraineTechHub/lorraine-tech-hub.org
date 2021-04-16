import fs from "fs";
import {join} from "path";

export default function FetchAllProfiles() {
    const storageFolder = 'pages/profils/_data/'
    
    return fs.readdirSync(join(process.cwd(), storageFolder))
        .map(file => fs.readFileSync(storageFolder + file, 'utf8'))
        .map(content => JSON.parse(content))
}