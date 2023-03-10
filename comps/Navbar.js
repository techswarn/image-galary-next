import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <div>UsersApp</div>
      </div>
      <div className="links">
        <Link href="/"><a>List</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/Add/"><a>Add Users</a></Link>
        <Link href="/Images/"><a>All images</a></Link>
        <Link href="/office/"><a>office</a></Link>
      </div>
    </nav>
  );
}
 
export default Navbar;