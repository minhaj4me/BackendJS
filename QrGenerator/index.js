/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

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