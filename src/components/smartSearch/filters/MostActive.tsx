import { FormattedMessage as Msg } from 'react-intl';
import { Box, Button, Divider, MenuItem, Typography } from '@material-ui/core';
import { FormEvent, useState } from 'react';

import { isFilterWithId } from '../utils';
import StyledNumberInput from '../inputs/StyledNumberInput';
import StyledSelect from '../inputs/StyledSelect';
import TimeFrame from './TimeFrame';
import { ZetkinSmartSearchFilter } from 'types/zetkin';
import { ZetkinSmartSearchFilterWithId } from 'types/smartSearch';

interface MostActiveProps {
    filter: ZetkinSmartSearchFilterWithId | ZetkinSmartSearchFilter | null;
    onSubmit: (filter: ZetkinSmartSearchFilterWithId | ZetkinSmartSearchFilter) => void;
    onCancel: () => void;
}

const MostActive = ({ onSubmit, onCancel, filter }: MostActiveProps): JSX.Element => {
    const [numPeople, setNumPeople] = useState(filter?.config?.size || 10);
    const [timeFrame, setTimeFrame] = useState({});
    const [op, setOp] = useState<'add' | 'sub'>(filter?.op || 'add');

    const [submittable, setSubmittable] = useState(true);

    const handleAddFilter = (e: FormEvent) => {
        e.preventDefault();
        if (submittable) {
            onSubmit({
                config: {
                    size: numPeople,
                    ...timeFrame,
                },
                ...(filter && isFilterWithId(filter) && { id: filter.id }),
                op,
                type: 'most_active',
            });
        }
    };

    const handleTimeFrameChange = (range: {after?: string; before?: string}, canSubmit: boolean) => {
        setTimeFrame(range);
        setSubmittable(canSubmit);
    };

    return (
        <form onSubmit={ e => handleAddFilter(e) }>
            <Typography style={{ lineHeight: 'unset', marginBottom: '2rem' }} variant="h4">
                <Msg id="misc.smartSearch.most_active.inputString" values={{
                    addRemoveSelect: (
                        <StyledSelect onChange={ e => setOp(e.target.value as 'add' | 'sub') }
                            value={ op }>
                            <MenuItem key="add" value="add">
                                <Msg id="misc.smartSearch.most_active.addRemoveSelect.add"/>
                            </MenuItem>
                            <MenuItem key="sub" value="sub">
                                <Msg id="misc.smartSearch.most_active.addRemoveSelect.sub" />
                            </MenuItem>
                        </StyledSelect>
                    ),
                    numPeople: numPeople,
                    numPeopleSelect: (
                        <StyledNumberInput
                            defaultValue={ numPeople }
                            onChange={ (e) => setNumPeople(+e.target.value) }
                        />
                    ),
                    timeFrame: (
                        <TimeFrame filterConfig={{
                            ...(filter?.config?.after && { after: filter.config.after }),
                            ...(filter?.config?.before && { before: filter.config.before }) }} onChange={ handleTimeFrameChange }
                        />
                    ),
                }}
                />
            </Typography>
            <Divider />
            <Typography variant="h6">
                <Msg id="misc.smartSearch.headers.examples"/>
            </Typography>
            <Typography color="textSecondary">
                <Msg id="misc.smartSearch.most_active.examples.one"/>
                <br />
                <Msg id="misc.smartSearch.most_active.examples.two"/>
            </Typography>

            <Box display="flex" justifyContent="flex-end" m={ 1 } style={{ gap: '1rem' }}>
                <Button color="primary" onClick={ onCancel }>
                    <Msg id="misc.smartSearch.buttonLabels.cancel"/>
                </Button>
                <Button color="primary" disabled={ !submittable } type="submit" variant="contained">
                    { filter ? <Msg id="misc.smartSearch.buttonLabels.edit"/>: <Msg id="misc.smartSearch.buttonLabels.add"/> }
                </Button>
            </Box>
        </form>
    );
};

export default MostActive;
