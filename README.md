Demo NextJS app deployed on App platform. This NextJS front end is connected to Strapi CMS.
The Home page http://localhost:3000/ will display the list of users. 

If the contents in the backend changes. That is if we add additional users. The page will automatically regenerate the page and render it with updated contents using ISR.

https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration

The problem with App platform is the pages do not get updated when on demand revalidation is used

https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration#using-on-demand-revalidation

To Develop locally and see the changes you can run npm run dev. 

On production the build command would be npm run build and run command is npm run start.

I have also a Dockerfile which can used to deploy to App platform using Dockerfile.