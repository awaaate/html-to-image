import chromium from "chrome-aws-lambda";
import { Browser } from "puppeteer"
export async function createBrowser() {
    const browser: Browser = await chromium.puppeteer.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath,
        headless: true,
        ignoreHTTPSErrors: true,
    });
    return browser;
}