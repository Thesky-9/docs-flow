#  Analytics

Integrate with Google Analytics

## Getting credentials

- Go to https://console.developers.google.com/apis/dashboard and create a new project.

![Image](_images/analytics/step1.png)

![Image](_images/analytics/step2.png)

- Select your project and click on __"ENABLE APIS AND SERVICES"__:

![Image](_images/analytics/step3.png)

- Enable API:

![Image](_images/analytics/step4.png)

![Image](_images/analytics/step5.png)

![Image](_images/analytics/step6.png)

- Generate service account key

![Image](_images/analytics/step7.png)

![Image](_images/analytics/step8.png)

![Image](_images/analytics/step9.png)

![Image](_images/analytics/step10.png)

![Image](_images/analytics/step11.png)

- Open JSON file and copy its content, then go to __Admin -> Settings -> General (/admin/settings/general)__ and update field __"Service Account Credentials"__ in Analytics plugin settings by the content from JSON file:

It will look like this:

![Image](_images/analytics/step12.png)

## Setting Google Analytics

- Go to Google Analytics account: https://analytics.google.com/analytics/web/. Click on "Admin" => "View Settings" and copy "View ID" number, then go to /admin/settings/general and tab "Google Analytics" and paste to field View ID.

Note: Change in Google Analytics 4 property.

When creating a new property, you need to check the "Create a Universal Analytics Property" checkbox.

![Image](_images/analytics/step13.png)

Then you will have view settings tab and View ID.

![Image](_images/analytics/step14.png)

- Open JSON credentials file and copy client email. Then click on "User management" and add that email to list account. Just need view only permission.

![Image](_images/analytics/step15.png)


![Image](_images/analytics/step16.png)

Give your comment here if you got any problem.

Good luck!