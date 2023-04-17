"use client"
import { AiOutlineSearch } from "react-icons/ai"
import { BsFillMicFill } from "react-icons/bs"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function HomeSearch() {
	const router = useRouter()
	const [input, setInput] = useState("")
	const [randomSearchLoading, setRandomSearchLoading] = useState(false)
	function handleSubmit(e) {
		e.preventDefault()
		if (!input.trim()) return
		router.push(`/search/web?searchTerm=${input}`)
	}
	async function randomSearch() {
		setRandomSearchLoading(true)
		const response = await fetch("https://random-word-api.herokuapp.com/word")
			.then((res) => res.json())
			.then((data) => data[0])
		if (!response) return
		router.push(`/search/web?searchTerm=${response}`)
		setRandomSearchLoading(false)
	}
	return (
		<>
			<form
				onSubmit={handleSubmit}
				className='flex w-full mt-5 mx-auto max-w-9/10 border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl'
			>
				<AiOutlineSearch className='text-xl mr-3 text-gray-500' />
				<input
					type='text'
					className='flex-grow focus:outline-none'
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<BsFillMicFill className='text-lg' />
			</form>
			<div className='flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8'>
				<button className='btn' onClick={handleSubmit}>
					Google Search
				</button>
				<button
					onClick={randomSearch}
					disabled={randomSearchLoading}
					className='btn flex items-center justify-center disabled:opacity-80'
				>
					{randomSearchLoading ? (
						<Image
							width={24}
							height={24}
							className=' text-center'
							src='spinner.svg'
							alt='Loading...'
						/>
					) : (
						"I am Feeling Lucky"
					)}
				</button>
			</div>
		</>
	)
}
