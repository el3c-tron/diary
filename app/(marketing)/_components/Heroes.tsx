import Image from 'next/image'

const Heroes = () => {
    return (
        <div className="flex flex-col items-center justify-center max-w-5xl">
            <div className="flex items-center">
                <div className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:h-[300px] md:w-[300px]">
                    <Image src='/documents.png' fill alt='Documents' className='object-contain dark:hidden' />
                    <Image src='/documents-dark.png' fill alt='Documents' className='object-contain hidden dark:block' />

                </div>
                <div className='relative h-[300px] w-[300px] hidden md:block'>
                    <Image src='/reading.png' fill alt='Reading' className='object-contain dark:hidden'/>
                    <Image src='/reading-dark.png' fill alt='Reading' className='object-contain hidden dark:block'/>


                </div>
            </div>
        </div>
    );
}
 
export default Heroes;