import { Button } from '@/components/ui/button'

import Image from 'next/image'
import { DatePickerWithRange } from '@/components/custom/DatePicker'
import { CustomModal } from '@/components/custom/Modal'
import { ProfileForm } from '@/components/custom/Form/Form'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center gap-10 p-24">
			<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
				Shadcn Playground
			</h1>

			<div className="flex w-full max-w-5xl items-center justify-center gap-2 font-mono text-sm">
				<p className="inline-block border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
					Get started by editing&nbsp;
					<code className="font-mono font-bold">src/app/page.tsx</code>
				</p>
				<div className="bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
					<a
						className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
						href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
					>
						By{' '}
						<Image
							src="/vercel.svg"
							alt="Vercel Logo"
							className="dark:invert"
							width={100}
							height={24}
							priority
						/>
					</a>
				</div>
			</div>

			<section>
				<h2 className="mb-1">Button showcase</h2>
				<div className="mb-2 flex gap-1">
					<Button variant="default">Submit</Button>
					<Button variant="outline">Cancel</Button>
					<Button variant="destructive">Delete</Button>
					<Button variant="ghost">Ghost button</Button>
					<Button variant="link">Link button</Button>
				</div>
				<div className="flex flex-col items-start gap-1">
					<Button size="lg">LG size</Button>
					<Button size="default">Default size</Button>
					<Button size="sm">SM size</Button>
					<Button size="icon">Icon</Button>
				</div>
			</section>

			<section className="flex gap-6">
				<article>
					<h2 className="mb-1">Modal showcase</h2>
					<CustomModal />
				</article>
				<article>
					<h2>Popover showcase</h2>
					<DatePickerWithRange />
				</article>
			</section>

			<section>
				<h2>Form showcase</h2>
				<ProfileForm />
			</section>
		</main>
	)
}
