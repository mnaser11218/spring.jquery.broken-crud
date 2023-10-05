# The Broken Crud Application

* **Objective** - To create and deploy functioning full stack application with a minimum of 5 features:
  1. a button to `create` a new `Person` persisted in the H2 database
  2. a button to `readAll` all `Person` persisted in the H2 database
  3. a button to `read` a prticular `Person` persisted in the H2 database
  4. a button to `update` a particular `Person` persisted in the H2 database
  5. a button to `delete` a particular `Person` persisted in the H2 database
* **Purpose** - To gain familiarity with building full stack applications using Spring Boot and JQuery ajax calls


### How to Deploy to Render.com

![](./render-deployment.gif)



## How to Download

#### Part 1 - Forking the Project
* To _fork_ the project, click the `Fork` button located at the top right of the project.


#### Part 2 - Navigating to _forked_ Repository
* Navigate to your github profile to find the _newly forked repository_.
* Copy the URL of the project to the clipboard.

#### Part 3 - Cloning _forked_ repository
* Clone the repository from **your account** into the `~/dev` directory.
  * if you do not have a `~/dev` directory, make one by executing the following command:
    * `mkdir ~/dev`
  * navigate to the `~/dev` directory by executing the following command:
    * `cd ~/dev`
  * clone the project by executing the following command:
    * `git clone https://github.com/MYUSERNAME/NAMEOFPROJECT`

#### Part 4 - Check Build
* Ensure that the tests run upon opening the project.
    * You should see `Tests Failed: 99 of 99 tests`







## How to Submit

#### Part 1 -  _Pushing_ local changes to remote repository
* from a _terminal_ navigate to the root directory of the _cloned_ project.
* from the root directory of the project, execute the following commands:
    * add all changes
      * `git add .`
    * commit changes to be pushed
      * `git commit -m 'I have added changes'`
    * push changes to your repository
      * `git push -u origin master`

#### Part 2 - Submitting assignment
* from the browser, navigate to the _forked_ project from **your** github account.
* click the `Pull Requests` tab.
* select `New Pull Request`
