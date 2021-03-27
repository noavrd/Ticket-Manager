# ![Scale-Up Velocity](./readme-files/logo-main.png) Final 2/5 - Ticket Manager

## Ticket Manager
In this site you can watch all the tickets that added, mark them as hide, set them as done / undone and search according to a title 

## Bonus

1. Add see more / see less in every ticket comment
2. Add an option to mark ticket as done / undone nand save it in Mongo

## Submitting

1. Deploy your app to heroku:

   - Open the terminal and type `heroku create YOUR_APP_NAME --buildpack heroku/nodejs` (If the name is taken, try another...)
   - When the app is created type `heroku git:remote -a YOUR_APP_NAME`
   - Go to your [heroku dashboard](https://dashboard.heroku.com/apps) and click your new app. Go to `settings` > `Reveal Config Vars` > add your `MONGO_URI` like you did in `.env`
   - Make sure all your work is committed and pushed to origin
   - Run `git push heroku dev:main`
   - That's it 🥳

   Whenever you want to re-deploy, run `git push heroku dev:main` again

1. Add a link to your deployed app to `README.md`
1. Open a PR from your work branch to the unchanged main branch (**and leave it open!**)
1. Invite `Cyber4sPopo` as a [collaborator](https://docs.github.com/en/github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository) to your repo 👮
1. Make sure [Issues](https://www.youtube.com/watch?v=vTULg-7xycs) are enabled in your repo

## Grading policy

- Your project will be graded by the number of automatic tests you pass
- Visual creativity, use css to make this app look awesome 💅🏿
- Code quality: Variable naming, meaningful comments, logic separation into functions
- Git usage: commit messages, and overall git usage flow
