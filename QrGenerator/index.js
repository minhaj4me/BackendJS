import { input } from '@inquirer/prompts';
import qr from 'qr-image'
import fs from 'fs'

const answer = await input({ message: 'Enter your URL' });

var qr_svg = qr.image(answer, { type: 'png' });
qr_svg.pipe(fs.createWriteStream('answer.png'));


fs.writeFile('message.txt', answer, (err) => {
    if (err) throw err;
    console.log('QR has been generated!');
});