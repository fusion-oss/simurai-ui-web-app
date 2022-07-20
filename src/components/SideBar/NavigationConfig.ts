import { faAddressBook, faCalendarDays, faCircle, faCircleQuestion, faGear, IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface NavigationconfigType {
    route: string;
    icon: IconDefinition;
    name: string;
}

export const Navigationconfig: NavigationconfigType[] = [
    {
        route: '/events',
        icon: faCalendarDays,
        name: 'Events'
    },
    {
        route: '/settings',
        icon: faGear,
        name: 'Setting'
    },
    {
        route: '/contact',
        icon: faAddressBook,
        name: 'Contact'
    },
    {
        route: '/help',
        icon: faCircleQuestion,
        name: 'Help'
    }
]

