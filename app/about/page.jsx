import Image from "next/image";
import { Poppins } from 'next/font/google';
import { Herr_Von_Muellerhoff } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});
const herrVonMuellerhoff = Herr_Von_Muellerhoff({
  subsets: ['latin'],
  weight: '400',
});

const Aboutpage = () => {

  return (
    <div className="mx-32" >
      {/* About Title */}
      <div className="flex flex-col items-center justify-center gap-3 m-14 " >
        <h2 className={`text-3xl uppercase font-semibold text-darkBrown ${poppins.className} `} >About Us</h2>
        <div className="h-1 w-10 bg-darkBrown " />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-[150px] " >
        {/* Image Container */}
        <div className="flex items-center justify-center" >
          <Image src="/about.jpg" alt="About" width={500} height={500} />
        </div>
        {/* Text Container */}
        <div className="flex flex-col items-center justify-center px-32 " >
          <h4 className={`uppercase text-6xl my-[25px] text-brown ${herrVonMuellerhoff.className} `} >life story</h4>
          <div className="my-[25px]" >
            <FontAwesomeIcon icon={faAsterisk} />
          </div>
          <p className="font-times text-[15px] text-center " >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore explicabo, nobis, tempora itaque aliquid, voluptatem sint distinctio labore maxime deleniti iste consectetur. Omnis, cum. Accusamus animi id atque qui unde?
          </p>
        </div>
      </div>
    </div>
  )
}

export default Aboutpage;