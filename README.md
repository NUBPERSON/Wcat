# Wcat
It is used to display or make a copy content of one or more files in the terminal as well as we copy the files content in another files . 



General Syntax:

node wcat.js [options] [filepaths]

option to remove big line break (-rel)

option to add line number to non empty lines (-sn)

option to add line numbers to all lines (-s) 

Commands:
1- node index.js filepath => displays content of the file in the terminal 

2- node index.js filepath1 filepath2 filepath3... => displays content of all files in the terminal in (contactinated form) in the given order.

3- node index.js -rel filepath => convert big line breaks into a singular line break

4- node index.js -s filepath => give numbering to all the lines 

5- node index.js -sn filepath => give numbering to non-empty lines

6- node index.js -rsc filepath %"char to be removed" =>removes the special char from the file

7- node index.js filename -rs =>remove spaces

8- node index.js. filename -rsc =>remove line

7-We can mix and match the options and can be written in any order.

8-Create a new file which content the data of other files (cpy).
