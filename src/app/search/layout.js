import SearchHeader from "@/components/SearchHeader"
import "../globals.css"

export const metadata = {
	title: "Google Clone",
	description: "Google Clone built with Next.js 13",
}

export default function SearchLayout({ children }) {
	return (
		<div>
			<SearchHeader />
			{children}
		</div>
	)
}
