export const localAuth = false;

export const authOrigin = localAuth
  ? 'http://localhost:8080'
  : 'https://app.blockstack.org';

export const connectOptions = onDidConnect => {
  return {
    authOrigin: authOrigin,
    onFinish: onDidConnect,
    appDetails: {
      name: 'Stacks DAO Haus',
      icon: 'https://stacks-dao-haus.netlify.app/images/icons/icon-512x512.png',
    },
  };
};
