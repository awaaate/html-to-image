import { promises as fs } from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import temp from "temp";


export default async (req: NextApiRequest, res: NextApiResponse) => {
    const fileName = req.query.fileName;
    if (typeof fileName === "string") {
        const buffer = await fs.readFile(path.join(temp.dir, fileName));
        res.statusCode = 200;
        res.setHeader("Content-Type", "image/jpeg");
        res.end(buffer, "binary");

        return;
    }
    res.statusCode = 400;
    res.end();
};
