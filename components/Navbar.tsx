//import required modules/components
import Link from "next/link"
import Image from "next/image"
import { NAV_LINKS } from "@/constants" 
import Button from "./Button"


//Navbar functional component declaration
const Navbar = () => {
  return (

    <nav className="flexBetween max-container padding-container relative z-30 py-5">
        <Link href='/' >
            <Image src="/my-logo.svg" alt="logo" width={74} height={29} />
   </Link>
        <ul className="hidden h-full gap-12 lg:flex">
            {/* list of navigation links declared in constants folder */}
                {NAV_LINKS.map((link) => (
<Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"> 
{link.label} 
</Link>
                ))}
            </ul>
            <div className="lg:flexCenter hidden">
{/* using button component for login / check globals.css to check the color defined for "btn_dark_green" */}
            <Button 
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
            />
            </div>
            {/* Menu Icon for mobile view */}
            <Image
            src="menu.svg"
            alt="menu"
            width={32}
            height={32}
            className="inline-block cursor-pointer lg:hidden"
            />
        </nav>
 
 
    )
}

export default Navbar