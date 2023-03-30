import { ClassValue , clsx } from "clsx";
// 查詢 import type 

import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]){
    return twMerge(clsx(inputs))
}