# city-aqi

### Objective | What does the project work to achieve ?
- Pull real-time AQI Data of cities.
- To show data into tabular format.
- To show charts through Visualization library like Highcharts.js.
- To Show most recent data of Metropolitan cities.


### Business Case | What is the Problem being solved ?
- Getting real-time updates can increase user stickability and interaction.
- Tabular and Graphical Visualization can impact users who might want to compare different cities.

### Assumptions
- Data is being received in intervals of 2 seconds.
- Only 12 Indian cities are being pulled as AQI Data.


### Tech Stack
- [Vue.js](https://vuejs.org/) as Frontend Framework
- [Vuex](https://vuex.vuejs.org/) for global State Management
- [Element-ui](https://element.eleme.io/#/en-US) for enhancing UI and pre-built components
- [Highcharts.js](https://www.highcharts.com/) for Visualizing Data into chart, specifically Highchart stock.
- [Web worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) for offloading expensive work of the main thread.
- [Web socket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) to Pull Real time data.
- [AWS](https://aws.amazon.com/) S3 as origin and AWS Cloudfront as content delivery network


### Features Built (~ 10-12 hrs)
- **Metro cities AQI Overview Component**: Provides Quick look into live Data
- **Tabular AQI Data View**: Provides Most Recent Data i.e Filterable by category and Sortable by AQI
- **City AQI Comparsion View**: Provides Comparsion of Historical Data Injected into graph (no limit on cities selection)
- **Word Cloud View**: Provides Most recent City AQI Data into word cloud where each word will carry weight according to its AQI value
- **Responsive Design and Layout design**: Used Grids and flex to make it Highly responsive, works well in md to xl, can be used in sm too with few limitations.

## R&D and Optimizations (~ 7-8 hrs)
- Preloaded link tags
- Avoided inline styles
- Used Hash map to insert into array for O(1) Insertion
- Avoided cloneDeep from lodash where it should have been, instead used Object.assign() for objects and 
  spread Operators for shallow copying for State Mutation.
- Used Computed Properties from Vue Component Instead of getter methods as they cache values based on their Reactive Dependencies.
- Optimised/̧Compressed Image assets using [imagemin](https://www.npmjs.com/package/imagemin) and [webp images](https://developers.google.com/speed/webp/docs/using) ( 250KB-450KB to 4-8 KB)
- Using Web Worker to Reduce Blocking time to ~0ms.
- Reduce Layout Shifts to bare minimum using optimized re-rendering of components using preloading of Default view into component.

## Lighthouse Optimization Results
![Result 1](/public/img/lighthouse-result-1.png)
![Result 2](/public/img/lighthouse-result-2.png)
For more details [goto](https://tinyurl.com/optimzation) 

### HLD
![High Level Design](/public/img/city-aqi.png)

### App Demo
http://doy1mph2r05fp.cloudfront.net/


### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
