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
			<body>{children}</body>
		</html>
	);
}
