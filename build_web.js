const fs = require('fs');

let userstyle = `
/* ==UserStyle==
@name         Discord Codeblock Tweaks
@description  Add line numbers & fancy language icons/header's to codeblocks
@author       Snapperito
@namespace    github.com/Snapperito/codeblock-icons
@version      1.0.0
==/UserStyle== */

@-moz-document domain("discord.com") {
    $replace$
}
`.trim();

const styles = fs.readFileSync("dist-alt.css").toString();

userstyle = userstyle.replace('$replace$', styles.trim());

fs.writeFileSync("codeblock-tweaks.user.css", userstyle)