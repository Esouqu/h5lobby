import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const tailwindColors500 = [
	'text-red-500',
	'text-blue-500',
	'text-green-500',
	'text-yellow-500',
	'text-purple-500',
	'text-orange-500',
	'text-pink-500',
	'text-teal-500',
	'text-indigo-500',
	'text-gray-500',
	'text-lime-500',
	'text-amber-500',
	'text-emerald-500',
	'text-cyan-500',
	'text-violet-500',
	'text-fuchsia-500',
	'text-rose-500'
];

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getRandomTwColor() {
	return tailwindColors500[Math.floor(Math.random() * tailwindColors500.length)];
}