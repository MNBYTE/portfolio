import React from "react";
import { Project } from "../../data/project";

const Modal: React.FC<{ onClose: () => void; children: React.ReactNode }> = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="bg-white p-6 rounded shadow z-10">{children}</div>
    </div>
  );
};

interface Props {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  return (
    <Modal onClose={onClose}>
      <h2 className="text-3xl font-bold">{project.title}</h2>
      <p>{project.description}</p>
    </Modal>
  );
}
