import { Divider, Tooltip } from '@mui/material';
import { Box } from '@mui/system';

import AccessControlIcon from 'common/assets/svgs/AccessControl';
import AddPropertyIcon from 'common/assets/svgs/AddProperty';
import AddPropertyDisabledIcon from 'common/assets/svgs/AddPropertyDisabled';
import AnnouncementIcon from 'common/assets/svgs/Announcement';
import AvailabilityCalendarIcon from 'common/assets/svgs/AvailabilityCalendar';
import BookingRefundsIcon from 'common/assets/svgs/BookingRefunds';
import BookingsIcon from 'common/assets/svgs/Bookings';
import BookingsDisabledIcon from 'common/assets/svgs/BookingsDisabled';
import CalendarDisabledIcon from 'common/assets/svgs/CalendarDisabled';
import ChatIcon from 'common/assets/svgs/Chat';
import CheckIcon from 'common/assets/svgs/Check';
import ContactIcon from 'common/assets/svgs/Contact';
import CustomerServiceIcon from 'common/assets/svgs/CustomerService';
import DashboardIcon from 'common/assets/svgs/Dashboard';
import DeleteIcon from 'common/assets/svgs/Delete';
import DisputeManagementIcon from 'common/assets/svgs/DisputeManagement';
import EditIcon from 'common/assets/svgs/Edit';
import EmailIcon from 'common/assets/svgs/Email';
import FacebookIcon from 'common/assets/svgs/Facebook';
import FavoritesDisabledIcon from 'common/assets/svgs/FavoritesDisabled';
import FinanceIcon from 'common/assets/svgs/Finance';
import GearIcon from 'common/assets/svgs/Gear';
import HamburgerIcon from 'common/assets/svgs/Hamburger';
import InboxIcon from 'common/assets/svgs/Inbox';
import InfoIcon from 'common/assets/svgs/Info';
import InstragramIcon from 'common/assets/svgs/Instagram';
import LogoIcon from 'common/assets/svgs/Logo';
import LogoVariationIcon from 'common/assets/svgs/LogoVariation';
import LogoutIcon from 'common/assets/svgs/Logout';
import MessagesIcon from 'common/assets/svgs/Messages';
import MessagesDisabledIcon from 'common/assets/svgs/MessagesDisabled';
import OwnerIcon from 'common/assets/svgs/Owner';
import PaymentProcessingIcon from 'common/assets/svgs/PaymentProcessing';
import PaymentsIcon from 'common/assets/svgs/Payments';
import PaymentsDisabledIcon from 'common/assets/svgs/PaymentsDisabled';
import PencilIcon from 'common/assets/svgs/Pencil';
import PendingRentsIcon from 'common/assets/svgs/PendingRents';
import PhoneIcon from 'common/assets/svgs/Phone';
import PMOIcon from 'common/assets/svgs/Pmo';
import PmoVerificationIcon from 'common/assets/svgs/PmoVerification';
import ProfileCompleted from 'common/assets/svgs/ProfileCompleted';
import PropertiesIcon from 'common/assets/svgs/Properties';
import PropertyProfilesIcon from 'common/assets/svgs/PropertyProfiles';
import PropertyProfilesDisabledIcon from 'common/assets/svgs/PropertyProfilesDisabled';
import PropertyVerificationIcon from 'common/assets/svgs/PropertyVerification';
import RentIcon from 'common/assets/svgs/Rent';
import ReviewsDisabledIcon from 'common/assets/svgs/ReviewsDisabled';
import RolesIcon from 'common/assets/svgs/Roles';
import SearchIcon from 'common/assets/svgs/Search';
import SearchDisabledIcon from 'common/assets/svgs/SearchDisabled';
import ServiceDisabledIcon from 'common/assets/svgs/ServiceDisabled';
import SettingsIcon from 'common/assets/svgs/Settings';
import UsersIcon from 'common/assets/svgs/Users';
import YoutubeIcon from 'common/assets/svgs/Youtube';
import styled from 'styled-components';

export default {
  title: 'core/icons',
};

const Wrapper = styled(Box)`
  svg {
    width: 60px;
    height: 60px;
  }
`;

