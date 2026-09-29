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
    echo No file changes to commit.
    goto push
)

git add .
if errorlevel 1 goto done

git commit -m "Auto upload"
if errorlevel 1 goto done

:push
echo.
echo Pushing commits to GitHub...
git push -u origin main
if errorlevel 1 goto push_failed

echo.
echo Upload complete.
goto done

:push_failed
echo.
echo GitHub upload failed.
echo If GitHub asks for a username, enter: Emilia3213
echo If GitHub asks for a password, enter a GitHub Personal Access Token, not your Google password.
echo You may also need to sign in through the browser window opened by Git Credential Manager.

:done
echo.
echo Press any key to close this window.
pause >nul
