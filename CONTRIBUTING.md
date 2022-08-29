# Contributing guidelines

We welcome any kind of contribution to our software, from simple comment or question to a full fledged [pull request](https://help.github.com/articles/about-pull-requests/). Please read and follow our Code of Conduct [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

A contribution can be one of the following cases:

- you have a question;
- you think you may have found a bug (including unexpected behavior);
- you want to make some kind of change to the code base (e.g. to fix a bug, to add a new feature, to update documentation).

The sections below outline the steps in each case.

## You have a question

- use the search functionality [here](https://github.com/citation-file-format/cff-initializer-javascript/issues) to see if someone already filed the same issue;
- if your issue search did not yield any relevant results, make a new issue;

## You think you may have found a bug

- use the search functionality [here](https://github.com/citation-file-format/cff-initializer-javascript/issues) to see if someone already filed the same issue;
- if your issue search did not yield any relevant results, make a new issue, making sure to provide enough information to the rest of the community to understand the cause and context of the problem. Depending on the issue, you may want to include:
    - the version of cffinit (bottom right in the app);
    - if you are using a development version, the [SHA hashcode](https://help.github.com/articles/autolinked-references-and-urls/#commit-shas) of the commit that is causing your problem;
    - some identifying information (name and version number) for dependencies you're using;
    - information about the operating system;

## You want to make some kind of change to the code base

- (**important**) announce your plan to the rest of the community *before you start working*. This announcement should be in the form of a (new) issue;
- (**important**) wait until some kind of consensus is reached about your idea being implemented;
- if needed, fork the repository to your own Github profile and create your own feature branch off of the latest main commit. While working on your feature branch, make sure to stay up to date with the main branch by pulling in changes, possibly from the 'upstream' repository (follow the instructions [here](https://help.github.com/articles/configuring-a-remote-for-a-fork/) and [here](https://help.github.com/articles/syncing-a-fork/);
- read the [developer documentation](README.dev.md);
- make sure the existing tests still work;
- add your own tests (if necessary);
- update or expand the developer documentation;
- [push](http://rogerdudler.github.io/git-guide/) your feature branch to (your fork of) the cff-initializer-javascript repository on GitHub;
- create the pull request, e.g. following the instructions [here](https://help.github.com/articles/creating-a-pull-request/);
- verify that the GitHub workflows passed (if they don't, mark the PR as a draft while you fix it);
- don't request reviews, the reviewer will assign them themselves. 

If you don't know how to write or run tests or generate documentation, don't let this discourage you; we can help! Ask for help on the relevant issue so we can decide how to proceed.
