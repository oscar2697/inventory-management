module.exports = {
    apps: [
        {
            name: 'inventeory-management',
            script: 'npm',
            args: 'run dev',
            env: {
                NODE_ENV: 'development',
                ENV_VAR1: 'enviroment-varible'
            }
        }
    ]
}