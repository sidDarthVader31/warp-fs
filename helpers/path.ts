import { createHash } from 'crypto'
import { PathLike } from 'fs';
import  * as path from "node:path";

interface IPath {
  getPath(fileName: string): string;
  getSubDirectoryName(fileName: string): string;
}
export class Path implements IPath {
  private readonly basePath: string;

  constructor(basePath: string){
    this.basePath = basePath
  }

  public getPath(fileName: string): string {
    return path.join(this.basePath, this.getHashedPath(fileName.toString()));
  }
  public getSubDirectoryName(fileName: PathLike): string {
      return this.getHashedPath(fileName.toString())
  }

  private getHashedPath(fileName: string): string {
    const hash = createHash('md5').update(fileName).digest('hex');
    return hash.slice(0, 3);
  }
  private getHashedPath(fileName: string){
    const hash = createhash('md5').update(fileName).digest('hex');
  }
}
