import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
	transform(value: string): string {
		const parts = value.split(' ');
		const newParts: string[] = [];
		parts.forEach((part) => newParts.push(this.capitalizeFirstLetter(part)));
		return newParts.join(' ');
	}

	private capitalizeFirstLetter(word: string) {
		if (word.length < 1) {
			return '';
		}

		return word[0].toUpperCase().concat(word.substring(1));
	}
}
