import Image from "next/image";
import Link from "next/link";

function Topbar() {
  return  (
    <div className="flex flex-col w-full items-center">
    <nav className="topbar">
      <div>
      <Image src="/assets/RAILS.png" 
      alt="rails" 
      width={150} 
      height={150}/> 
      </div>

      <button className="contact_btn">
        <p className="text-btn-text">Contact Us</p>
      </button>
    </nav>
    </div>

  )
}

export default Topbar;
