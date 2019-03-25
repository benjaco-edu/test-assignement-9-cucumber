# Test exercise - Gherkin test

https://github.com/datsoftlyngby/soft2019spring-test/blob/master/Slides/09%20BDD.pdf

Write a Gherkin test based on the decision table shown in the assignment

Find the feature decription at features/dicount.feature

The implementation of the test syntax is at features/step_definitions/stepdefs.js

And the tested class can be seen at src/Discount.js


## Result

```
> npm test
    > test-company-x@1.0.0 test /usr/src/app
    > cucumber-js

    ........................................

    8 scenarios (8 passed)
    40 steps (40 passed)
    0m00.007s
```

## Run it

Run `npm install` and the the shown commandos (requires node)

Or run it with docker

`sudo docker build -t test-cucumber .`

`sudo docker run --rm test-cucumber`
