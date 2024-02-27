import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  return (
    <nav className="border-2 border-red-500 flexBetween max-container padding-container relative z-30 py-5">
        <Link href='/'>
            Logo
            {/* <Image src="" alt="logo" width={74} height={29} /> */}
            <ul className="hidden h-full gap-12 lg:flex">Home</ul>
            <ul className="hidden h-full gap-12 lg:flex">How we work</ul>
            <ul className="hidden h-full gap-12 lg:flex">Use our AI matching tools</ul>
            <ul className="hidden h-full gap-12 lg:flex">Login/SignUp</ul>
        </Link>
        </nav>
 
 
    )
}

export default Navbar