import {useTranslation} from "react-i18next";

export const RoleStaff = {
    "data": [
        {value: 'ROLE_ADMIN', name: t => t('ROLE_ADMIN'), label: t =>  t('ROLE_ADMIN'), isDisabled: true, isFixed: true},
        {value: 'ROLE_SALE_MANAGER', name: t =>t('ROLE_SALE_MANAGER'), label: t =>t('ROLE_SALE_MANAGER'), isDisabled: false},
        {value: 'ROLE_OPS_MANAGER', name: t =>t('ROLE_OPS_MANAGER'), label: t =>t('ROLE_OPS_MANAGER'), isDisabled: false},
        {value: 'ROLE_SALE', name: t =>t('ROLE_SALE'), label: t =>t('ROLE_SALE'), isDisabled: false},
        {value: 'ROLE_OPS', name: t =>t('ROLE_OPS'), label: t =>t('ROLE_OPS'), isDisabled: false}

    ]
}