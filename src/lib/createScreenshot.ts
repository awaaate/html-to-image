
import { Page } from "puppeteer";
import { createPageHtml } from "./createPageHtml";
type ScreenshotProps = {
    page: Page,
    html: string,
    css: string,
    width: number,
    height: number,
}


export const createScreenshot = async ({
    page, html, css, width, height
}: ScreenshotProps) => {
    const pageHtml = createPageHtml(html, css,width, height)
    await page.setContent(pageHtml.trim(), {
        waitUntil: ['networkidle0', 'domcontentloaded']
    });
    const element = await page.$("body");

    if (element) {

        const buffer = await element.screenshot({

            type: 'jpeg',
            quality: 100,
        });

        return buffer
    }

    return null;
};

export default createScreenshot;
