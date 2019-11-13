> a test of rollup.js not clobbering names in the same namespace

Using Rollup.js to build a IIFE output means all the code is in the same
namespace. This is a test to confirm that things work when there are conflicts.

To run the test:
  1. clone this repo
  1. `yarn` to install deps
  1. `yarn build` to build the output
  1. `node bundle.js` to run the output

Usually (always) I don't include generated outputs in version control but that's
the whole point of this repo, so I'm making an exception and including
bundle.js.
