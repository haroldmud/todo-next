import Link from "next/link";

function Header() {
  return(
    <header className="border border-black">
    <Link className="ml-12" href="/">
      HOME
    </Link>
    <Link className="ml-12" href="/edit">
      ADD
    </Link>
  </header>
  )
}

export default Header;