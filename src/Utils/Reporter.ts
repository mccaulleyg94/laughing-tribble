import { writeFile, mkdirSync, existsSync } from "fs";
import FileReader from "./FileReader";
export default class Reporter {
  static basePath = './reports/';
  static monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  static weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  static checkMakeDir(path: string) {
    let incrementalPath = '';
    path.split('/').forEach(
      subpath => {
        incrementalPath += subpath + '/';
        if (!existsSync(incrementalPath)) mkdirSync(incrementalPath);
      }
    )
  }
  static report(context: string | NodeJS.ArrayBufferView | object): void {
    const date = new Date();
    const dir = `${this.basePath}${this.monthNames[date.getMonth()]}/${date.getDate()}`;
    Reporter.checkMakeDir(dir);
    const filePath = `${dir}/${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}.json`;
    writeFile(filePath,
      typeof context == 'object' ? JSON.stringify(context, undefined, ' ') : context,
      () => { console.log(`WROTE TO ${filePath}`) });
    FileReader.parse(filePath);
  }
}