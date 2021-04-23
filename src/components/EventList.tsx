import NextLink from 'next/link';
import {
    Button,
    Flex,
    Text,
    View,
} from '@adobe/react-spectrum';
import {
    FormattedDate,
    FormattedTime,
    FormattedMessage as Msg,
} from 'react-intl';

import { ZetkinEvent } from '../types/zetkin';
import { ZetkinEventResponse } from '../types/zetkin';
import { ZetkinOrganization } from '../types/zetkin';

interface EventListProps {
    events: ZetkinEvent[] | undefined;
    org: ZetkinOrganization;
    eventResponses: ZetkinEventResponse[] | undefined;
    onEventResponse: (eventId: number, orgId: number, response: boolean) => void;
}

const EventList = ({ eventResponses, events, onEventResponse, org } : EventListProps) : JSX.Element => {

    if (!events || events.length === 0) {
        return (
            <Text data-testid="no-events-placeholder">
                <Msg id="misc.eventList.placeholder"/>
            </Text>
        );
    }

    return (
        <>
            <Flex data-testid="event-list" direction="row" gap="100" wrap>
                { events?.map((e) => {
                    const response = eventResponses?.find(response => response.action_id === e.id);
                    return (
                        <Flex key={ e.id } data-testid="event" direction="column" margin="size-200">
                            <View data-testid="event-title">
                                { e.title ? e.title : e.activity.title }
                            </View>
                            <View data-testid="org-title">{ org.title }</View>
                            <View data-testid="campaign-title">{ e.campaign.title }</View>
                            <View data-testid="start-time">
                                <FormattedDate
                                    day="2-digit"
                                    month="long"
                                    value={ Date.parse(e.start_time) }
                                />
                                , <FormattedTime
                                    value={ Date.parse(e.start_time) }
                                />
                            </View>
                            <View data-testid="end-time">
                                <FormattedDate
                                    day="2-digit"
                                    month="long"
                                    value={ Date.parse(e.end_time) }
                                />
                                , <FormattedTime
                                    value={ Date.parse(e.end_time) }
                                />
                            </View>
                            <View data-testid="location-title">{ e.location.title }</View>
                            { response ? (
                                <Button
                                    data-testid="event-response-button"
                                    marginTop="size-50"
                                    onPress={ () => onEventResponse(e.id, org.id, true) }
                                    variant="cta">
                                    <Msg id="misc.eventList.undoSignup"/>
                                </Button>
                            ) : (
                                <Button
                                    data-testid="event-response-button"
                                    marginTop="size-50"
                                    onPress={ () => onEventResponse(e.id, org.id, false) }
                                    variant="cta">
                                    <Msg id="misc.eventList.signup"/>
                                </Button>
                            ) }
                            <NextLink href={ `/o/${org.id}/events/${e.id}` }>
                                <a>
                                    <Button marginTop="size-50" variant="cta">
                                        <Msg id="misc.eventList.moreInfo"/>
                                    </Button>
                                </a>
                            </NextLink>
                        </Flex>
                    );
                }) }
            </Flex>
        </>
    );
};

export default EventList;