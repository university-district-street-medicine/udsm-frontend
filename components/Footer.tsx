import Image from "next/image"
export default function Footer() {
  return (
    <div className="bg-purple pt-29 pb-18">

      {/* Information container */}
      <div className={`flex justify-center items-start gap-72`}>

        {/* Logo, general email, maybe address, then facebook, insta and linktree links */}
        <div className="flex flex-col gap-20">
          <div>
            <Image src="/udsm_logo.jpg" alt="UDSM Logo" width={40} height={40} className="pb-3" />
            <div className="flex flex-col max-w-70 leading-[1.8]">
              <span className="text-footer-white">hello@templatesjungle.com</span>
              <span className="text-footer-gray">15Th Street Avenue, New York, USA 011-554-8798-6556</span>
            </div>
          </div>
          <div className="flex items-center py-1">
            <Image src="/FacebookLogo.png" alt="Facebook Logo" width={25} height={25}></Image>
            <Image src="/InstagramLogo.png" alt="Instagram Logo" width={25} height={25}></Image>
          </div>
          <span className="text-footer-gray">
            ©2026 UDSM All Rights Reserved.
          </span>
        </div>

        {/* Info on the right, each div is a column */}
        <div>
          {/* Home (goes to home page), News (blog), Visit Us (maybe google maps incorporation), About Us (about us page), contact us (email pop-up) */}
          <div className="flex flex-col text-footer-white leading-[1.8]">
            <span>Home</span>
            <span>News</span>
            <span>Visit us</span>
            <span>About us</span>
            <span>Contact us</span>
          </div>
        </div>

      </div>
    </div>
  )
}