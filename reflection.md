## How did array methods like push() and filter() help you manipulate data in this activity?
 - push() function helped to add an item to the end of the array. 
 - filter() function helped to filter the items in an array based on te searchitem, and returned the new array with the search results.
## What challenges did you face when trying to filter and search for items in the array?
 - Did not face any challenges with the filter, as I read the MDN doc before start doing the code for search Item in an array.
## How would you modify this code to make it more efficient or user-friendly?
 - I would list of available items to purchase by having a default items in an array rather than textbox and
 - Enhance the UI look and feel with seperate container for each activity.
 - I would change the logic to display the item list after addItem and removeItem,
    - currently , I create each and every list(<li>) element, though the item is already present in the UI
    - To improve the efficiency, need to create a list element only for the newly added item, instead of refreshig the entire <ul> items.