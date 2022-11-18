import "swiper/css/pagination";
import ContactUs from "../components/large/ContactUs";
import MenuContent from "../components/large/MenuContent";
import Navbar from "../components/large/navbar";
import PortofolioProject from "../components/large/PortofolioProject";
import ProfileContent from "../components/large/ProfileContent";
import WorkContent from "../components/large/WorkContent";
import MediaSocial from "../components/medium/mediasocial";
import Email from "../components/medium/mediasocial/email";

export default function Home() {
  return (
    <>
      <div className='App  bg-[#F5FCFF] h-screen w-full  font-opensans '>
        <MediaSocial />
        <Email />
        <div className='bg-gradient-to-r from-[#4eacf9] to-[#0A8AF3]'>
          {/* navbar */}
          <Navbar />
          {/* content Menu */}
          <MenuContent />
        </div>
        {/* profile */}
        <ProfileContent />
        {/* worked */}
        <WorkContent />
        {/* project  */}

        <PortofolioProject />
        {/* contact us*/}
        <ContactUs />
      </div>
    </>
  );
}
