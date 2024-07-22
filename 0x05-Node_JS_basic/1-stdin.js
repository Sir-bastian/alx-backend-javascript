/**
 *Program called 1-stdin that will be executed through
 *  command line
 *It should display the message "Welcome to Holberton
 *  school, what is your name?"
 *The user should be able to input their name on a new line
 *Then display "Your name is: INPUT
 *
 *When the user ends the program, it should display - "This
 *  important software is now closing" followed by new  line
 *
*/

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();

  if (chunk) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
