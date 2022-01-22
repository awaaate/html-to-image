import fs from "fs";
import path from "path";
import temp from "temp";

import { NextApiRequest, NextApiResponse } from "next";

import { createBrowser } from "../../lib/createBrowser";
import { createScreenshot } from "../../lib/createScreenshot";
import { validateParams } from "../../lib/validateParams";
import { rateLimit } from "../../lib/rate-limit";

const limiter = rateLimit({
    interval: 60 * 1000, // 60 seconds
    uniqueTokenPerInterval: 500, // Max 500 users per second
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        await limiter.check(res, 10, "CACHE_TOKEN");
        await validateParams(req.body);
        const browser = await createBrowser();

        const page = await browser.newPage();
        const { html, css, width, height } = req.body;
        const screenshot = await createScreenshot({
            page,
            html: html,
            css: css,
            width: parseInt(width),
            height: parseInt(height),
        });
        if (screenshot) {
            const dir = temp.path({ suffix: ".jpeg" });
            const stream = fs.createWriteStream(dir);
            stream.write(screenshot);
            stream.end();
            res.json({
                fileName: path.parse(dir).base,
            });
            res.end();
        } else {
            res.json({
                error: true,
                message: "problem creating image",
            });
            res.end();
        }
    } catch (error) {
        res.json({
            error: true,
            message: error,
        });
        res.end();
    }
};
