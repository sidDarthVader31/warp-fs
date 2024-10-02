import fs, { PathLike } from 'fs';
import { Path } from './helpers/path';

interface IWrapFs {
  fileExists(fileName: string): Promise<boolean>;
  readDir( path: PathLike, options:| {
                encoding: BufferEncoding | null;
                withFileTypes?: false | undefined;
                recursive?: boolean | undefined;
            }
            | BufferEncoding
            | undefined
            | null,
 ): Promise<Buffer>;
}
 export class WrapFs implements IWrapFs {
  private  readonly sharePath: string
  private readonly path : Path
  constructor(sharePath: string){
    this.sharePath = sharePath;
    this.path = new Path(this.sharePath);
  }
  public readDir(path: PathLike, options: { encoding: BufferEncoding | null; withFileTypes?: false | undefined; recursive?: boolean | undefined; } | BufferEncoding | undefined | null): Promise<Buffer> {
  }
  public async fileExists(fileName: string): Promise<boolean> {
    const subDirectory = this.path.getSubDirectoryName(fileName);
    return false;
  }
}
