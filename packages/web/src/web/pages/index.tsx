import { WhatsappFloat } from "../components/whatsapp-float";
import { Hero } from "../components/sections/hero";
import { CountdownBand } from "../components/sections/countdown-band";
import { Discover } from "../components/sections/discover";
import { Format } from "../components/sections/format";
import { Gallery } from "../components/sections/gallery";
import { Testimonials } from "../components/sections/testimonials";
import { Speaker } from "../components/sections/speaker";
import { Ticket } from "../components/sections/ticket";
import { Location } from "../components/sections/location";
import { Faq } from "../components/sections/faq";

function Index() {
  return (
    <div className="bg-ink">
      <main>
        <Hero />
        <CountdownBand />
        <Discover />
        <Format />
        <Gallery />
        <Testimonials />
        <Speaker />
        <Ticket />
        <Location />
        <Faq />
      </main>
      <WhatsappFloat />
    </div>
  );
}

export default Index;
