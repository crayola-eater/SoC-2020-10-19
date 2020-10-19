# Make your own CodeWars

You've spent the past few weeks solving katas on CodeWars, and you might think that they're written by an elite cabal of software geniuses (or not if you've run across a few less-than-stellar katas!). Not so! They're written by ordinary programmers, and you're now officially School of Code-qualified to join in and give writing your own a try.

### Step 1: Write your kata

Think of your scenario - be as creative as you like - and then focus on communicating the situation you've devised. You'll have noticed that some katas have examples or additional information where needed, so add any info your CodeWarriors will need. Strike the right balance though, as you don't want to give them too much or too little information. It needs to stay a challenge, but it shouldn't be impossible!

👉 Write your kata's scenario in a comment in [main.js](main.js), and include the start of the function that CodeWarriors will use to solve it (like you've seen on the katas you've done before).

### Step 2: Write your tests

Have a look at some of the katas you've done previously. You'll notice that under where you write your code, there's another box with a series of tests. Now that we've covered testing with `jest`, those tests should start to look familiar.

Start planning the tests you'll need to write to check your CodeWarriors' solutions. Think about the different types of data that can be handed into the function and potentially any tricky edge cases that might trip them up. Your goal is to write enough tests to cover the range of different possibilities for the function that will prove that it's fully solved the problem.

👉 Install `jest` as a dev dependency, and update the `scripts` section in [package.json](package.json) accordingly.

👉 Write enough tests in [main.test.js](main.test.js) so that you can be reasonably assured that when your CodeWarrior tests their solution to your kata, if the tests pass, it works.

You can write out the solution code and run your tests yourself to make sure your tests are working properly (and it's always good to experiment with making errors in your code on purpose to make sure your tests fail correctly too!).

### Step 3: Choose your victims! 😈

⚠️ Remember to remove any solution code you may have written to test your tests before pushing up your final version ready to exchange! ⚠️

👉 When you're ready, you can exchange your repo with another group, who can clone it down and attempt your kata.

👉 Once they finish, ask them for feedback, and you can use that user feedback to make any tweaks or improvements to your kata and/or tests.

## Bonus:

🌟 If you'd like, feel free to submit your kata to CodeWars!
