import crypto from "crypto";

export function hash(data, alg = "sha256") {
  const hash = crypto.createHash(alg).update(`${data}`);
  return hash.digest("hex");
}
