# TossIt - Waste Analytics Software
Source code for Toss It Waste Analytics Software

*File popup is not recorded

https://user-images.githubusercontent.com/67121244/167263145-62d1ecbb-d913-4aa8-85a0-bc55cf39aa13.mp4


## Problem:

A lot of industrial/commercial kitchens have an inventory management issue (especially if they are a local and small business. A lot of food gets wasted sometimes, wheras there is a shortage of food/inventory during other times. It is hard to keep track of which items need to be purchased or should be purchased less of because there are a lot of higher priority items. 

Personally, the cafe that my parents own faces these issues. In certain weeks, my dad makes several costco trips whereas in other weeks, he makes none! This problem could be hired if there was data that could give you insights into how to optimize your business.

Sure you can hire someone for that, but why not use technology? 

Another problem is that waste analytics usually occurs at the industrial waste management level. If households were given data and analytics into their individual waste, households could be incentivized to reduce their waste through a rewards system sponsored by the municipality. However, this requires waste hodata at the household level. In order to track the waste, our solution could be implemented.

- You might be wondering what is stopping households from not using the system and making it seem like they are getting rid of less waste?
- To that point I would say, good question lol...still gotta figure out the logistics

## Proposed Solution:

Creating a waste management system that collects data and provides real-time data/insights into your waste disposal. 

### How will it work?

Creating a very cheap sensor that captures an image of the item you are throwing away.

This image is then fed into ML models to identify key pieces of information:

- Whether the item is recyclable, non-recyclable, or organic
- A specific label classifying the material of the item (paper, cardboard, plastic bottle, aluminum foil etc...)
- An approximate size of the item

The system then advises you on which bin the item should be thrown away in.

This data is then processed and showcased on a dashboard accessible through the web and on the app. 

The app also lets you take a picture instead of a sensor. This data won’t be fed into the system, it is only a means of figuring out which bin the item belongs to! 

### Features of the dashboard:

1) A pie chart showcasing the most common items you throw away

1.1) Also a list view with quantity

2) A line graph indicating waste per day/week/month of recyclable, non-recyclable and organic items

3) A dollar value of perishable items being thrown away/wasted (expired food and leftovers?) This would definitely be a premium feature

4) An option to view all the pictures being clicked by the sensor

5) A calculated carbon-footprint of your waste

6) Percentage of increased/descreased waste daily/weekly/monthly (just a diff view from number 2)

## Project Plan:

1) Creating and training machine learning model to predict what the item is (catagorize list of 50-100 most common things people throw away). 
- Find model at https://colab.research.google.com/drive/1lKhuDRrNifkCcQJYwR6jhOxjfU-8rV1z?usp=sharing
- Find data at https://www.kaggle.com/datasets/vyomkapadia/tossit

2) Assign recyclable, organic or non-recyclable labels to each of the categories from above. 

3) The app lets you take a picture, and tells you which bin the item should go into

4) Everytime you scan an item, it also updates data in the dashboard and associated app

## Future:

- Creating the hardware component (sensor) that captures the images
- Recognizing multiple items in one image (people like to throw away things simoultaneously 😅)
- Maybe a way for individuals to see their own carbon footprint (perhaps they scan the item using an app before throwing it away)
- The app gives you information on nearest recycling/dumping facilities and donation centers?
    - It would also tell you ways to sell or reuse the item. Essentially giving you a list of all the possible things you can do with the item.
