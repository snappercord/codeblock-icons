const fs = require('fs');
const request = require('request');

request('https://raw.githubusercontent.com/Snapperito/info/a220a176666f7f4128fa00137dc4f80759f78c99/DISCORDHLJS.md', {}, (err, res, body) => {
    let langs = body.split('\n').slice(3).slice(0, -1);

    langs.forEach((e, i) => {
        let lang = e.split('|').slice(1).slice(0, -1);

        let classes = lang[1] ? lang[1].split(/\,\s?/) : false;

        if (classes) {
            classes.forEach((c, j) => classes[j] = c.trim());

            classes = `["${classes.join('", "')}"]`;
        }

        langs[i] = `"${
            lang[2] !== '' ? lang[2] : false}": (name: "${
            lang[0].trim()}", class: ${classes})`;
    })
    
    fs.writeFileSync('langs.scss', `$langs: (${langs.join(', ')});`)
})