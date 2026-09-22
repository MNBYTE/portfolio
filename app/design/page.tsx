"use client";
import { useState } from "react";
import DesignHero from "../../components/design/DesignHero";
import DesignProcess from "../../components/design/DesignProcess";
import CaseStudyGrid from "../../components/design/CaseStudyGrid";
import ToolsSection from "../../components/design/ToolsSection";
import DesignCTA from "../../components/design/DesignCTA";
import CaseStudyModal from "../../components/design/CaseStudyModal";
import { DesignProject } from "../../data/design-projects";

export default function DesignPage() {
  const [activeProject, setActiveProject] = useState<DesignProject | null>(null);

  return (
    <main>
      <DesignHero />
      <DesignProcess />
      <CaseStudyGrid onOpen={setActiveProject} />
      {activeProject && (
        <CaseStudyModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </main>
  );
}