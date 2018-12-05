# Who's On What?

## This web app allows users to search for a celebrity's name and movie details via image upload.

### Getting Started

1. Install dependencies
```
cd Whos-On-What
npm install
```
2. Create File For Environmental Variables
```
touch .env.development
cd .env.development
```
3. Add Development API Keys To `.env.development`
```
GATSBY_CLARIFAI_API_KEY=[YOUR-API-KEY]
GATSBY_MOVIE_DB_API_KEY=[YOUR-API-KEY]
```
4. Run The App
```
gatsby develop
```