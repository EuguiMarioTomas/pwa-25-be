# pwa-25

proyecto con fines academicos.
primer parcial programacion web avanzada.

--------------------------------------
Pasos para el correcto funcionamiento:
--------------------------------------


Comandos de consola{

    npm init -y //iniciar el proyecto
    
    //dependencias 
    npm i cors
    npm i dotenv
    npm i express
    npm i mongodb
    npm i mongoose

    //dependencias del dev
    npm i nodemon -D
    npm install -D typescript ts-node ts-node-dev @typescript-eslint/parser @types/node @types/express @types/mongoose @types/cors
    
    //inicializacion de proyecto TypeScript
    npx tsc --init
}

--------------------------------------
//configuracion de archivos

/tsconfig.json{

    "compilerOptions": {
        
        "outDir":"dist"
    
    }

    "include": ["src/**/*",]
}

/pachage.json{

    "scripts": {

        "start": "node ./dist/server.js",

        "dev": "nodemon --exec ts-node src/server.ts",

        "build": "tsc",

        "test": "echo \"Error: no test specified\" && exit 1"
    },
}

--------------------------------------
//configuracion variables de entorno

//crear archivo .env en la raiz del proyecto con el siguiente contenido(reemplazando los valores con los tuyos)

/.env{

    PORT = (puerto donde correra el servidor express)

    MONGO_URI = (cadena de conexion con base de datos MongoDB (atlas))
}

--------------------------------------
//iniciar el servidor en modo desarrollador

npm run dev

--------------------------------------
//endpoints

users{

    createUser{

        URL: "http://localhost:{PORT}/users"

        Metodo: POST

        Body (JSON){

            "name": "ejemplo_usuario",

            "lastName": "ejemplo_usuario",

            "email": "ejemplo_usuario@dominio.com",
        }
    }    

    getAllUsers{

        URL: "http://localhost:{PORT}/users"

        Metodo: GET
    } 

    getUserByID{

        URL: "http://localhost:{PORT}/users/:id"

        Metodo: GET
    } 
    updateUser{

        URL: "http://localhost:{PORT}/users/:id"

        Metodo: PUT

        Body (JSON){

            "name": "ejemplo_usuario",
            
            "lastName": "ejemplo_usuario",

            "email": "ejemplo_usuario@dominio.com"
        }
    }

    //baja logica
    deleteUser{

        URL: "http://localhost:{PORT}/users/:id" 

        Metodo: DELETE
    }

    //reactivacion de usuario
    activateUser{

        URL: "http://localhost:{PORT}/users/:id/activate"

        Metodo: PATCH
    } 
}

posts{

    createPost{
    
        URL: "http://localhost:{PORT}/posts"
    
        Metodo: POST
    
        Body (JSON){
    
            "title": "ejemplo_titulo",
    
            "content": "ejemplo_contenido",
    
            "authorId": "683a4ddb1d546eb54d6d2875" //ejemplo id de autor del post
        }
    }
    
    getAllPosts{
    
        URL: "http://localhost:{PORT}/posts"
    
        Metodo: GET
    }
    
    getPostById{
    
        URL: "http://localhost:{PORT}/posts/:id"
    
        Metodo: GET
    }
    
    updatePost{
    
        URL: "http://localhost:{PORT}/posts/:id"
    
        Metodo: PUT
    
        Body (JSON){
    
            "title": "ejemplo_titulo",
    
            "content": "ejemplo_contenido",
        }
    }
    
    //baja fisica
    deletePost{
    
        URL: "http://localhost:{PORT}/posts/:id"
    
        Metodo: DELETE
    }
    
    likePost{
    
        URL: "http://localhost:{PORT}/posts/:postId/like"
    
        Metodo: PATCH
    
        Body (JSON){
    
            "userId": "683a4ddb1d546eb54d6d2874" //ejemplo id de usuario que dio like
        }
    }
    
    unLikePost{
    
        URL: "http://localhost:{PORT}/posts/:postId/unLike"
    
        Metodo: PATCH
    
        Body (JSON){
    
            "userId": "683a4ddb1d546eb54d6d2873" //ejemplo id de usuario que quito su like
        }
    }
}

