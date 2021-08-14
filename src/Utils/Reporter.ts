import { writeFile, mkdirSync, existsSync } from "fs";
import FileReader from "./FileReader";
export default class Reporter {
  private static base_path = '.';
  private static month_names = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  private static check_and_make_dir(path: string) {
    let incrementalPath = '';
    path.split('/').forEach(
      subpath => {
        incrementalPath += subpath + '/';
        if (!existsSync(incrementalPath)) mkdirSync(incrementalPath);
      }
    )
  }
  static async report(context: string | NodeJS.ArrayBufferView | object): Promise<string> {
    const date = new Date();
    const dir = `${this.base_path}/reports/${this.month_names[date.getMonth()]}/${date.getDate()}`;
    Reporter.check_and_make_dir(dir);
    const file_path = `${dir}/${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}.json`;
    writeFile
      (
        file_path,
        typeof context == 'object' ? JSON.stringify(context, undefined, ' ') : context,
        () => { console.log(`WROTE TO ${file_path}`) }
      );
    return await FileReader.parse(file_path);
  }
}