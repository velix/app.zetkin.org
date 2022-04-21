import { useRouter } from 'next/router';
import { Avatar, Box, BoxProps, Tooltip, Typography } from '@material-ui/core';

const ZetkinPerson: React.FunctionComponent<{
  containerProps?: BoxProps;
  id: number;
  link?: boolean;
  name: string;
  showText?: boolean;
  small?: boolean;
  subtitle?: string | React.ReactNode;
}> = ({ containerProps, id, link, name, showText = true, small, subtitle }) => {
  const router = useRouter();
  const { orgId } = router.query;
  const linkProps = {
    component: 'a',
    href: `/organize/${orgId}/people/${id}`,
  };

  return (
    <Box display="flex" {...containerProps}>
      <Tooltip title={name}>
        <Avatar
          {...(link ? linkProps : {})}
          src={orgId ? `/api/orgs/${orgId}/people/${id}/avatar` : ''}
          style={small ? { height: 32, width: 32 } : {}}
        />
      </Tooltip>

      {showText && (
        <Box
          alignItems="start"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          ml={1}
        >
          <Typography variant="body1">{name}</Typography>
          {typeof subtitle === 'string' ? (
            <Typography variant="body2">{subtitle}</Typography>
          ) : (
            subtitle
          )}
        </Box>
      )}
    </Box>
  );
};

export default ZetkinPerson;
