import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
}

export function Section({ children }: SectionProps) {
  return <div className="m-4">{children}</div>;
}
