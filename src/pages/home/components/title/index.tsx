import { Typography } from '@mui/material';

type VariantType = 'mobile' | 'desktop';

interface IHomeTitleProps {
  breakpoint: VariantType;
}

export const HomeTitle: React.FC<IHomeTitleProps> = ({ breakpoint }) => {
  return (
    <>
      <Typography
        variant={breakpoint === 'mobile' ? 'h4' : 'h3'}
        className='text-active'
      >
        Rick and Morty
      </Typography>
      <Typography
        variant={breakpoint === 'mobile' ? 'h5' : 'h4'}
        className='text-active'
      >
        Guide
      </Typography>
    </>
  );
};
