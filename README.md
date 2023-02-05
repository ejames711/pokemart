This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Live Demo

https://pokemart-two.vercel.app/

## What is this?

I created this project as an example for an E-Commerce layout with functionality.

Technologies used:
Next.JS
Redux
Supabase/PostgreSQL
Vercel
Axios
Nodemailer
TailwindCSS

It uses Next for the front end to dynamically populate the item cards. 
The item info modals are populated with data from the PokeAPI that is called using Axios. 
Redux is used to have a single source of truth for the cart state while transferring between pages. 
The Nodemailer API is called using Next API routes to send the user a mock reciept to theri email at checkout.
I later added Supabase that uses PostreSQL in order to add the ability to create and update users, as well as user authentication.
The live demo was deployed with Vercel.
TailwindCSS was used for styling and Framer Motion library for animations.
The original design and layout was created in Figma. 

## How to use
Navigate to store section of the page and add items to cart with the "Add Item" button. Item quantity can be increased and decreased as well as removed in the cart component located in the navbar.
More item info can be viewed by clicking "Learn More" which will populate a modal with the PokeAPI info pertaining to that item.
You can navigate to the checkout page by clicking the "Checkout" button in the cart.
The mock receipt will be sent to whatever email address is input to the form along with the address and name info.
Sign in/ Sign up is also located in the navbar and will bring the user to a seperate sign in page. The user can create an account or sign in and update an existing account once authenticated by the form.