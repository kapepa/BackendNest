import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as uuid from 'uuid';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class FileService {
  async load(file: Express.Multer.File): Promise<string> {
    try {
      const uuidName = uuid.v4();
      const extention = file.originalname.split('.').pop();
      const newName = `${uuidName}.${extention}`;
      const dir = path.resolve(__dirname, '..', 'static');
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      const imageBuffer = Buffer.from(file.buffer);
      await fs.writeFileSync(`${dir}\\${newName}`, imageBuffer);
      return newName;
    } catch (e) {
      throw new HttpException(
        'Happen mistake when file write down',
        HttpStatus.FORBIDDEN
      );
    }
  }
}
