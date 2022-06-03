echo off
title RPC
cls
:start
echo HEY CAROTA
echo Starting RPC
echo -------------------------------
node index.js
echo --------------------------------
echo Carota cosa hai rotto? Riavvio
echo -------------------------------
timeout 8
goto start
