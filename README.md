# Craft CMS demo site

This demo site uses [fortrabbit](https://www.fortrabbit.com/craft-hosting), a modern PHP application platform tailored for Craft CMS, with Git deployments and Composer support.

Front end build system: Webpack and Tailwind CSS



## Setup Craft CMS on localhost

### Clone repo
```
git clone https://github.com/andyzack/andrewcraft.git`
```
### Install Craft CMS locally
```
composer install
```
### Create MAMP project
  - define document root to the sub-folder 'web'
  - define database as mentioned in .env.example
  - with PHP version mentioned in composer.json
  - base url like it is defined in .env.dev
  - Copy .env.dev to create .env file
  - Change the database credentials (if needed)

http://andrewcraft/admin


### Admin panel
After the above steps, you should be able to login to the admin panel locally
http://andrewcraft/admin



## Configure Craft CMS on fortrabbit

For full instruction see [craft-3-setup](https://help.fortrabbit.com/craft-3-setup)

### Security Key Update

Copy over [security key](https://help.fortrabbit.com/craft-3-setup#toc-security-key) from `.env` (hidden file) from the root folder of your project and paste it in the App's ENV vars settings in the Dashboard
```
SECURITY_KEY=[REPLACE WITH YOUR HASH KEY]
```

### General Configuration Settings Update

This change is already included in `config/general.php` as instructed in this [section](https://help.fortrabbit.com/craft-3-setup#toc-configuration-settings)


### Database synchronization

### Import/Export Database
 - Extract copy of MySQL db (my_craft_demo_2021-01-03.sql.zip) available in the root folder and upload in your project
 - Export local database along with any changes you made and import it to the fortrabbit remote. Follow the guidelines [Using MySQL Workbench (GUI)](https://help.fortrabbit.com/mysql#toc-export-amp-import)


### Restart your app


## Front End Dependencies
- `Node`
- `NPM`
- `ES6`
- `Webpack`

### 
```
npm install
```

### Compiles and hot-reloads for development
```
npm run hot
```

### Compiles and minifies for production
```
npm run build
```


## Webpack

**Webpack** is a task/build runner for development. We use it to compile **Sass**, and **JavaScript**, minify **CSS**, uglify and compress **JavaScript** and much more.


## Tailwind

A utility-first CSS framework for rapidly building custom user interfaces.
For full documentation, visit tailwindcss.com

## References:

For full intruction on installation
https://craftcms.com/docs/3.x/installation.html#step-1-download-craft
