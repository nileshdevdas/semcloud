FROM microsoft/nanoserver 
ENV NODEJS_DOWNLOAD_LINK https://nodejs.org/dist/v8.11.4/node-v8.11.4-win-x64.zip
ENV NODEJS_DOWNLOAD_LOCATION=/
RUN "powershell Invoke-WebRequest -uri %NODEJS_DOWNLOAD_LINK% -outfile c:/node.zip"
RUN setx PATH "%PATH%;c:\node-v8.11.4-win-x64" /m  
RUN "powershell Expand-Archive '/node.zip' -DestinationPath '/'"
RUN "mkdir c:\apps"
COPY test  /apps
WORKDIR c:/apps
RUN "npm install"
EXPOSE 8000
ENTRYPOINT node c:\apps\index.js