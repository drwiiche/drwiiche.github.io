# Developer Deployment Guide

This guide outlines step-by-step instructions on how to update, add, commit, and deploy changes to your portfolio and resume website on GitHub Pages.

---

## 📂 Project Structure Overview

*   **`index.html` (Root):** The main interactive homepage dashboard. If you want to change titles, CV summaries, or project cards displayed on the homepage, edit this file.
*   **`assets/css/portfolio.css` & `assets/js/portfolio.js`:** Stylesheet and JavaScript interactivity files for the homepage dashboard.
*   **`_pages/cv.md`:** Markdown CV page content (education, experience, skills lists) displayed at `https://drwiiche.github.io/cv/`.
*   **`_pages/about.md`:** Standard Jekyll about page.
*   **`_portfolio/`:** Directory containing markdown project entries. Any file created here will automatically display on the Jekyll portfolio listings page.

---

## ✏️ Step 1: Making Changes

### A. Editing an Existing Page or File
Simply open the file (e.g. `_pages/cv.md` or `index.html`) in your text editor, make your adjustments, and save.

### B. Adding a New Portfolio Project
1. Navigate to the `_portfolio/` directory.
2. Create a new markdown file named with a number prefix (e.g., `15-new-model.md`).
3. Add the required front matter blocks at the top of the file:
   ```yaml
   ---
   title: "Your Project Title"
   excerpt: "A brief 1-2 sentence description of the project.<br/><img src='/images/optional-teaser.png' width='100'>"
   collection: portfolio
   ---
   ```
4. Write your detailed project description in Markdown below the front matter. Save the file.

---

## 🛠️ Step 2: Staging and Committing Changes

Open your terminal or command prompt inside the project folder (`c:\wamp64\www\brahimelmouden.com\`) and run:

1.  **Check Modified Files:**
    ```bash
    git status
    ```
    This shows which files you edited or created.

2.  **Stage Your Changes:**
    *   To stage all changes:
        ```bash
        git add -A
        ```
    *   To stage only specific files:
        ```bash
        git add _pages/cv.md
        ```

3.  **Create a Commit:**
    Write a clear description of what you changed:
    ```bash
    git commit -m "feat: add new machine learning classification model to portfolio"
    ```

---

## 🚀 Step 3: Pushing and Deploying to GitHub

GitHub requires a **Personal Access Token (PAT)** classic token (which starts with `ghp_`) instead of your password. 

To push your changes securely without saving your token on your computer:

1.  **Push Directly with Token:**
    Replace `<YOUR_TOKEN>` with your GitHub Classic Token (e.g., your `ghp_...` token):
    ```bash
    git push https://drwiiche:<YOUR_TOKEN>@github.com/drwiiche/drwiiche.github.io.git master
    ```
    *(This is the safest method as it does not modify your local Git repository configuration file.)*

2.  **Alternatively (Using Remote Configuration URL):**
    If the command above is too long, you can temporarily update your origin remote to push:
    ```bash
    # 1. Update the remote URL with your token
    git remote set-url origin https://drwiiche:<YOUR_TOKEN>@github.com/drwiiche/drwiiche.github.io.git

    # 2. Push the files to GitHub
    git push origin master

    # 3. Restore the clean URL immediately for safety (hides your token)
    git remote set-url origin https://github.com/drwiiche/drwiiche.github.io.git
    ```

---

## ⏱️ Step 4: Verification

Once Git displays success, GitHub Actions will compile your site. After 1 to 2 minutes, verify your updates are live by reloading your browser at:
👉 **[https://drwiiche.github.io/](https://drwiiche.github.io/)**
