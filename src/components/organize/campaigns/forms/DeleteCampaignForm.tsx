import { FormattedMessage as Msg } from 'react-intl';
import { Box, Button, Typography } from '@material-ui/core';

interface DeleteCampaignFormProps {
    onSubmit: () => void;
    onCancel: () => void;
}

const DeleteCampaignForm: React.FunctionComponent<DeleteCampaignFormProps> = ({ onCancel, onSubmit }) => {
    return (
        <>
            <Typography variant="body1">
                <Msg id="misc.formDialog.campaign.deleteCampaign.warning" />
            </Typography>
            <Box mt={ 4 }>
                <Button color="secondary" fullWidth onClick={ onCancel } variant="contained">
                    <Msg id="misc.formDialog.campaign.deleteCampaign.cancel" />
                </Button>
            </Box>
            <Box mt={ 2 }>
                <Button color="primary" fullWidth onClick={ onSubmit } variant="contained">
                    <Msg id="misc.formDialog.campaign.deleteCampaign.submitButton" />
                </Button>
            </Box>
        </>
    );
};

export default DeleteCampaignForm;