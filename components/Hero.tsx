
//import required modules/components
import Image from "next/image"
import Button from "./Button"

//define hero functional component
const Hero = () => {
  return (
    //main section container with styling classes
   <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-27 lg:py-20 xl:flex-row  ">
<div className="hero-map" />
{/* LEFT */}
<div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
<Image 
src="/camp.svg" 
alt="camp"
width={50}
height={50}
className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
/>
{/* Heading */}
<h1 className="bold-52 lg:bold-88">Immigrant Tool Box</h1>
{/* Description */}
<p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">Embark on your journey towards a new life with Immigrant Toolbox. We're here to accompany you on every step of your path, embracing the diverse beauty of cultures worldwide, all within one comprehensive app.</p>
<div className="my-11 flex flex-wrap gap-5">
<div className="flex items-center gap-2">
    {/* Stars for the 5 star rating */}
    {/* this is a js expression inside curly braces. it creates array with 5 elements, fills each elements with a value 1 and then maps over each element of the array.
    The _ is a convention for a variable not being used . index variable represent the index of the current element being mapped over */}
    {Array(5).fill(1).map((_, index)=> (
        <Image 
        src="/star.svg"
        key={index}
        width={24}
        height={24}
        alt="star"
        />
    ))}
</div>
{/* Number of reviews */}
<p className="bold-16 lg:bold-20 text-blue-70">100k
<span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
</p>
</div>
<div className="flex flex-col w-full gap-3 sm:flex-row">
  {/* Download app button */}
    <Button 
    type="button" 
    title="Download App" 
    variant="btn_green" />
{/* how we work button */}
<Button 
    type="button" 
    title="How we work?" 
    icon="/play.svg"
    variant="btn_white_text" />
</div>
</div>
{/* Right section */}
<div className="relative flex flex-1 items-start ">
  {/* side panel */}
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
{/* location */}
           <div className="flex flex-col">
            <div className="flexBetween">
              {/* location label */}
              <p className="regular-16 text-gray-20">Location</p>
              {/* close button */}
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
{/* location value */}
           <div className="flex flex-row items-center">
            <p className="bold-20 text-white mr-2">Calgary
            </p>
            <Image src="/location.svg" alt="close" width={28} height={28} />
            </div>
          </div>
{/* job openings field */}
          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Job Openings</p>
              <p className="bold-20 text-white">2365</p>
            </div>
          
          </div>
        </div>
      </div>
   </section>
  )
}

export default Hero