import { readFile } from "fs";
export default class FileReader {
  static parse(url: string): Promise<void> {
    return new Promise((resolve, reject) => {
      readFile(url, 'utf-8',
        (error, response) => {
          if (error) {
            reject(console.log(error));
          }
          resolve(console.log(response));
        }
      )
    }
    );
  }
}