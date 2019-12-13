import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

export default function Header() {
  return (
    <nav>
      <Link href='/'>
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href='/about'>
        <a style={linkStyle}>About</a>
      </Link>
      <Link href='/shop'>
        <a style={linkStyle}>Shop</a>
      </Link>
      <Link href='/recipes'>
        <a style={linkStyle}>Recipes</a>
      </Link>
      <Link href="/learn">
        <a style={linkStyle}>Learn</a>
      </Link>
      <Link href="/blog">
        <a style={linkStyle}>Blog</a>
      </Link>
    </nav>
  )
}