import Header from "@/components/front-page/header";
import VideoBackground from "@/components/front-page/video-background";
import Image from "next/image";

export default function Home() {

  return (
    <main className="min-h-screen">
      <VideoBackground />
      <Header />
    </main>
  );
}
