const fs = require('fs');
const request = require('request');

request('https://raw.githubusercontent.com/Snapperito/info/main/DISCORDHLJS.md', {}, (err, res, body) => {
    let langs = body.split('\n').slice(3).slice(0, -1);

    langs.forEach((e, i) => {
        let lang = e.split('|').slice(1).slice(0, -1);

        let classes = lang[1] ? lang[1].split(/\,\s?/) : false;

        if (classes) {
            let classString = "";

            classes.forEach((c, j) => classString += `${j}: "${c.trim()}", `);

            classes = classString;
        }

        langs[i] = `"${lang[0].trim()}": (classes: (${classes.trim()}), icon: "${lang[2] !== '' ? lang[2] : false}")`;
    })
    
    fs.writeFileSync('langs.scss', `$langs: (${langs.join(', ')});`)
})