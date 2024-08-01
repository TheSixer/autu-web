module.exports = {
  apps: [
    {
      name: 'my-next-app',
      script: './server.js',
      env: {
        NODE_ENV: 'production'
      },
      watch: false,
      instances: 'max', // 利用所有CPU核心
      exec_mode: 'cluster' // 使用集群模式
    }
  ]
};
