import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { Book, LeafyGreenIcon, PackageCheck } from "lucide-react";
import Link from "next/link";

const perks =[
  {
    name: 'Stay in the Know',
    Icon: Book,
    description : 'Be the first to know the newest digital product on the block'
  },

  {
    name: 'Instant Delivery',
    Icon: PackageCheck,
    description : ' Get your procucts instantly after checkout without a single carbon footprint.'
  },

  {
    name: 'Eco Friendly',
    Icon: LeafyGreenIcon,
    description : 'Our products are kind to our planet and we donate 1% of sales to the cause'
  }

]


export default function Home() {

  return (
    <>
  <MaxWidthWrapper>
    <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
       <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your marketplace for high-quality{' '}
            <span className='text-orange-600'>
              digital products
            </span>
            .
            </h1>
            <p className="mt-6 text-lg max-w-prose text-muted-foreground"> Welcome to agbalumo. Every product on our
              platform have been carefully sourced and undergone our
              quality assurance process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Link href='/products' className={buttonVariants()}>
                Trending Products</Link>
              <Button variant='ghost'>
                Our Agbalumo Promise &rarr;
                </Button>
            </div>
          </div>

     {/* TODO : List Products*/}
     </MaxWidthWrapper>

<section className='border-t border-gray-200 bg-gray-50'>
        <MaxWidthWrapper clasName='py-20'>
          <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
            {perks.map((perk) => (
              <div
                key={perk.name}
                className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
                <div className='md:flex-shrink-0 flex justify-center'>
                  <div className='h-16 w-16 flex items-center justify-center rounded-full bg-orange-100 text-orange-900'>
                    {<perk.Icon className='w-1/3 h-1/3' />}
                  </div>
                </div>

           <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
            <h3 className="text-base font-medium text-gray-900">
              {perk.name}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                {perk.description}
              </p>
           </div>
        </div>
      ))}
    </div>
  </MaxWidthWrapper>
</section>
      
</>
)
}
