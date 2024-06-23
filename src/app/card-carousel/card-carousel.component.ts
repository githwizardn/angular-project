import {Component, OnInit, ViewChild} from "@angular/core";
import {CarouselComponent, CarouselConfig} from "ngx-bootstrap/carousel";

@Component({
	selector: "card-carousel",
	templateUrl: "./card-carousel.component.html",
	providers: [
		{
			provide: CarouselConfig,
			useValue: {showIndicators: false, showControls: false},
		},
	],
	styleUrls: ["./card-carousel.component.css"],
})
export class CardCarouselComponent implements OnInit {
	cards: {img: string; title: string; description: string; price: string}[] = [
		{
			img: "https://achuqe.ge/wp-content/uploads/2020/11/poster-53.jpg",
			title: " ტორტი ",
			description: "ტკბილი სიამოვნება.",
			price: "13₾",
		},

		{
			img: "https://images.deliveryhero.io/image/stores-glovo/stores/bdf4703ce53dc346af74421f47b458c51047378ca751bbddc5624f1b7e24bc19?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwiYmciOiJ0cmFuc3BhcmVudCIsIndpZHRoIjo1ODgsImhlaWdodCI6MzIwfX1d",
			title: " ბურგერი ",
			description: "კმაყოფილება ყოველ ლუკმაში.",
			price: "20₾",
		},
		{
			img: "https://i.ytimg.com/vi/PgCVMixbYVg/sddefault.jpg",
			title: "ყველის პიცა",
			description: "ორმაგი ყველი, ორმაგი არომატი.",
			price: "15₾",
		},
		{
			img: "https://i.ytimg.com/vi/BgHr3VK8F9Y/hqdefault.jpg",
			title: "სალათი ცეზარი",
			description: "სიახლე და არომატი თითოეულ ფოთოლში.",
			price: "18₾",
		},
		{
			img: "https://gemrielia.ge/media/_thumb/uploads/2023/03-14/limonati-1678777167.webp",
			title: "ლიმონათი",
			description: "ციტრუსის არომატი ყველა ყლუპში.",
			price: "22₾",
		},
	];

	// Get a reference to the carousel component
	@ViewChild("carousel", {static: true}) carousel!: CarouselComponent;

	ngOnInit() {
		// Initialize the carousel with 4 visible cards
		this.carouselItems = this.cards.slice(0, 4);

		// Start autoplay
		this.startAutoplay();
	}

	carouselItems: any[] = [];
	interval: any;

	startAutoplay() {
		// Set autoplay interval to 3 seconds (3000 ms)
		this.interval = setInterval(() => {
			this.slideNext();
		}, 3000);
	}

	stopAutoplay() {
		// Clear the autoplay interval
		clearInterval(this.interval);
	}

	slideNext() {
		// Shift the cards array by one position to the left
		const shiftedCard = this.cards.shift();
		if (shiftedCard) {
			this.cards.push(shiftedCard);
		}

		// Update the carouselItems with the next 4 cards
		this.carouselItems = this.cards.slice(0, 4);
	}

	slidePrev() {
		// Pop the last card from the cards array and unshift it to the beginning
		const poppedCard = this.cards.pop();
		if (poppedCard) {
			this.cards.unshift(poppedCard);
		}

		// Update the carouselItems with the previous 4 cards
		this.carouselItems = this.cards.slice(0, 4);
	}
}
