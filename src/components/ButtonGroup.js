import { Box } from 'grommet';

export const ButtonGroup = ({ children, ...rest }) => {
  return (
    <Box direction="row" gap="small" {...rest}>
      {children}
    </Box>
  );
};
