# Portfolio
## Version: 1.0

-   This personal portfolio was created to show my projects.

## Live website: [https://fabiodearaujo.com](https://fabiodearaujo.com)



<p style="text-align:center;"><img src="https://fabiodearaujo.com/readmeassets/portfolio_showcase.png"></p>

    
## Features

-   Responsive with layout modification to attend better 

-   Interactive elements

-   SVG integration.


## Technologies Used


### Languages, Frameworks, Tools and Programs Used:

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
-   [React](https://reactjs.org/)
-   [Next.js](https://nextjs.org/)
-   [Tailwind CSS](https://tailwindui.com/)
-   [Git](https://git-scm.com/)
-   [GitHub](https://github.com/)
-   [GitHub Actions](https://docs.github.com/en/actions)
-   [AWS](https://aws.amazon.com/)
-   [Affinity Designer](https://affinity.serif.com/en-gb/designer/)
-   [Affinity Photo](https://affinity.serif.com/en-gb/photo/)
-   [Visual Studio Code](https://code.visualstudio.com/)
-   [Am I Responsive](https://ui.dev/amiresponsive)


## Running the project locally

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/fabioaraujo76/sophie-photography-mp4)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/fabiodearaujo/portfolio)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

### Running locally

8. To run the application, it is necessary to install [Node JS](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/)

First, install the dependencies by calling yarn: 

```bash
$ yarn
```

then run the development server:

```bash
yarn run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Deployment

### Github/AWS S3 Bucket

The project was deployed to AWS using a GitHub Actions CI/CD pipeline that was set to build the Next.js app and deploy to AWS S3.
PS.: Provisioning of AWS resources were done manually.

1. Create a AWS S3 Bucket as public.
2. Activate S3 Static Website Hosting on Properties Tab.
3. Include the bucket policy on Permissions Tab:
```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME/*"
        }
    ]
}
```
4. Create a AWS Key access include on GitHub Secrets:
  - AWS_ACCESS_KEY_ID
  - AWS_SECRET_ACCESS_KEY
5. Create the CI/CD pipeline pointing to the AWS S3 Bucket.



## Credits

-   [Pexels](https://www.pexels.com) and the photographer that made photo royalty free.
    -   [Pic Jumbo](https://www.pexels.com/@picjumbo-com-55570/)
