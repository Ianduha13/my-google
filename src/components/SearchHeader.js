import Link from "next/link"
import Image from "next/image"
import SearchBox from "./SearchBox"
import SearchHeaderOptions from "./SearchHeaderOptions"
import { RiSettings3Line } from "react-icons/ri"
import { TbGridDots } from "react-icons/tb"

export default function SearchHeader() {
	return (
		<header className='sticky top-0 bg-white'>
			<div className=' flex w-full p-6 items-center justify-between'>
				<Link href={"/"}>
					<Image
						width='120'
						height='40'
						alt='google header'
						src='https://www.google.com.br/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png'
					/>
				</Link>
				<div className='flex-1'>
					<SearchBox />
				</div>
				<div className='hidden sm:inline-flex space-x-2'>
					<RiSettings3Line className='header-icon' />
					<TbGridDots className='header-icon' />
				</div>
				<button className='bg-blue-500 text-white px-6 ml-2 py-2 font-md rounded-md hover:brightness-105 hover:shadow-md transition-all'>
					Sign In
				</button>
			</div>
			<SearchHeaderOptions />
		</header>
	)
}
