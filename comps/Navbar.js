import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <div>Pixels</div>
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/Images/"><a>All images</a></Link>
      <Link href="/office/"><a>office</a></Link>
    </nav>
  );
}
 
export default Navbar;