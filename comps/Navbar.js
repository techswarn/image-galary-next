import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <div>Pixels</div>
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/Images/">All images</Link>
      <Link href="/office/">office</Link>
    </nav>
  );
}
 
export default Navbar;