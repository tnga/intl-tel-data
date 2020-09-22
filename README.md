<h1 align="center">International Telephone Data</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/tnga/intl-tel-data?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/tnga/intl-tel-data?color=56BEB8">


  <img alt="License" src="https://img.shields.io/github/license/tnga/intl-tel-data?color=56BEB8">

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/tnga/intl-tel-data?color=56BEB8" /> -->


  <!-- <img alt="Github stars" src="https://img.shields.io/github/stars/tnga/intl-tel-data?color=56BEB8" /> -->
</p>

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#customs-contribute">Contribute</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0;
</p>

<br>

## :dart: About ##

A JavaScript tiny library for ISO 3166 data of international telephone numbers.

## :sparkles: Features ##

:heavy_check_mark: Country common and native name;\
:heavy_check_mark: Country ISO-3166-1-alpha2 code format;\
:heavy_check_mark: Country dial code;\
:heavy_check_mark: Country priority status;\
:heavy_check_mark: Country area code;

## :rocket: Technologies ##

The following tools were used in this project:

- [Node.js](https://nodejs.org/en/)
- [Gulp](https://gulpjs.com/)
- [Rollup](https://rollupjs.org/)

## :white_check_mark: Requirements ##

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

## :checkered_flag: Starting ##

```bash
# Install this module
npm install intl-tel-data --save
```
```js
// Usage sample
import intlTelData from 'intl-tel-data'
for (const country of intlTelData) { 
    if (country.iso2 == "cm") {
        console.log(`Hello ${country.name}`)
        // see country properties with this log example
        console.log(country)
    } 
}
```

## :customs: Contribute ##

```bash
# Clone this project
$ git clone https://github.com/tnga/intl-tel-data.git

# Access
$ cd intl-tel-data

# Install dependencies
$ npm i

# Build the project
$ npm run build
```

## :memo: License ##

This project is under license from MIT. For more details, see the [LICENSE](LICENSE) file.

&#xa0;

<a href="#top">Back to top</a>
