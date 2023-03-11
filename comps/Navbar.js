import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <div>UsersApp</div>
      </div>
      <div className="links">
        <Link href="/">List</Link>
        <Link href="/about">About</Link>
        <Link href="/Add/">Add Users</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;