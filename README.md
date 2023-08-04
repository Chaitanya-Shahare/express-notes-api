# Notes API using express

## Project setup

```
npm install express cors mongoose dotenv jsonwebtoken bcrypt
```

## Project file structure

```
.
├── README.md
├── package-lock.json
├── package.json
├── pbcopy
└── src
    ├── controllers
    │   ├── noteController.js
    │   └── userController.js
    ├── index.js
    ├── middlewares
    │   └── auth.js
    ├── models
    │   ├── note.js
    │   └── user.js
    └── routes
        ├── noteRoutes.js
        └── userRoutes.js

6 directories, 12 files

```

- `index.js` is the entry point of the application
