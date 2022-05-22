import { createStory } from "./create-story.ts";
import { getStoriesRecursive } from "./input-processing.ts";
import { common, emptyDir } from "./mod.ts";

export async function sync(
  inputFolder: string,
  outputFolder: string
): Promise<void> {
  console.log(`Detected changes in ${inputFolder}`);
  const gn = await getStoriesRecursive(inputFolder);
  await emptyDir(outputFolder)
  const promises = gn.map((x) => createStory(x, outputFolder));
  await Promise.all(promises);
}
