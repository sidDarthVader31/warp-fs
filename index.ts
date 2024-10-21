import fs, { PathLike } from 'fs';
import { Path } from './helpers/path';
import { IWrapFs } from './interfaces/WrapFs';
import { Abortable } from 'events';




class WrapFs implements IWrapFs{
  private readonly sharePath: string;
  private readonly path: Path;
  constructor(sharePath: string){
    this.sharePath = sharePath;
    this.path = new Path(this.sharePath);
  }
  public readFile(path: fs.PathOrFileDescriptor, options: ({ encoding?: null | undefined; flag?: string | undefined; } & Abortable) | undefined | null, callback: (err: NodeJS.ErrnoException | null, data: Buffer) => void): void {
    const name = this.path.getSubDirectoryName(path as PathLike);
    return fs.readFile(name, options, callback)
  }
}
export default WrapFs;
