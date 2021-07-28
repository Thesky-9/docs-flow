# Install on hosting

1. Upload all files into the root folder of your hosting (normally, it is `public_html`) .

![Database](_images/installation/hosting_folder.png)
2. Create a database and import data from database.sql (it's located in source code).

![Database](_images/installation/folder-flow.png)

3. Open file `.env` and and update it with your credentials.

+ You need to setup database connection before doing the next steps.
~~~
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE="your-database"
DB_USERNAME="username"
DB_PASSWORD="password"
~~~
+ Make sure `APP_URL` in `.env` is correct your domain. It should be `APP_URL=http://your-domain.com`
  ![Env](_images/installation/config-env.png)
  
4. Go to `http://your-domain.com/admin` to access to admin panel.
- The default admin account is `admin` - `12345678`

  ![Login](_images/installation/admin-login.png)

**Notes**: We are providing free installation service on Cpanel or Direct Admin for 1 time so you can contact us for installation if you can't install it.
Please send an email to thesky9.com@gmail.com
