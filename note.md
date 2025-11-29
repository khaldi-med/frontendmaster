## Node course notes

- What is the core difference between browser JavaScript and Node.js JavaScript?
    - `ans: Browser JavaScript has access to browser-specific features like DOM and CSS, while Node.js JavaScript runs on a computer without visual output and focuses on system-level operations`

- What is the global object in a browser environment?
    - `ans: Window object, where many global methods and properties are attache`

- What does REPL stand for in the context of Node.js?
    - `ans: Read, Evaluate, Print, Loop - an interactive environment for writing and testing JavaScript code inline`
   
* What is the process global in Node.js and what does it provide access to?
    - `ans:  The process global provides access to information and methods related to the operating system where the code is running, such as computer name, running programs, and environment-specific details, allowing Node.js applications to be dynamic across different computers and environments. `

* What is the purpose of the NODE_ENV environment variable?
    - `The NODE_ENV variable is used to switch the application mode between development, production, and testing, allowing developers to conditionally enable or disable features like logging, authentication, analytics, and performance optimizations based on the current environment.`

* How are environment variables typically managed and shared across a team?
    - `Environment variables can be managed through methods like using password managers, encrypted vaults, creating individual database users with separate credentials, using DevOps platforms like AWS, or using specialized apps that securely distribute environment variables across a team.`

* What is an IIFE and what is its primary purpose in JavaScript?
    `An Immediately Invoked Function Expression (IIFE) is a function that encapsulates code in its own scope, isolating it from the global space and preventing interference from other scripts.`

* What are the three types of modules in Node.js?
`The three types of modules in Node.js are: 1) Internal modules (like http, file system), 2) User-created modules (pieces of code created by the developer), and 3) Third-party modules (modules created by others and downloaded)`

* What is the key difference between setting up ES6 modules versus CommonJS modules in Node.js?
    `In Node.js, to use ES6 modules, you need to add a 'type' field with the value 'module' in the package.json file, which enables import/export statements instead of using require()`

* What is the difference between a named export and a default export in JavaScript modules?
    `A named export must be imported using its original name with curly braces, while a default export can be imported with any name and does not require curly braces`

* What is the difference between importing a local module versus a core Node.js module?
    `Local modules require a path (starting with './' or '../'), while core Node.js modules can be imported by their name directly`
  
* What does the 'fs' module in Node.js stand for and what can it do?
    `FS stands for file system. It allows performing file-related operations like reading, writing, and manipulating files programmatically, essentially replicating most file interactions a human can do on a computer.`

* What is the purpose of the 'http' module in Node.js?
    `The 'http' module helps with networking in Node.js, positioned just above TCP level. It can be used to create servers, send responses like JSON, images, or files.`

* What is the purpose of the package-lock.json file?
    `The package-lock.json file locks in the exact versions of installed dependencies, ensuring that the same versions are used across different machines and team members.`

* What is the purpose of converting a callback-based function to a Promise?
    `To allow easier chaining of asynchronous operations, keeping callback depth to one level and making the code more readable and manageable`
  
*  What are the requirements for using await in a function?
    `The function must be marked as async, and the value being awaited must return a Promise`

* What does JSON.stringify() do when saving a database file?
    `JSON.stringify() converts a JavaScript object into a JSON string, which can then be written to a file. When additional arguments like 2 are used, it formats the JSON with indentation for readability`

* Why can't fs.appendFile() be used directly for adding JSON data?
    `appendFile() doesn't understand JSON structure and would simply add data to the bottom of the file, which would break the JSON format and make parsing impossible`

* What is the purpose of using file system methods with promises in Node.js?
    `Using file system methods with promises allows for asynchronous file operations that are non-blocking, making file reading and writing more efficient`

* What is an ORM in the context of database interactions?
    `An ORM (Object-Relational Mapping) is like an SDK for databases that provides an abstraction layer, allowing developers to interact with databases without writing raw SQL or low-level database commands`

*  What is the purpose of mocking in unit testing?   
    `Mocking allows replacing a function or dependency with a stub or alternative version, typically a function that does nothing, to isolate the unit being tested and avoid testing external dependencies like databases or complex functions.`
 
 * What is a 'spy' in testing context?
    `A spy is a function that tracks and records its interactions, such as how many times it was called, what arguments it received, and who called it, enabling detailed test expectations about function behavior.`

* Why are dynamic imports used in testing with ESM modules?
    `Dynamic imports (using import as a function with await) are necessary to mock modules before importing them, which is required in the new ESM syntax to ensure mocking works correctly before module loading.`

*     
