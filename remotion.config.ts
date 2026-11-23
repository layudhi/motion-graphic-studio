/**
 * Note: When using the Node.JS APIs, the config file
 * doesn't apply. Instead, pass options directly to the APIs.
 *
 * All configuration options: https://remotion.dev/docs/config
 */

import { accessSync, constants, statSync } from "node:fs";
import { isAbsolute } from "node:path";
import { Config } from "@remotion/cli/config";

const browserExecutable = process.env.REMOTION_BROWSER_EXECUTABLE;
if (browserExecutable !== undefined) {
  if (!isAbsolute(browserExecutable)) {
    throw new Error("REMOTION_BROWSER_EXECUTABLE must be an absolute path.");
  }

  try {
    if (!statSync(browserExecutable).isFile()) {
      throw new Error("Expected a file.");
    }
    accessSync(browserExecutable, constants.X_OK);
  } catch (cause) {
    throw new Error(
      `REMOTION_BROWSER_EXECUTABLE is not an executable file: ${browserExecutable}`,
      { cause },
    );
  }
  Config.setBrowserExecutable(browserExecutable);
}

Config.setRspack(true);
Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);
Config.setDefaultPremountInSeconds(2);
