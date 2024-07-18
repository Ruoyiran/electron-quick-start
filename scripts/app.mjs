import concurrently from 'concurrently';

concurrently([
    { command: 'yarn start:dev', name: 'dev' },
    { command: 'yarn start:server', name: 'server' },
    {
        command: 'yarn start:electron',
        name: 'watch',
    },
]);
