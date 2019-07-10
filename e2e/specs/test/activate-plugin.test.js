/**
 * WordPress dependencies
 */
import {
  insertBlock,
  getEditedPostContent,
  createNewPost,
  activatePlugin
} from "@wordpress/e2e-test-utils";

describe("Button", () => {
  beforeEach(async () => {
    await activatePlugin("isoblock/isoblock.php");
  });

  it("can jump focus back & forth", async () => {
    await createNewPost();
    await insertBlock("Hydrate Demo");

    expect(await getEditedPostContent()).toMatchSnapshot();
  });
});
