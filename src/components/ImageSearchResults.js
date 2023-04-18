import Link from "next/link"

export default function ImageSearchResults({ results }) {
	return (
		<div className='sm:pb-24 pb-40 mt-4'>
			<div className='grid grid-cols-1 px-3 space-x-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
				{results.items.map((result) => (
					<div key={result.link} className='mb-8'>
						<div className='group'>
							<Link href={result.image.contextLink}>
								<img
									src={result.link}
									alt={results.title}
									className='h-60 group-hover:shadow-xl object-contain w-full transition-shadow'
								/>
							</Link>

							<Link href={result.image.contextLink}>
								<h2 className='group-hover:underline truncate text-xl'>
									{result.title}
								</h2>
							</Link>
							<Link href={result.image.contextLink}>
								<p className='group-hover:underline text-gray-600'>
									{result.displayLink}
								</p>
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
