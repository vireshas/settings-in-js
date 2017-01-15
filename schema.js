/*

1. READ from schemas dir and show them on left nav
   name of the file is the scope. (media, device etc)

   UI to edit schema.

2. for every scope show settings in right hand side

---------------
|___|         |
|___|         |
|   |         |
---------------

*/

/*

  (+) add more entries
  (x) delete setting

  map<string: string>
  [-------] : [-------] (x)
  [-------] : [-------] (x)
  [-------] : [-------] (x)
  (+)
  [SAVE] [CANCEL]


  array<string>
  [------] (x)
  [------] (x)
  (+)
  [SAVE] [CANCEL]


  map<string: map<string: string>>
  [-------]:
      [-------]:[-------]
      [-------]:[-------]
      [-------]:[-------]
      (+)
  [-------]:
      [-------]:[-------]
      [-------]:[-------]
      (+)
  (+)
  [SAVE] [CANCEL]


  map<string: array<string>>
  [-------]:
      [-------]
      [-------]
      [-------]
      (+)
  [-------]:
      [-------]
      [-------]
      (+)
  (+)
  [SAVE] [CANCEL]

*/
