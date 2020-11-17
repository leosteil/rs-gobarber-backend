interface IMailConfig {
    driver: 'etherial' | 'ses';
    defaults: {
        from: {
            email: string;
            name: string;
        };
    };
}

export default {
    driver: process.env.MAIL_PROVIDER || 'etherial',

    defaults: {
        from: {
            email: 'leosteil@leosteil.dev',
            name: 'Leonardo Steil',
        },
    },
} as IMailConfig;
