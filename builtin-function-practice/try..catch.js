/* 
 * The try statement consists of a try block, which contains one or more statements.   {} must always be used, also for single statements. At least one catch clause, or a finally clause, must be present.
  */

/* 
 * Unconditional catch clause
 * When a single, unconditional catch clause is used, the catch block is entered when any exception is thrown. For example, when the exception occurs in the following code, control transfers to the catch clause.
  */

 try {
  throw 'myException'; // generates an exception
}
catch (e) {
  // statements to handle any exceptions
  logMyErrors(e); // pass exception object to error handler
}

/* 
 * The catch block specifies an identifier (e in the example above) that holds the value specified by the throw statement. The catch block is unique in that JavaScript creates this identifier when the catch block is entered and it adds it to the current scope; the identifier lasts only for the duration of the catch block; after the catch block finishes executing, the identifier is no longer available.
*/

/* 
 * The finally clause
 * The finally clause contains statements to execute after the try block and catch clause(s) execute, but before the statements following the try..catch..finally block. Note that the finally clause executes regardless of whether an exception is thrown. Also, if an exception is thrown, the statements in the finally clause execute even if no catch clause handles the exception.

 * You can use the finally clause to make your script fail gracefully when an exception occurs; for example, to do general cleanup, you may need to release a resource that your script has tied up.

 * It may seem strange to have a special exception-related clause that executes regardless of whether there is an exception, but this construct actually does serve a purpose. The important point is not that the finally-clause always executes, but rather that ordinary code following a try..catch does not.

 * For instance, if another exception occurs inside a try's catch-block,  any remaining code in the same outer try-block enclosing that try..catch (or in the main flow, if not in an outer try-block) , will not get executed, since control is immediately transferred to the outer try's catch-block (or the internal error-generator, if not in a try-block).

 * Thus, any routine cleanup code done in that enclosed (or the main) section before it exits, will be skipped. However, If the try-block has a finally-block, then that finally-block code will be executed first to permit any such cleanup, and THEN the other try's catch-block (or the error-generator) will get control to handle the second exception.

 * Now, if that routine cleanup must be done whether or not the try..catch code succeeds, then if the finally-block only executed after an exception, the same cleanup code would have to be duplicated both inside and outside the finally-block, and therefore there is no reason not to have just the finally-block alone, and let it execute regardless of exceptions or not.

 * The following example opens a file and then executes statements that use the file (server-side JavaScript allows you to access files). If an exception is thrown while the file is open, the finally clause closes the file before the script fails. The code in finally also executes upon explicitly returning from try or catch block.
*/

// openMyFile();
// try {
//    // tie up a resource
//    writeMyFile(theData);
// }
// finally {
//    closeMyFile(); // always close the resource
// }

try {
  try {
    throw new Error('oops');
  }
  catch (ex) {
    console.error('inner', ex.message);
    throw ex;
  }
  finally {
    console.log('finally');
  }
}
catch (ex) {
  console.error('outer', ex.message);
}

// Output:
// "inner" "oops"
// "finally"
// "outer" "oops"
/* 
 * Any given exception will be caught only once by the nearest enclosing catch-block unless it is re-thrown. Of course, any new exceptions raised in the "inner" block (because the code in catch-block may do something that throws), will be caught by the "outer" block.
*/

/* 
 * Returning from a finally block
 * If the finally block returns a value, this value becomes the return value of the entire try-catch-finally production, regardless of any return statements in the try and catch blocks. This includes exceptions thrown inside of the catch block:
*/

(function() {
  try {
    try {
      throw new Error('oops');
    }
    catch (ex) {
      console.error('inner', ex.message);
      throw ex;
    }
    finally {
      console.log('finally');
      return;
    }
  }
  catch (ex) {
    console.error('outer', ex.message);
  }
})();

// Output:
// "inner" "oops"
// "finally"
