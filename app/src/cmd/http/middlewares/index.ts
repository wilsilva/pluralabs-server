import bodyParser from 'body-parser';

export const urlEnconded = bodyParser.urlencoded({ extended: false });
export const jsonParser = bodyParser.json();