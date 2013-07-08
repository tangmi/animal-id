# animal-id

generates easily recognizable ids for logs and such.

## How to use

`npm install animal-id`

`var animal = require('animal-id');`

then:

```javascript
// generate an adjective-animal pair
animal.getId(); // angry-buzzard
// ...with a prefix
animal.getId('animal'); // animal-angry-buzzard
// ...with a UUID tacked on the end
animal.getUuid(); // angry-buzzard-198fb2de-8ec7-4cf2-be5c-2446628c9ef
// ...or with a prefix and a UUID suffix
animal.getUuid('animal'); // animal-angry-buzzard-198fb2de-8ec7-4cf2-be5c-2446628c9ef

// or use your own adjectives/animals/separating strings
animal.useAnimals(['buzzard', 'human']);
animal.useAdjectives(['happy', 'angry']);
animal.useSeparator('_'); // use an underscore instead
```

Pretty blatantly uses the excellent [node-uuid](https://github.com/broofa/node-uuid) for uuid generation.