import { ClassValue , clsx } from "clsx";
// 查詢 import type 

import {twMerge} from "tailwind-merge"
// 會把tailwind 的class name 做合併
// 舉例來說: py-2(padding-y:2) px-2(padding-x:2) 會變成 p-2 (padding: 2)

export function cn(...inputs: ClassValue[]){
    return twMerge(clsx(inputs))
}