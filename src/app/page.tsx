"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TickerBar from "@/components/TickerBar";
import GrowingBusinessSection from "@/components/GrowingBusinessSection";
import LocationAdvantageSection from "@/components/LocationAdvantageSection";
import ExpandingSection from "@/components/ExpandingSection";
import EnvironmentSection from "@/components/EnvironmentSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import StartWhereYouAreSection from "@/components/StartWhereYouAreSection";
import TechBusinessVideoSection from "@/components/TechBusinessVideoSection";
import ExperienceAmenitiesSection from "@/components/ExperienceAmenitiesSection";
import SoldOutAndAvailabilitySection from "@/components/SoldOutAndAvailabilitySection";
import LocationLeverageSection from "@/components/LocationLeverageSection";
import OwnWith35Section from "@/components/OwnWith35Section";
import PlanNextMoveSection from "@/components/PlanNextMoveSection";
import BusinessFutureCtaSection from "@/components/BusinessFutureCtaSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LeadCaptureSection from "@/components/LeadCaptureSection";
import Footer from "@/components/Footer";
import SpaceModal from "@/components/SpaceModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSpaceCategory, setSelectedSpaceCategory] = useState("Retail Space");

  const handleOpenModal = (category = "Retail Space") => {
    setSelectedSpaceCategory(category);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 1. Floating Header Navbar */}
      <Navbar onOpenModal={() => handleOpenModal("Apply for A Space")} />

      {/* 2. Hero Section (Screenshot 1) */}
      <Hero
        onExploreSpaces={() => handleOpenModal("Explore Available Spaces")}
        onDiscoverOwnership={() => handleOpenModal("Discover Ownership")}
      />

      {/* Ribbon Ticker Bar (Screenshot 1 bottom) */}
      <TickerBar />

      {/* 3. Growing Business Section (Screenshot 2) */}
      <GrowingBusinessSection />

      {/* 4. Location Advantage Section (Screenshot 3) */}
      <LocationAdvantageSection
        onExploreSpaces={() => handleOpenModal("Explore Available Spaces")}
      />

      {/* 5. Expanding / Stages of Growth Section (Screenshot 4) */}
      <ExpandingSection />

      {/* 6. Corporate Environment & Banking Section (Screenshot 5) */}
      <EnvironmentSection
        onExploreOpportunities={() => handleOpenModal("Commercial Opportunities")}
      />

      {/* 7. Target Audiences 2x2 Grid Section (Screenshot 6) */}
      <TargetAudienceSection
        onSelectAudience={(category) => handleOpenModal(category)}
      />

      {/* 8. Start Where You Are Section (Screenshot 7) */}
      <StartWhereYouAreSection />

      {/* 9. Building A Tech Business / Video Placeholder Section (Screenshot 8) */}
      <TechBusinessVideoSection />

      {/* 10. Experience Amenities 6 Cards Grid (Screenshot 9) */}
      <ExperienceAmenitiesSection
        onSeeExperience={() => handleOpenModal("Awo Tech Experience")}
      />

      {/* 11. Sold Out Ground Floor & Availability Card Section (Screenshot 10) */}
      <SoldOutAndAvailabilitySection
        onCheckAvailability={() => handleOpenModal("Current Availability Request")}
      />

      {/* 12. Location Isn't Just An Address. It's Leverage Section (Screenshot 11) */}
      <LocationLeverageSection />

      {/* 13. You Can Own With 35%* Section (Screenshot 12) */}
      <OwnWith35Section
        onGetOwnershipDetails={() => handleOpenModal("35% Ownership Details")}
      />

      {/* 14. Plan The Next Move Before You Need To Make It Section (Screenshot 13) */}
      <PlanNextMoveSection
        onExploreOpportunities={() => handleOpenModal("Commercial Opportunities")}
      />

      {/* 15. Your Business Has A Future CTA Section (Screenshot 14) */}
      <BusinessFutureCtaSection
        onExploreMall={() => handleOpenModal("Explore Awo Tech Mall")}
      />

      {/* 16. What Businesses Are Saying Testimonials Section (Screenshot 15) */}
      <TestimonialsSection />

      {/* 17. Final Lead Capture Form: Let's Find Out If Awo Tech Is Right For You (Screenshot 16) */}
      <LeadCaptureSection />

      {/* 18. Comprehensive Brand Footer */}
      <Footer onOpenModal={() => handleOpenModal("Footer Space Application")} />

      {/* Interactive Space Inquiry Modal */}
      <SpaceModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        defaultCategory={selectedSpaceCategory}
      />
    </main>
  );
}
