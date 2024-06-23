import {Component} from "@angular/core";

interface MenuItem {
	tabs: string[];
	imageUrl: string;
	name: string;
	description: string;
	price: string;
	id: number;
}

@Component({
	selector: "menu",
	templateUrl: "./menu.component.html",
	styleUrls: ["../app.component.css", "./menu.component.css"],
})
export class MenuComponent {
	activeTab: string = "ყველა";

	tabs: string[] = [
		"ყველა",
		"ბურგერი",
		"პიცა",
		"ხორცეული",
		"სალათი",
		"ზღვის პროდუქტები",
		"დესერტი",
		"სასმელი",
	];

	menuItems: MenuItem[] = [
		{
			tabs: ["ყველა", "პიცა"],
			imageUrl: "https://imageproxy.wolt.com/menu/menu-images/5f5b7ec3526c89d2b37134e6/7427be62-f435-11ea-ae8d-5244a7e4ff86_4______.jpeg",
			name: "ორმაგი ყველის პიცა",
			description: "ორმაგი ყველი , ორმაგი არომატი.",
			price: "15.30₾",
			id: 1,
		},
		{
			tabs: ["ყველა", "ზღვის პროდუქტები"],
			imageUrl: "https://biznes-gegma.medgeo.net/wp-content/uploads/2021/03/5d6d12da80b19e07cff735e5c90f33f0_04_kak_varit_zamorozhennye_krevetki_depositphotos_22575483_m.jpg",
			name: "კრევეტები",
			description: "ახალი და გემრიელი ზღვის პროდუქტები.",
			price: "23.99₾",
			id: 2,
		},
		{
			tabs: ["ყველა", "ბურგერი", "ხორცეული"],
			imageUrl: "https://imageproxy.wolt.com/menu/menu-images/63327ccdaf6b62533484dfbf/b9ebe236-f007-11ed-bdb4-42bd159e3e10_wolt_2050.png",
			name: "ორმაგი მაკ ბურგერი",
			description: "ორმაგი სიამოვნება ყველა ლუკმაში",
			price: "13.80₾",
			id: 3,
		},
		{
			tabs: ["ყველა", "სალათი"],
			imageUrl: "https://lh4.googleusercontent.com/proxy/Bz65BALbxRhre40PWzRvWCZODTfN_xkTVYik6mb6eQyKFe8juCz-vAzs9sNCjaupyQ8fCqQFSnuDD9WaZrNd2-wSFmUqCUX9RuKo6YFwS38I_1N_yZ3HXBb0Y73WmA",
			name: "სალათი ცეზარი",
			description: "გემოს ზეიმი.",
			price: "18₾",
			id: 4,
		},

		
		{
			tabs: ["ყველა", "დესერტი"],
			imageUrl: "https://kompoti.ge/wp-content/uploads/2022/12/D93379BD-5F9F-413E-8B0B-5286A2709EFC_1_201_a.jpeg",
			name: "ხილის ტორტი",
			description: "ექსკლუზიური ხელოვნების ბურგერი.",
			price: "23.99₾",
			id: 5,
		},
		{
			tabs: ["ყველა", "პიცა", ],
			imageUrl: "https://firstnews.ge/media/k2/items/cache/dee4183b3eece6f1f1fda5b7115d2824_XL.jpg",
			name: "დიდი იტალიური პიცა",
			description: "იტალიური არომატი ყველა ნაჭერში.",
			price: "23.99₾",
			id: 6,
		},
		{
			tabs: ["ყველა", "სასმელი"],
			imageUrl: "https://kulinaria.ge/media/recipe-images/2017/06/limonaTi.jpg",
			name: "ლიმონათი",
			description: "ციტრუსის არომატი ყველა ყლუპში.",
			price: "23.99₾",
			id: 7,
		},
		{
			tabs: ["ყველა", "ბურგერი", "ხორცეული"],
			imageUrl: "https://hotsale.ge/files/offers/burger9/axali/3.jpg",
			name: "ქათმის ბურგერი",
			description: "სრულყოფილება პურებს შორის .",
			price: "23.99€",
			id: 8,
		},
	];

	getFilteredItems(): MenuItem[] {
		return this.menuItems.filter((item) => item.tabs.includes(this.activeTab));
	}

	itemInCurrentTab(item: MenuItem): boolean {
		return item.tabs.includes(this.activeTab);
	}

	setActiveTab(tab: string) {
		this.activeTab = tab;
	}
}
