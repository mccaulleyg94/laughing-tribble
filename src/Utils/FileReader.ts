import { readFile } from "fs";
export default class FileReader {
  static parse(url: string): void {
    readFile(url, 'utf-8', (error, response) => {
      if (error) {
        console.log(error);
      }
      console.log(response);
    }
    );
  }
}