#Leaflet Next.JS Example

This repository consists of both a basic and styled implemetation of Leaflet in a NEXT.JS enviroment using App Router.

-In the basic version, you'll find the map working in its simplest form, with no clusters, no custom icon for the markers, etc.

-In the styled version althought, we have clusters, map skins (from [Stadia](https://stadiamaps.com/) and [Jawg](https://www.jawg.io/)) and custom icon for both markers and clusters.
**ATTENTION:** for the [Jawg](https://www.jawg.io/) styles to work, you have to register in their website and get a token. I've created an import for the token (use exemple provided in the project as reference), but it's import and use is commented out in the Map component.

Here's a [Codesandbox](https://codesandbox.io/p/github/gabriel-m-pereira/leaftlet-nextjs-example/main) of the project (there's a option to swtich on the top.

#How to run locaclly

1. Clone this project locally
2. Run `pnpm install`
3. Run `pnpm dev`

#Dependencies

##Basic

-Tailwind
-Typescript
-Turbo
-Leaflet
-React-Leaflet
-@types/leaflet

##Styled

-Tailwind
-Typescript
-Turbo
-Leaflet
-React Leaflet
-React Leaflet Clusters
-@types/leaflet
-@types/leaflet.markercluster

I've also used [shadcn's](https://ui.shadcn.com/) button, so its dependencies also apply.