const icons = [
  {
    icon: <AddPropertyIcon />,
    label: 'addProperty.svg',
  },
  {
    icon: <InboxIcon />,
    label: 'inbox.svg',
  },
  {
    icon: <LogoIcon />,
    label: 'logo.svg',
  },
  {
    icon: <LogoVariationIcon />,
    label: 'logoVariation.svg',
  },
  {
    icon: <LogoutIcon />,
    label: 'logout.svg',
  },
  {
    icon: <PencilIcon />,
    label: 'pencil.svg',
  },
  {
    icon: <DeleteIcon />,
    label: 'delete.svg',
  },
  {
    icon: <EmailIcon />,
    label: 'email.svg',
  },
  {
    icon: <MessagesIcon />,
    label: 'messages.svg',
  },
  {
    icon: <ContactIcon />,
    label: 'contact.svg',
  },
  {
    icon: <AddPropertyDisabledIcon />,
    label: 'addPropertyDisabled.svg',
    isDisabledIcon: true,
  },
  {
    icon: <PropertyProfilesDisabledIcon />,
    label: 'propertyProfilesDisabled.svg',
    isDisabledIcon: true,
  },
  {
    icon: <BookingsDisabledIcon />,
    label: 'bookingsDisabled.svg',
    isDisabledIcon: true,
  },
  {
    icon: <PaymentsDisabledIcon />,
    label: 'paymentsDisabled.svg',
    isDisabledIcon: true,
  },
  {
    icon: <CalendarDisabledIcon />,
    label: 'calendarDisabled.svg',
    isDisabledIcon: true,
  },
  {
    icon: <ChatIcon />,
    label: 'chat.svg',
    isDisabledIcon: true,
  },
  {
    icon: <ServiceDisabledIcon />,
    label: 'serviceDisabled.svg',
    isDisabledIcon: true,
  },
  {
    icon: <SettingsIcon />,
    label: 'settings.svg',
  },
  {
    icon: <GearIcon />,
    label: 'gear.svg',
  },
  {
    icon: <UsersIcon />,
    label: 'users.svg',
  },
  {
    icon: <RolesIcon />,
    label: 'roles.svg',
  },
  {
    icon: <AccessControlIcon />,
    label: 'accessControl.svg',
  },
  {
    icon: <BookingsIcon />,
    label: 'bookings.svg',
  },
  {
    icon: <RentIcon />,
    label: 'rent.svg',
  },
  {
    icon: <PropertiesIcon />,
    label: 'properties.svg',
  },
  {
    icon: <OwnerIcon />,
    label: 'owner.svg',
  },
  {
    icon: <PaymentsIcon />,
    label: 'payments.svg',
  },
  {
    icon: <FinanceIcon />,
    label: 'finance.svg',
  },
  {
    icon: <PMOIcon />,
    label: 'pmo.svg',
  },
  {
    icon: <PaymentProcessingIcon />,
    label: 'paymentProcessing.svg',
  },
  {
    icon: <PmoVerificationIcon />,
    label: 'pmoVerification.svg',
  },
  {
    icon: <PendingRentsIcon />,
    label: 'pendingRents.svg',
  },
  {
    icon: <BookingRefundsIcon />,
    label: 'bookingRefunds.svg',
  },
  {
    icon: <AnnouncementIcon />,
    label: 'announcement.svg',
  },
  {
    icon: <CustomerServiceIcon />,
    label: 'customerService.svg',
  },
  {
    icon: <DisputeManagementIcon />,
    label: 'disputeManagement.svg',
  },
  {
    icon: <PropertyProfilesIcon />,
    label: 'propertyProfiles.svg',
  },
  {
    icon: <PropertyVerificationIcon />,
    label: 'propertyVerification.svg',
  },
  {
    icon: <AvailabilityCalendarIcon />,
    label: 'availabilityCalendar.svg',
  },
  {
    icon: <SearchIcon />,
    isDisabledIcon: true,
    label: 'search.svg',
  },
  {
    icon: <SearchDisabledIcon />,
    isDisabledIcon: true,
    label: 'searchDisabled.svg',
  },
  {
    icon: <FavoritesDisabledIcon />,
    isDisabledIcon: true,
    label: 'favoritesDisabled.svg',
  },
  {
    icon: <MessagesDisabledIcon />,
    isDisabledIcon: true,
    label: 'messagesDisabled.svg',
  },
  {
    icon: <ReviewsDisabledIcon />,
    isDisabledIcon: true,
    label: 'reviewsDisabled.svg',
  },
  {
    icon: <HamburgerIcon />,
    label: 'hamburger.svg',
  },
  {
    icon: <YoutubeIcon />,
    label: 'youtube.svg',
  },
  {
    icon: <FacebookIcon />,
    label: 'facebook.svg',
  },
  {
    icon: <InstragramIcon />,
    label: 'instagram.svg',
  },
  {
    icon: <PhoneIcon />,
    label: 'phone.svg',
  },
  {
    icon: <InfoIcon />,
    label: 'info.svg',
  },
  {
    icon: <EditIcon />,
    label: 'edit.svg',
  },
  {
    icon: <CheckIcon />,
    label: 'check.svg',
  },
  {
    icon: <ProfileCompleted />,
    label: 'ProfileCompleted.tsx',
  },
];

export const Icons = () => {
  return (
    <Wrapper>
      <Box display="flex" flexWrap="wrap">
        {icons
          .filter((icon) => !icon.isDisabledIcon)
          .sort((a, b) => (a.label > b.label ? 1 : b.label > a.label ? -1 : 0))
          .map((ic, index) => (
            <Tooltip title={ic.label} arrow key={index}>
              <Box padding={1}>{ic.icon}</Box>
            </Tooltip>
          ))}
      </Box>
      <Divider />
      <Box display="flex" flexWrap="wrap">
        {icons
          .filter((icon) => icon.isDisabledIcon)
          .sort((a, b) => (a.label > b.label ? 1 : b.label > a.label ? -1 : 0))
          .map((ic, index) => (
            <Tooltip title={ic.label} arrow key={index}>
              <Box padding={1}>{ic.icon}</Box>
            </Tooltip>
          ))}
      </Box>
    </Wrapper>
  );
};
