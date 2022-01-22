export function createPageHtml(html: string, css: string, width: number, height: number) {
    return `
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
        body{
            width: ${width}px;
            height: ${height}px;
        }
            ${css}
        </style>
        </head>
    <body >
        ${html}
    </body>
    </html>
`
}