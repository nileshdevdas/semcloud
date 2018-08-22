FROM microsoft/iis
COPY downloadjava.ps1 downloadjava.ps1
RUN "powershell -f downloadjava.ps1"
RUN "/jdk8.exe /s"
RUN "java -version"
COPY springapp.jar  springapp.jar 
ENTRYPOINT java -jar springapp.jar