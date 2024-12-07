//office inActive icons
import { ReactComponent as DashboardIconInactive } from '../assets/icons/DashboardInactive.svg';
import { ReactComponent as EventIconInactive } from '../assets/icons/EventInactive.svg';
import { ReactComponent as PromoteIconInactive } from '../assets/icons/PromoteInactive.svg';
import { ReactComponent as PaymentIconInactive } from '../assets/icons/PaymentInactive.svg';

//office active icons
import { ReactComponent as DashboardIconActive } from '../assets/icons/DashboardActive.svg';
import { ReactComponent as EventIconActive } from '../assets/icons/EventActive.svg';
import { ReactComponent as PromoteIconActive } from '../assets/icons/PromoteActive.svg';
import { ReactComponent as PaymentIconActive } from '../assets/icons/PaymentActive.svg';

export const sideBarData={
  corporate:[
    {
      name: 'Customer Archives',
      entry: 'customer-archives',
      activeIcon: null,
      inActiveIcon: DashboardIconInactive,
    },
    {
      name: 'Manager Training Videos',
      entry: 'manager-training',
      activeIcon: null,
      inActiveIcon: EventIconInactive,
    },
    {
      name: 'Page System',
      entry: 'accounting',
      activeIcon: null,
      inActiveIcon: PromoteIconInactive,
    },
    {
      name: 'Page System',
      entry: 'legal',
      activeIcon: null,
      inActiveIcon: PaymentIconInactive,
    }
  ],
  production: [
      {
        name: 'Sub contractor system',
        entry: 'subcontractor',
        activeIcon: DashboardIconActive,
        inActiveIcon: DashboardIconInactive,
      },
      {
        name: 'Employee System',
        entry: 'employee',
        activeIcon: EventIconActive,
        inActiveIcon: EventIconInactive,
      },
      {
        name: 'Service Call system',
        entry: 'service',
        activeIcon: PromoteIconActive,
        inActiveIcon: PromoteIconInactive,
      },
      {
        name: 'Training Videos',
        entry: 'training',
        activeIcon: PaymentIconActive,
        inActiveIcon: PaymentIconInactive,
      },
      {
        name: 'Production Pictures',
        entry: 'pictures',
        activeIcon: PaymentIconActive,
        inActiveIcon: PaymentIconInactive,
      }
    ],
  sales:[
    {
      name: 'Sales System',
      entry: 'system',
      activeIcon: DashboardIconActive,
      inActiveIcon: DashboardIconInactive,
    },
    {
      name: 'Quotes',
      entry: 'quotes',
      activeIcon: EventIconActive,
      inActiveIcon: EventIconInactive,
    },
    {
      name: 'Sales Materials',
      entry: 'materials',
      activeIcon: PromoteIconActive,
      inActiveIcon: PromoteIconInactive,
    },
    {
      name: 'Sales Presentations',
      entry: 'presentations',
      activeIcon: PaymentIconActive,
      inActiveIcon: PaymentIconInactive,
    },
    {
      name: 'Pre Constructions Pictures',
      entry: 'constructions',
      activeIcon: PaymentIconActive,
      inActiveIcon: PaymentIconInactive,
    },
    {
      name: 'Communications Manager',
      entry: 'communications',
      activeIcon: PaymentIconActive,
      inActiveIcon: PaymentIconInactive,
    }
  ],
  office:[
    {
      name: 'Paper work system',
      entry: 'paper',
      activeIcon: DashboardIconActive,
      inActiveIcon: DashboardIconInactive,
    },
    {
      name: 'Safety System',
      entry: 'safety',
      activeIcon: EventIconActive,
      inActiveIcon: EventIconInactive,
    },
    {
      name: 'Supplier system',
      entry: 'supplier',
      activeIcon: PromoteIconActive,
      inActiveIcon: PromoteIconInactive,
    },
    {
      name: 'Equipment and supplies inventory',
      entry: 'equipment-inventory',
      activeIcon: PaymentIconActive,
      inActiveIcon: PaymentIconInactive,
    }
  ]
}
