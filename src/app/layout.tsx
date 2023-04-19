import './globals.css'

export const metadata = {
	title: 'Joke of the day',
	description: 'Finds random jokes form reddit',
}

export default function RootLayout({
	children,
}: {
  children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}