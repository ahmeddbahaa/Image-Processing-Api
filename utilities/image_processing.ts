import sharp from 'sharp';
import path from 'path';

const resizeImage = async (
  filename: string,
  length: number,
  width: number
): Promise<string> => {
  let filePath: string = path.join('.', 'assets', 'full', filename as string);
  filePath += '.jpg';
  let outFile: string = path.join('.', 'assets', 'thumb', filename as string);
  outFile += '.jpg';
  await sharp(filePath).resize(length, width).toFile(outFile);
  return outFile;
};
export default resizeImage;
