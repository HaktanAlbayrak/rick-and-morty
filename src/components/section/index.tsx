import { Container } from '@mui/material';
import React from 'react';

type SectionProps = {
  children: React.ReactNode;
};

export default function Section({ children }: SectionProps) {
  return (
    <Container maxWidth='xl' sx={{ marginTop: { xs: '1rem', lg: "'8rem'" } }}>
      {children}
    </Container>
  );
}
