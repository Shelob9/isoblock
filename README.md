# Using ReactDOM.hydrate() For Isomorphic Gutenberg Blocks

> An Isomorphic Gutenberg Block uses the same React components for its "view" no matter where it is being displayed -- editor, front-end or a client decoupled from WordPress.
> > Me

This plugin is an example of a block that provides a form with one field. The block has a UI to set the defult value of the form. The form's HTML is saved to post content.

When a post with this block is loaded in the front-end, and the plugin is still active and JavaScript is enabled, then [`ReactDom.hydrate()`](https://reactjs.org/docs/react-dom.html#hydrate) is used to mount an app on the same DOM element. This allows the form to become interactive and have state manged by React, when possible. If the JavaScript isn't there, its just HTML.

## Why?
WordPress (or some other CMS) is used to create HTML. If the client has JavaScript enabled, then the JavaScript enhances the HTML. The HTML is not dependent on the JavaScript. If the plugin is deactivated, the from it outputs should still work.

Also, its way simpler than anything else I tried. The only PHP is the block registration. This should be usuable, very easily outside of WordPress.

## Notes
* State is managed in the editor by Gutenberg and in the front-end using Context API
    - [React Context TL;DR](https://codesandbox.io/s/react-context-tldr-bey3y)
* All dependencies are from [@wordpress](https://www.npmjs.com/org/wordpress)
* [Block Registration API RFC](https://github.com/WordPress/gutenberg/pull/13693)

## Development

* Clone
   * `git clone git@github.com:Shelob9/isoblock.git && cd isoblock`
* Install
  * `yarn`
* Start
  * `yarn start`
* Build For Production
  * `yarn build`
* Run Unit Tests
  * `yarn test:unit`
  * Uses [`@wordpress/scripts`](https://www.npmjs.com/package/@wordpress/scripts#test-unit-js)
* Run e2e Tests
  * `yarn test:e2e`
  * Must insall local dev environment first.

## Local Development

A local development server is included. It requires Docker and Docker Compose and is 95% copypated from [WordPress core's local environment](https://github.com/WordPress/wordpress-develop/tree/master/tools/local-env)

* Start server and echo URL
  * `yarn start:env`
