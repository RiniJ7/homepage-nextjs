import Image from "next/image"
import { PEOPLE_URL } from "@/constants"
interface CardProps {
  backgroundImage : string,
  title: string,
  subTitle: string,
  peopleJoined: string,
}

const Cards = ( { backgroundImage, title, subTitle, peopleJoined }: CardProps) => {

  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
<div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
  <div className="flexCenter gap-4">
    <div className="rounded-full bg-green-50 p-4">
<Image
src="/flower.png"
alt="map"
width={28}
height={28}
/>
    </div>
    <div>
    <h4 className="flex flex-col gap-1">{title}</h4>
    <p className="regular-14 text-white">{subTitle}</p>
    </div>
  </div >
<div className="flexCenter gap-6">
<span className="flex -space-x-4 overflow-hidden">
{ PEOPLE_URL.map((url) => (
  <Image
  className="inline-block h-10 w-10 rounded-full" 
  src={url}
  key={url}
  alt="person"
  width={52}
  height={52}
  />
))}
</span>
<p className="bold-16 md:bold-20 text-white"> {peopleJoined} </p>
</div>
</div>
  
    </div>
  )
}

//this section is about cards and overlay texts rendered over images and animations

const Card = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-2 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start
      justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
    
<Cards 
backgroundImage="bg-bg-img-1"
title="Job Search"
subTitle="Upload Resume"
peopleJoined="100+ Joined"
/>
<Cards 
backgroundImage="bg-bg-img-2"
title="Rentals"
subTitle="Find Rentals"
peopleJoined="75+ Joined"
/>
</div>
<div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
<div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
<h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
  <strong>
    Feeling lost in a new Place?
  </strong> And Not Knowing The Way?
</h2>
<p className="regular-14 xl:regular-16 mt-5 text-white">
To ease the anxiety of newcomers exploring unfamiliar terrain in a new country, Immigrant Toolbox offers vital support for those venturing into new adventures.
</p>
<Image
src="/quote.svg"
alt="cards"
width={186}
height={186}
className="card-quote"
/>
</div>
</div>
    </section>
  )
}

export default Card