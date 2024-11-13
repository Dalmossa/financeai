import { clsx, type ClassValue } from "clsx"; //Calcutating...
import { twMerge } from "tailwind-merge"; //20.6k (gzippend: 6.7k)

export function cn(...input: ClassValue[]) {
    return twMerge(clsx(input))
}