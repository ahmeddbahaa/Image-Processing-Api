import express from 'express';
import path from 'path';
import { existsSync } from 'fs';
import sharp from 'sharp';

const images = express.Router();
images.get('/', async (req, res) => {
  const filename: string = req.query.filename as string;
  const width: number = parseInt(req.query.width as string);
  const length: number = parseInt(req.query.length as string);
  const errors = [];
  if (filename === undefined) {
    errors.push('Error !! Filename value Cannot be null ');
  }
  if (isNaN(width) || width < 0) {
    errors.push('Error !! Width Value is null or invalid');
  }
  if (isNaN(length) || length < 0) {
    errors.push('Error !! Lenght Value is null or invalid');
  }
  // if there's errors of user's input logging it to console
  // and sent it back to user in response
  console.log(errors);
  if (errors.length !== 0) {
    res.send(errors);
  } else {
    let fullPath: string = path.join('.', 'assets', 'full', filename as string);
    fullPath += '.jpg';
    let thumPath: string = path.join(
      '.',
      'assets',
      'thumb',
      filename as string
    );
    thumPath += '.jpg';
    try {
      // Check if file exists as raw image
      if (existsSync(fullPath)) {
        // Check if file is already processed before !
        if (existsSync(thumPath)) {
          const file = path.resolve(thumPath);
          res.sendFile(file);
        } else {
          // If not processed before then i will process it
          const file = path.resolve(fullPath);
          let outFile = path.join('assets', 'thumb', filename as string);
          outFile += '.jpg';
          sharp(file)
            .resize(length, width)
            .toFile(outFile)
            .then(() => {
              const out = path.resolve(outFile);
              res.sendFile(out);
            })
            .catch((error) => console.log(error));
        }
      } else {
        res.status(404).send('Error! no file was found in the Entered path');
      }
    } catch (error) {
      console.log('consoled', error);
    }
  }
});

export default images;
