import Image from "next/image";
import Link from "next/link";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/vQL5C9FmYud
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function BusinessToBusinessHero() {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32">
			<div className="container grid gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
				<div className="flex flex-col items-start justify-center space-y-4">
					<div className="inline-block px-3 py-1 text-sm rounded-lg bg-muted">
						<Image alt="Rebel Ebergy" src="/images/rebel.jpg" width={688} height={321} className="object-cover w-44" />
					</div>
					<h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
						Exclusive Rebel Energy Distribution Partner for Southern Africa
					</h1>
          <Link href="/contact">
            <button className="px-6 py-3 text-white bg-red-600 rounded-full" type="button">Contact Us</button>
          </Link>
				</div>
				<div className="grid grid-cols-2 gap-4">
					<Image
						src="/images/ultr.webp"
						width={300}
						height={300}
						alt="Ultra Lithium Battery"
						className="object-cover h-full rounded-lg aspect-square"
					/>
					<Image
						src="/images/rebel.webp"
						width={300}
						height={300}
						alt="Solar Inverter"
						className="object-cover h-full rounded-lg aspect-square"
					/>
				</div>
			</div>
		</section>
	);
}
