import Checkmark from '@spectrum-icons/workflow/Checkmark';
import NextLink from 'next/link';
import {
    Button,
    Flex,
    Heading,
    Text,
    View,
} from '@adobe/react-spectrum';
import {
    FormattedDate,
    FormattedTime,
    FormattedMessage as Msg,
} from 'react-intl';

import { BookedEvent } from '../../src/types';
import SignupDialogTrigger from './SignupDialog';
import { useUser } from '../hooks';
import {
    ZetkinEvent,
    ZetkinEventResponse,
} from '../types/zetkin';

interface EventListProps {
    bookedEvents: BookedEvent[] | undefined;
    events: ZetkinEvent[] | undefined;
    onSignup: (eventId: number, orgId: number) => void;
    onUndoSignup: (eventId: number, orgId: number) => void;
    eventResponses?: ZetkinEventResponse[];
}

export default function EventList ({ bookedEvents, eventResponses, events, onSignup, onUndoSignup } : EventListProps) : JSX.Element {

    if (!events || events.length === 0) {
        return (
            <>
                <Heading level={ 2 }>
                    <Msg id="pages.myTodo.events"/>
                </Heading>
                <Text data-testid="no-events-placeholder">
                    <Msg id="misc.eventList.placeholder"/>
                </Text>
            </>
        );
    }

    return (
        <>
            <Heading level={ 2 } marginBottom="0">
                <Msg id="pages.myTodo.events"/>
            </Heading>
            <Flex data-testid="event-list" direction="row" gap="100" wrap>
                { events?.map((event) => {
                    const response = eventResponses?.find(response => response.action_id === event.id);
                    const booked = bookedEvents?.find(booked => booked.id === event.id);
                    return (<EventListItem
                        key={ event.id }
                        booked={ booked }
                        event={ event }
                        onSignup={ onSignup }
                        onUndoSignup={ onUndoSignup }
                        response={ response }
                    />
                    );
                })
                }
            </Flex>
        </>
    );

}

interface EventListItemProps {
    booked: BookedEvent | undefined;
    event: ZetkinEvent;
    onSignup: (eventId: number, orgId: number) => void;
    onUndoSignup: (eventId: number, orgId: number) => void;
    response: ZetkinEventResponse | undefined;
}

const EventListItem = ({ booked, event, response, onSignup, onUndoSignup }: EventListItemProps): JSX.Element => {
    const user = useUser();
    // let todo: false;

    // if (!org) {
    //     todo = true;
    // }
    // else {
    //     todo = false;
    // }

    return (
        <Flex data-testid="event" direction="column" margin="size-200">
            <View data-testid="event-title">
                { event.title ? event.title : event.activity.title }
            </View>
            <View data-testid="org-title">{ event.organization.title }</View>
            <View data-testid="campaign-title">{ event.campaign.title }</View>
            <View data-testid="start-time">
                <FormattedDate
                    day="2-digit"
                    month="long"
                    value={ Date.parse(event.start_time) }
                />
                , <FormattedTime
                    value={ Date.parse(event.start_time) }
                />
            </View>
            <View data-testid="end-time">
                <FormattedDate
                    day="2-digit"
                    month="long"
                    value={ Date.parse(event.end_time) }
                />
                , <FormattedTime
                    value={ Date.parse(event.end_time) }
                />
            </View>
            <View data-testid="location-title">{ event.location.title }</View>
            { user ? (
                <EventResponseButton
                    booked={ booked }
                    event={ event }
                    onSignup={ onSignup }
                    onUndoSignup={ onUndoSignup }
                    response={ response }
                    // todo={ todo }
                />
            ) : <SignupDialogTrigger /> }
            <NextLink href={ `/o/${event.organization.id}/events/${ event.id }` }>
                <a>
                    <Button marginTop="size-50" variant="cta">
                        <Msg id="misc.eventList.moreInfo" />
                    </Button>
                </a>
            </NextLink>
        </Flex>
    );
};

interface EventResponseButtonProps {
    booked: BookedEvent | undefined;
    event: ZetkinEvent;
    onSignup: (eventId: number, orgId: number) => void;
    onUndoSignup: (eventId: number, orgId: number) => void;
    response: ZetkinEventResponse | undefined;
    // todo: boolean;
}

const EventResponseButton = ({ booked, event, onSignup, onUndoSignup, response /* todo */ } : EventResponseButtonProps): JSX.Element => {

    if (booked) {
        return (
            <Flex
                alignItems="center"
                data-testid="booked"
                marginTop="3px"
                minHeight="32px">
                <Checkmark aria-label="Inbokad" color="positive" />
                <Msg id="misc.eventList.booked" />
            </Flex>
        );
    }

    // if (todo) {
    //     return (
    //         <Button
    //             data-testid="event-response-button"
    //             marginTop="size-50"
    //             // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    //             onPress={ () => onUndoSignup(event.id, event.organization.id) }
    //             variant="cta">
    //             <Msg id="misc.eventList.undoSignup" />
    //         </Button>
    //     );
    // }

    return (
        <>
            { response ? (
                <Button
                    data-testid="event-response-button"
                    marginTop="size-50"
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    onPress={ () => onUndoSignup(event.id, event.organization.id) }
                    variant="cta">
                    <Msg id="misc.eventList.undoSignup" />
                </Button>
            ) : (
                <Button
                    data-testid="event-response-button"
                    marginTop="size-50"
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    onPress={ () => onSignup(event.id, event.organization.id) }
                    variant="cta">
                    <Msg id="misc.eventList.signup" />
                </Button>
            ) }
        </>
    );
};
