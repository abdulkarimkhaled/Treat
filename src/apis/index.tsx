// declaring the apis that will be used for integrations
const ApiConstants = {
    BASE_URL: 'https://treat.sa/admin/public/api/v1/',
    LOGIN: 'branch/login',
    DASHBOARD: 'branch/services/stat',
    ORDERS: 'branch/orders',
    SERVICES: 'branch/services',
    DELETE_SERVICE: 'branch/services/delete/',
    SERVICES_CATEGORIES: 'branch/services/categories',
    UPDATE_SERVICE: 'branch/services/update',
    NOTIFICATIONS: 'branch/notifications',
    READ_ONE_NOTIFICATION: 'branch/notifications/readOneNotify/',
    READ_ALL_NOTIFICATIONS: 'branch/notifications/readNotify',
    UPDATE_ORDER: 'branch/update-order-status'
};

export default ApiConstants;
