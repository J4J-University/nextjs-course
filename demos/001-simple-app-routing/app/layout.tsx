import Link from 'next/link';
import React from 'react';

export const metadata = {
	title: 'Simple app routing',
	description: 'Simple app routing',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<body>
				<nav>
					<ul>
						<li>
							<Link href='/'>
								<p>Home</p>
							</Link>
						</li>
						<li>
							<Link href='/blog'>
								<p>Blog</p>
							</Link>
						</li>
					</ul>
				</nav>
				{children}
			</body>
		</html>
	);
}
