import sharp from 'sharp';
import path from 'path';

const resizeImage = (
  filename: string,
  length: number,
  width: number
): string => {
  let filePath: string = path.join('.', 'assets', 'full', filename as string);
  filePath += '.jpg';
  let outFile = path.join('assets', 'thumb', filename as string);
  outFile += '.jpg';
  let ret = '';
  sharp(filePath)
    .resize(length, width)
    .toFile(outFile)
    .then(() => {
      ret = path.resolve(outFile);
    });
  return ret;
};
export default resizeImage;
