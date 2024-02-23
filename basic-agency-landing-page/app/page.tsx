import Footer from "@/components/footer";
import Header from "@/components/front-page/header";
import VideoBackground from "@/components/front-page/video-background";
import AwardSection from "@/components/section/award-section";

export default function Home() {

  return (
    <main>
      <div className="min-h-screen">
        <VideoBackground />
        <Header />
      </div>
      <AwardSection />
      <Footer />
    </main>
  );
}
