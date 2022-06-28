# Finner shop

Finner shop is a E-commere website which for both customer and client. 


Folder Structure Front-End
============================


    .
    ├── build                   # Compiled files (alternatively `dist`)
    ├── public                  # Assets files (images, sounds, icons, etc)
    ├── src                     # Source files (alternatively `lib` or `app`)
       |-- actions      # Logic and and algorithmns files
       |-- components   # Interface component files and css files
       |-- dto          # Entities and Models for request to API
       |-- entities     # Files defines model objects in APP (product, order, user, etc.)
       |-- hooks        # React wapper files
       |-- layouts      # Interfacer layout wrapper files
       |-- pages        # Page files
       |-- provider     # Defines logic providers
       |-- utils        # Tool files
        
    ├── styles                  # Style files (css and sass)
    ├── LICENSE
    └── README.md

Folder Structure Back-End
============================
    .
    |-- models                   # Model and Controller files
    |-- vendor
      |-- composer               # Library files


Use the package manager [npm](https://www.npmjs.com/) to install Front-End packages.


# Front-end setup 
## Framework

> [NextJS](https://nextjs.org/) NextJS is a Server Side Sendering (SSR) so rendering in browser really fast and optimized, it support signification in SEO development for a E-commerce website.

> [Boostrap](https://getbootstrap.com/) Support style elements 

> [TaildwindCss](https://tailwindcss.com/) Support style elements 

> [JQuery](https://jquery.com/) Logic and ElementDom animations


```bash
brew install node     # Install nodeJS and packcage manager (npm)

cd site & npm install # Install required packages

npm run dev           # Start project and watch changes in dev mode
```

# Back-end setup
## Library
> [MongoDB](https://www.mongodb.com/) is a mature relational database system, offering a familiar database environment for experienced IT professionals.

```bash
curl -s https://getcomposer.org/installer | php # Install composer installer 

cd api & composer install                       # Install required packages

php -S 127.0.0.1:8001                           # Start app in port 8001
```



## Usage actions and providers

```javascript
import { UserAction } from "src/actions";

const userAction = new UserAction();

await userAction.login();
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)