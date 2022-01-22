export const basicTemplate = ({ domain }: { domain: string }) => ({
    css: `.heading {
        font-size: 32px;
        font-weight: 900;
    }
*{

    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
img {
    width: 500px;
    height: 500px;
    margin: auto;
    border-radius: 7px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
button {
    border-radius: 7px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    padding: 16px;
    width: 500px;
    margin-top: 16px;
    background-color: #fff2ac;
    background-image: linear-gradient(
        to right,
        #ffe359 0%,
        #fff2ac 100%
    );
    font-weight: bolder;
    font-size: 32px;
    border: 0;
}`,
    html: `<h1 class="heading">Hello world</h1>
<img src="${domain}/cat.jpg" class="image" />
<button>I'm a cat</button>
    `,
    width: 700,
    height: 700,
});
