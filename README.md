# Strapi application

## Can we build the plugin with frontend admin panel?

There is an alert on the main strapi website plugins-frontend development 'This feature is currently not available (coming soon)'.

Really?

Let's try to create some one.
...

### I tried and I succeeded

- Generate a plugin

```bash
  strapi generate:plugin plugin-name
```

- Start the project with admin hotreload flag

```bash
  yarn strapi develop --watch-admin
```

- Develop!
