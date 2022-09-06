# Getting Started with inteliver-react

This repository is [Inteliver](https://www.inteliver.com)'s official SDK for react framework. Using this SDK you can integrate your react project with inteliver image management service.

Inteliver is an Image Management as a Service.

Optimize, modify and apply A.I. on your images easily and deliver tailored data on-the-fly.

## Installation

This inteliver sdk is available for both npm and yarn package managers.

To install the sdk in your react project simply run the following:

using **npm**:

`npm install inteliver-react`

using **yarn**:

`yarn add inteliver-react`

## Getting Started

To get started quickly after installing the package, first import **InteliverProvider** in your `index.js` or `index.ts` file and wrap your **<App />** with **InteliverProvider** as shown below.

`import { InteliverProvider } from 'inteliver-react/lib';`

`<InteliverProvider inteliverConfigs={{ cloudname: 'your-cloudname' }} > <App /> </InteliverProvider>`

You are all set and you can use inteliver smart image tag now.

## Using Image Component

Anywhere that you have an image you can import our smart image tag and use it instead. Just import our Image component.

The only required props for `<Image />` componenet is image **src** url and image **alt**.

`import { Image } from 'inteliver-react/lib';`

`<Image src="https://your-awsome-website/unoptimized-image.jpg" alt="Optimized Using Inteliver"/>`

This is an unoptimized image but using inteliver smart image tag it will automatically served with optimized sizes and best compression format.

We support all the standard html attributes for `<img />` tag as our `<Image />` component.

## Configs

This react sdk uses [React Contexts](https://reactjs.org/docs/context.html) to provide configs.

**InteliverProvider** is a react `Context.Provider` that helps to set your global settings such as your cloudname.

The only required config is your **cloudname**. You can [signup](https://panel.inteliver.com/signup) at inteliver and get your cloudname.
