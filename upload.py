import subprocess
import shutil
import os


if __name__ == "__main__":
    # Change to the master branch
    print("Changing to the master branch...")
    subprocess.call(["git", "checkout", "master"], shell=True)

    # Build the site
    print("Building the files...")
    subprocess.call(["npm", "run", "prod"], shell=True)

    # Change to the GitHub Pages branch
    print("Checking out the GitHub Pages branch...")
    subprocess.call(["git", "checkout", "gh-pages"], shell=True)

    # Move the files out of dist/
    print("Moving the files...")
    files = os.listdir("dist")
    for f in files:
        shutil.move("dist/" + f, f)

    subprocess.call(["git", "add", "."], shell=True)

    # Commit the built files
    print("Commiting the files...")
    subprocess.call(["git", "commit", "-a", "-m", "Rebuilt site"], shell=True)

    # Delete the built files
    print("Deleting the files...")
    for f in files:
        os.remove(f)

    # Change to the master branch
    print("Changing back to the master branch...")
    subprocess.call(["git", "checkout", "master"], shell=True)

    print("Finished uploading the site")
