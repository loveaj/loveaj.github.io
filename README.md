# loveaj.github.io and loveaj.io
Personal website using GitHub Pages

## GitHub Pages site summary
This GitHub project is a user site as determined by the project name `loveaj.github.io`.  
GitHub Pages make use of Jekyll.  
Changes pushed to the remote master (GitHub) trigger a Jekyll build on GitHub. The generated files are moved over to the GitHub Pages server farm automatically.  

The site does not really make use of much Jekyll functionality. If it turns into more of a blog site then maybe ...  

For GitHub Pages docs see: `https://pages.github.com/`  
For Jekyll docs see: `https://jekyllrb.com/`  
The single page functionality is provided by `fullPage.js`, see: `https://alvarotrigo.com/fullPage/`  
Styling uses the utility-first CSS framework `tailwindcss`, see: `https://tailwindcss.com/`

## TO-DO

1. **Extract CSS components** - There is a fair bit of common styling across sections so these could be extracted out to give cleaner markup.
2. **Responsive design** - Add different looks and text sizes for different media breakpoints.
3. **Make more use of Jekyll** - Maybe some of the text could be moved to markdown files, etc.

## Workflow

### Develop
VSCode IDE  
GitHub project `loveaj.github.io`

### Local build JS and CSS - Webpack
`npm run dev`  
or
`npm run prod`  

### Local build static pages - Jekyll
`bundle jekyll build`  

### Local run local webserver - Jekyll
`bundle jekyll serve`  

### Deploy live
Commit all staged changes to GitHub  
`git commit -am "commit message"`  

Note that the local Jekyll build output in directory `_site` is not under source control, see `.gitignore`.

GitHub will receive the commit and automatically run a `jekyll build`. The static file output is automatically deployed to the GitHub Pages live server farm.