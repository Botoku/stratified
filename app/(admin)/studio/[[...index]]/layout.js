import '../../../globals.css'
import '../../../styles/theme.css'
import 'remixicon/fonts/remixicon.css'



export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body>{children}</body>
    </html>
  )
}
