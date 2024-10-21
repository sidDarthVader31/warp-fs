import {PathLike, PathOrFileDescriptor, WriteFileOptions, NoParamCallback, StatOptions, Stats, MakeDirectoryOptions } from 'fs';
import { Abortable } from 'events';
export interface IWrapFs {
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
  readFile(
        path: PathOrFileDescriptor,
        options:
            | ({
                encoding?: null | undefined;
                flag?: string | undefined;
            } & Abortable)
            | undefined
            | null,
        callback: (err: NodeJS.ErrnoException | null, data: Buffer) => void,
    ): void;
  readFileSync(
        path: PathOrFileDescriptor,
        options?: {
            encoding?: null | undefined;
            flag?: string | undefined;
        } | null,
    ): Buffer;
  writeFile(
        file: PathOrFileDescriptor,
        data: string | NodeJS.ArrayBufferView,
        options: WriteFileOptions,
        callback: NoParamCallback,
    ): void;
 
  writeFileSync(
        file: PathOrFileDescriptor,
        data: string | NodeJS.ArrayBufferView,
        options?: WriteFileOptions,
    ): void;

  appendFile(
        path: PathOrFileDescriptor,
        data: string | Uint8Array,
        options: WriteFileOptions,
        callback: NoParamCallback,
    ): void;
  
  appendFileSync(
        path: PathOrFileDescriptor,
        data: string | Uint8Array,
        options?: WriteFileOptions,
    ): void;
  unlink(path: PathLike, callback: NoParamCallback): void;
  unlinkSync(path: PathLike):void;
  readdirSync(
        path: PathLike,
        options?:
            | {
                encoding: BufferEncoding | null;
                withFileTypes?: false | undefined;
                recursive?: boolean | undefined;
            }
            | BufferEncoding
            | null,
    ): string[];
  stat(path: PathLike, callback: (err: NodeJS.ErrnoException | null, stats: Stats) => void): void;
  fstatsync(
        fd: number,
        options?: StatOptions & {
            bigint?: false | undefined;
        },
    ): Stats;
  mkdir(
        path: PathLike,
        options: MakeDirectoryOptions & {
            recursive: true;
        },
        callback: (err: NodeJS.ErrnoException | null, path?: string) => void,
    ): void;
  mkdirSync(
        path: PathLike,
        options: MakeDirectoryOptions & {
            recursive: true;
        },
    ): string | undefined;
  rename(oldPath: PathLike, newPath: PathLike, callback: NoParamCallback): void;
  renameSync(oldPath: PathLike, newPath: PathLike): void;
  copyFile(src: PathLike, dest: PathLike, callback: NoParamCallback): void;
  copyFileSync(src: PathLike, dest: PathLike, mode?: number): void;
}
