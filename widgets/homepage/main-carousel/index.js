import fs from 'fs';
import puppeteer from 'puppeteer';

async function run() {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto('https://www.mealbox.com.tr/');

	const images = await page.$$eval(
		'#main-slider .owl-stage .owl-item ',
		(elements) =>
			elements.map((e) => ({
				url: e.querySelector('a')?.href,
				image: e
					.querySelector('.main_responsive_image')
					?.getAttribute('data-src'),
			}))
	);
	fs.writeFile('main-carouselss.json', JSON.stringify(images), (err) => {
		if (err) throw err;
	});
	await browser.close();
}

run();
