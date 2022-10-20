// This file is to make fuse work as a UMD global
import * as Fuse from 'fuse.js';
export as namespace Fuse;
export = Fuse;