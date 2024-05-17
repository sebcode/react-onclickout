This is a fork of the https://github.com/boblauer/react-onclickout repository.

This fork transforms the package into a functionless stub, removing the use of
findDOMNode to ensure compatibility with the upcoming React 19.

It is intended for use in legacy codebases that do not depend on the package's
functionality but include it as a nested dependency.

Usage with yarn:

    "resolutions": {
        "react-onclickout": "npm:@sebttc/react-onclickout-dummy@^2.0.8"
    }
