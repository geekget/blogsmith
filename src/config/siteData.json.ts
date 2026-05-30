export interface SiteDataProps {
	name: string;
	title: string;
	description: string;
	useViewTransitions?: boolean; // defaults to false. Set to true to enable some Astro 3.0 view transitions
	author: {
		name: string;
		email: string;
		twitter: string; // used for twitter cards when sharing a blog post on twitter
	};
	defaultImage: {
		src: string;
		alt: string;
	};
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "BlogTech",
	// Your website's title and description (meta fields)
	title: "Smart Home Gear Reviews & Buying Guides (2026) | TechNest",
	description:
		"Looking for the best smart home automation devices? Read our unbiased, hands-on reviews and comparison guides to upgrade your home and save money.",
	useViewTransitions: true,
	// Your information!
	author: {
		name: "Cosmic Themes",
		email: "creator@cosmicthemes.com",
		twitter: "Cosmic_Themes",
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/cosmic-themes-logo.jpg",
		alt: "Blogsmith logo",
	},
};

export default siteData;
