@echo off
setlocal

cd /d "%~dp0"

git --version >nul 2>&1
if errorlevel 1 (
    echo Git is not installed or is not available in PATH.
    goto done
)

echo Current folder:
cd
echo.

git status --short
if errorlevel 1 goto done

git status --porcelain > "%TEMP%\upload-to-github-status.txt"
for %%A in ("%TEMP%\upload-to-github-status.txt") do set "statusSize=%%~zA"
del "%TEMP%\upload-to-github-status.txt" >nul 2>&1

if "%statusSize%"=="0" (
    echo No changes to upload.
    goto done
)

git add .
if errorlevel 1 goto done

git commit -m "Auto upload"
if errorlevel 1 goto done

git push -u origin main
if errorlevel 1 goto done

echo.
echo Upload complete.

:done
echo.
echo Press any key to close this window.
pause >nul
