# HTML & CSS

## Table of Contents

# Creating Feature Branches
# Step 1: Start with the main/master branch
* Switch the repo to the __main/master__ branch
* Fetch the latest changes from the remote repo
* Pull the latest changes from the remote master branch and update your local master branch.

    ```sh
        # switch the repo to the main branch
        git checkout master
        # fetch the latest changes from the remore repo - without modifyinh the local master branch
        git fetch origin
        # fetches the latest changes from the remote master branch and then merges those changes into your local master branch.
        # This preserves any local changes that you may have made, and attempts to merge them with the changes from the remote branch.
        git pull origin master
    ```

# Step 2: Create New Branches
* Use a separate branch for each feature or issue you work on. After creating a branch, check it out locally so that any changes you make will be on that branch.

    ```sh
        git checkout -b feature-rwd 
        git checkout -b features-html5
        git checkout -b features-css3
        git checkout -b feature-tailwind-css
        git checkout -b feature-bs5
    ```

# Step 3: Update, add, commit, and push changes
* On this branch, edit, stage, and commit changes in the usual fashion, building up the feature with as many commits as necessary. Work on the feature and make commits like you would any time you use Git.

    ```sh
        git status
        git add <some files>
        git commit
    ```

# Step 4: Push feature branch to remote
* Use the following commands to push any new branch to remote repo named "__origin__"

    ```sh
        git push origin html5
        git push origin css3
    ```

# Step 5: Merge feature branches to main
```sh
    git checkout main
    git pull
    git pull origin html5
    git push
```

# Step 6: Delete a Feature Branch
```sh
    # checkout of the feature branch
    git checkout html5
    # delete the local branch
    git branch -d html5
    # delete remote branch
    git push origin --delete html5
    # verify the branch has been deleted
    git branch -a
```


# Best Color Websites for Front-End Developers
1. [Color Hunt](https://colorhunt.co/)
2. [Grabient](https://www.grabient.com/)
3. [Gradient Hunt](https://gradienthunt.com/)
4. [ColorKit](https://colorkit.co/palette/809bce-95b8d1-b8e0d4-d6eadf-eac4d5/)
5. [Khroma](https://www.khroma.co/train)

# Platforms Used to Know Frameworks Webiste is built on
* [Wappalyzer](https://www.wappalyzer.com/) - Find out the technology stack of any website. Create lists of websites that use certain technologies, with company and contact details. Use our tools for lead generation, market analysis and competitor research.

* [BuiltWith - Web Technology Profiler](https://builtwith.com/): Enter the website there, frameworks, technologies, ad-platforms everything will be displayed.

# HTML Boilerplates in VSCode
* Type '__html5-boilerplate__' in the HTML file and select the snippet from the auto suggestion dropdown