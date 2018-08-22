This is and example of docker with Node on windows \n
The test folder is the application which has node express sample helloworld \n
The Dockerfile contains all the reuqired commands to setup up node and path to run the express application microservice on the nanoserver image \n

goto the directory dockerwithnode
run  the following command  \n
docker build . -t <name>:<tag>
example command  => docker build . -t mynode:latest


