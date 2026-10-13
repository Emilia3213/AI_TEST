@echo off
setlocal

cd /d "%~dp0"

echo Starting website...
echo Open this URL in your browser:
echo http://localhost:3000
echo.

npm run dev

echo.
echo Website server stopped.
echo Press any key to close this window.
pause >nul
