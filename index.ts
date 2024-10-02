import fs, { PathLike } from 'fs';
import { Path } from './helpers/path';

interface IWrapFs {
  existsSync(fileName: string): Promise<boolean>;
  readdir( path: PathLike,
        options:
            | {
                encoding: BufferEncoding | null;
                withFileTypes?: false | undefined;
                recursive?: boolean | undefined;
            }
            | BufferEncoding
            | undefined
            | null,
        callback: (err: NodeJS.ErrnoException | null, files: string[]) => void,
  ): void;
}
 export class WrapFs  implements IWrapFs {
  private  readonly sharePath: string
  private readonly path : Path
  constructor(sharePath: string){
    this.sharePath = sharePath;
    this.path = new Path(this.sharePath);
  }

  public readdir(path: PathLike, options: { encoding: BufferEncoding | null; withFileTypes?: false | undefined; recursive?: boolean | undefined; } | BufferEncoding | undefined | null, callback: (err: NodeJS.ErrnoException | null, files: string[]) => void): void {
    const subDirectory = this.path.getSubDirectoryName(path);
    return fs.readdir(subDirectory, options, callback)
  }



  public async existsSync(fileName: string): Promise<boolean> {
    const subDirectory = this.path.getSubDirectoryName(fileName);
    return fs.existsSync(subDirectory) 
  }
}
