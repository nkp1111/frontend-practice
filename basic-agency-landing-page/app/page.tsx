import Footer from "@/components/footer";
import Header from "@/components/front-page/header";
import VideoBackground from "@/components/front-page/video-background";
import FixedFooter from "@/components/general/FixedFooter";
import AboutUs from "@/components/section/about-section";
import AwardSection from "@/components/section/award-section";
import ClientSection from "@/components/section/client-section";
import NewsSection from "@/components/section/news-section";
import WorkSection from "@/components/section/work-section";

export default function Home() {

  return (
    <main>
      <div className="md:min-h-screen min-h-[70vh]">
        <VideoBackground />
        <Header />
      </div>
      <AwardSection />
      <WorkSection />
      <ClientSection />
      <AboutUs />
      <NewsSection />
      <Footer />
      <FixedFooter />
    </main>
  );
}
